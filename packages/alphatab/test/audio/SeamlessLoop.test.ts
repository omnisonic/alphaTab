import { describe, expect, it } from 'vitest';
import {
    EventEmitter,
    EventEmitterOfT,
    type IEventEmitter,
    type IEventEmitterOfT
} from '@coderline/alphatab/EventEmitter';
import { ScoreLoader } from '@coderline/alphatab/importer/ScoreLoader';
import { AlphaSynthMidiFileHandler } from '@coderline/alphatab/midi/AlphaSynthMidiFileHandler';
import { MidiFile } from '@coderline/alphatab/midi/MidiFile';
import { MidiFileGenerator } from '@coderline/alphatab/midi/MidiFileGenerator';
import { AlphaSynth } from '@coderline/alphatab/synth/AlphaSynth';
import type { ISynthOutput, ISynthOutputDevice } from '@coderline/alphatab/synth/ISynthOutput';
import { PlaybackRange } from '@coderline/alphatab/synth/PlaybackRange';
import { SynthConstants } from '@coderline/alphatab/synth/SynthConstants';
import { TestPlatform } from 'test/TestPlatform';

const SAMPLE_RATE = 44100;
const TICKS_PER_QUARTER = 960;
const CH = SynthConstants.AudioChannels;

/**
 * Output that behaves like a real audio device: keeps up to `bufferMillis` of
 * synthesized audio queued and consumes it at a fixed real-time rate, one quantum per
 * {@link tick}. When the queue runs dry it plays silence (an underrun), and only
 * reports frames that were actually taken from the queue as played. Everything that
 * comes out is recorded in {@link wall}, including the silence.
 */
class BufferedOutput implements ISynthOutput {
    public wall: number[] = [];
    public wallFrames = 0;
    private _queue: Float32Array[] = [];
    private _queueOffset = 0;
    private _bufferedFrames = 0;
    private readonly _targetFrames: number;
    public readonly quantum = 1024;

    public constructor(bufferMillis: number) {
        this._targetFrames = Math.round((bufferMillis / 1000) * SAMPLE_RATE);
    }

    public get sampleRate(): number {
        return SAMPLE_RATE;
    }
    public open(_bufferTimeInMilliseconds: number): void {
        (this.ready as EventEmitter).trigger();
    }
    public play(): void {}
    public pause(): void {}
    public destroy(): void {}
    public activate(): void {}

    public addSamples(f: Float32Array): void {
        if (f.length > 0) {
            this._queue.push(f);
            this._bufferedFrames += f.length / CH;
        }
    }

    public resetSamples(): void {
        this._queue = [];
        this._queueOffset = 0;
        this._bufferedFrames = 0;
    }

    /** One quantum of wall-clock time. Returns the wall frame where it started. */
    public tick(): number {
        // top up the buffer like a device output would
        let guard = 0;
        while (this._bufferedFrames < this._targetFrames && guard++ < 64) {
            const before = this._bufferedFrames;
            (this.sampleRequest as EventEmitter).trigger();
            if (this._bufferedFrames === before) {
                break; // synth has nothing more right now
            }
        }

        const start = this.wallFrames;
        let consumed = 0;
        while (consumed < this.quantum && this._queue.length > 0) {
            const chunk = this._queue[0];
            const v0 = chunk[this._queueOffset];
            const v1 = chunk[this._queueOffset + 1];
            this.wall.push(Math.abs(v0) + Math.abs(v1));
            this._queueOffset += CH;
            if (this._queueOffset >= chunk.length) {
                this._queue.shift();
                this._queueOffset = 0;
            }
            consumed++;
        }
        this._bufferedFrames -= consumed;
        for (let i = consumed; i < this.quantum; i++) {
            this.wall.push(0); // underrun: silence
        }
        this.wallFrames += this.quantum;
        this.lastConsumed = consumed;
        if (consumed > 0) {
            (this.samplesPlayed as EventEmitterOfT<number>).trigger(consumed);
        }
        return start;
    }
    public lastConsumed = 0;

    readonly ready: IEventEmitter = new EventEmitter();
    readonly samplesPlayed: IEventEmitterOfT<number> = new EventEmitterOfT<number>();
    readonly sampleRequest: IEventEmitter = new EventEmitter();
    public async enumerateOutputDevices(): Promise<ISynthOutputDevice[]> {
        return [] as ISynthOutputDevice[];
    }
    public async setOutputDevice(_device: ISynthOutputDevice | null): Promise<void> {}
    public async getOutputDevice(): Promise<ISynthOutputDevice | null> {
        return null;
    }
}

/**
 * Looping a playback range must wrap without a gap: the next pass is synthesized
 * straight after the range end into the same buffer, so the audible loop period
 * equals the range length (within one micro-buffer), there is no silence at the
 * loop point, and the reported position jumps back exactly when the wrap is heard.
 */
describe('SeamlessLoop', () => {
    async function setup() {
        const data = await TestPlatform.loadFile('test-data/audio/default.sf2');
        // 120 bpm, 4/4: one quarter = 500ms, one bar = 2000ms
        const tex = '\\tempo 120 \\instrument 25 . ' + '3.3.4 3.3.4 3.3.4 3.3.4 | '.repeat(4);
        const score = ScoreLoader.loadAlphaTex(tex);
        const midi = new MidiFile();
        new MidiFileGenerator(score, null, new AlphaSynthMidiFileHandler(midi)).generate();

        const output = new BufferedOutput(500);
        const synth = new AlphaSynth(output, 500);
        synth.loadSoundFont(data, false);
        synth.loadMidiFile(midi);
        return { synth, output };
    }

    function loopRange(fromQuarter: number, toQuarter: number) {
        const range = new PlaybackRange();
        range.startTick = fromQuarter * TICKS_PER_QUARTER;
        range.endTick = toQuarter * TICKS_PER_QUARTER;
        return range;
    }

    it('wraps with an exact period and no silence', async () => {
        const { synth, output } = await setup();

        // loop bars 2-3: 2000ms .. 6000ms
        const range = loopRange(4, 12);
        synth.playbackRange = range;
        synth.isLooping = true;
        synth.tickPosition = range.startTick;

        const loopStartMillis = 2000;
        const loopFrames = 4 * SAMPLE_RATE;

        let lastTick = -1;
        let tickStart = 0;
        const wrapFrames: number[] = [];
        const ticksAfterWrap: number[] = [];
        let finishedCount = 0;
        synth.finished.on(() => {
            finishedCount++;
        });
        synth.positionChanged.on(e => {
            if (lastTick >= 0 && e.currentTick < lastTick) {
                // wall frame at which the wrap was heard: end of the consumed part of
                // this quantum, minus how far into the new pass the position already is
                const intoPass = ((e.currentTime - loopStartMillis) / 1000) * SAMPLE_RATE;
                wrapFrames.push(tickStart + output.lastConsumed - intoPass);
                ticksAfterWrap.push(e.currentTick);
            }
            lastTick = e.currentTick;
        });

        synth.play();
        // first wall frame with audio = start of the first pass
        let firstAudible = -1;
        while (output.wallFrames < loopFrames * 3.5) {
            tickStart = output.tick();
            if (firstAudible < 0 && output.lastConsumed > 0) {
                firstAudible = tickStart;
            }
        }

        expect(wrapFrames.length).toBe(3);
        expect(finishedCount).toBe(3);
        for (const t of ticksAfterWrap) {
            expect(t).toBeGreaterThanOrEqual(range.startTick);
            expect(t).toBeLessThan(range.startTick + TICKS_PER_QUARTER / 4);
        }
        // the first wrap lands about one loop after playback started (the harness only
        // knows the start to within one output quantum)
        expect(Math.abs(wrapFrames[0] - firstAudible - loopFrames)).toBeLessThanOrEqual(2 * output.quantum);
        // every following audible loop period is exact within a micro-buffer
        // (drain-then-seek looping adds the voice ramp-down plus the refill to every pass)
        for (let i = 1; i < wrapFrames.length; i++) {
            const period = wrapFrames[i] - wrapFrames[i - 1];
            expect(Math.abs(period - loopFrames)).toBeLessThanOrEqual(SynthConstants.MicroBufferSize);
        }

        // no silence after the first pass started: the loop point plays straight through
        let run = 0;
        let maxRun = 0;
        for (let f = firstAudible; f < output.wall.length; f++) {
            run = output.wall[f] < 1e-5 ? run + 1 : 0;
            maxRun = Math.max(maxRun, run);
        }
        expect(maxRun).toBeLessThan(Math.round(SAMPLE_RATE * 0.005));
    });

    it('a seek while a wrap is pending discards it', async () => {
        const { synth, output } = await setup();
        const range = loopRange(4, 8);
        synth.playbackRange = range;
        synth.isLooping = true;
        synth.tickPosition = range.startTick;

        let finishedCount = 0;
        synth.finished.on(() => {
            finishedCount++;
        });
        synth.play();
        // shortly before the first pass ends the wrap is already in the buffer
        while (synth.tickPosition < range.endTick - TICKS_PER_QUARTER / 4) {
            output.tick();
        }
        const seekTo = range.startTick + TICKS_PER_QUARTER;
        synth.tickPosition = seekTo;
        // the discarded wrap must not jump the position once its samples would have played
        for (let i = 0; i < 30; i++) {
            output.tick();
        }
        expect(finishedCount).toBe(0);
        expect(synth.tickPosition).toBeGreaterThan(seekTo);
    });

    it('without looping, playback still stops at the range end', async () => {
        const { synth, output } = await setup();
        const range = loopRange(4, 8);
        synth.playbackRange = range;
        synth.isLooping = false;
        synth.tickPosition = range.startTick;

        let finished = false;
        synth.finished.on(() => {
            finished = true;
        });
        synth.play();
        let guard = 0;
        while (!finished && guard++ < 10000) {
            output.tick();
        }
        expect(finished).toBe(true);
    });
});

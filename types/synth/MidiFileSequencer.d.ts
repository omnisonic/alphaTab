import type { MidiFile } from "./../midi/MidiFile";
import type { PlaybackRange } from "./PlaybackRange";
import { SynthEvent } from "./synthesis/SynthEvent";
import type { IAudioSampleSynthesizer } from "./IAudioSampleSynthesizer";
import { BackingTrackSyncPoint } from "./IAlphaSynth";
/**
 * @internal
 */
export declare class MidiFileSequencerTempoChange {
    bpm: number;
    ticks: number;
    time: number;
    constructor(bpm: number, ticks: number, time: number);
}
/**
 * A metronome click of the main song used to align the count-in with the song.
 * @internal
 * @record
 */
interface MidiSequencerMetronomeClick {
    time: number;
    counter: number;
    durationInTicks: number;
    timeSignatureNumerator: number;
}
/**
 * @internal
 */
declare class MidiSequencerState {
    tempoChanges: MidiFileSequencerTempoChange[];
    tempoChangeIndex: number;
    syncPoints: BackingTrackSyncPoint[];
    firstProgramEventPerChannel: Map<number, SynthEvent>;
    firstTimeSignatureNumerator: number;
    firstTimeSignatureDenominator: number;
    synthData: SynthEvent[];
    metronomeClicks: MidiSequencerMetronomeClick[];
    division: number;
    eventIndex: number;
    currentTime: number;
    syncPointIndex: number;
    playbackRange: PlaybackRange | null;
    playbackRangeStartTime: number;
    playbackRangeEndTime: number;
    endTick: number;
    endTime: number;
    currentTempo: number;
    syncPointTempo: number;
    metronomeChannel: number;
}
/**
 * This sequencer dispatches midi events to the synthesizer based on the current
 * synthesize position. The sequencer does not consider the playback speed.
 * @internal
 */
export declare class MidiFileSequencer {
    private _synthesizer;
    private _currentState;
    private _mainState;
    private _oneTimeState;
    private _countInState;
    get metronomeChannel(): number;
    get isPlayingMain(): boolean;
    get isPlayingOneTimeMidi(): boolean;
    get isPlayingCountIn(): boolean;
    constructor(synthesizer: IAudioSampleSynthesizer);
    get mainPlaybackRange(): PlaybackRange | null;
    set mainPlaybackRange(value: PlaybackRange | null);
    isLooping: boolean;
    get currentTime(): number;
    /**
     * Gets the duration of the song in ticks.
     */
    get currentEndTick(): number;
    get currentEndTime(): number;
    get currentTempo(): number;
    get modifiedTempo(): number;
    get syncPointTempo(): number;
    get currentSyncPoints(): BackingTrackSyncPoint[];
    /**
     * Gets or sets the playback speed.
     */
    playbackSpeed: number;
    mainSeek(timePosition: number): void;
    /**
     * Seamless loop wrap: moves the main sequence from the playback range end back to
     * its start without killing voices or resetting channels (unlike {@link mainSeek}),
     * so synthesis can continue into the same output buffer with no gap.
     * The overshoot past the range end (up to one micro-buffer) is carried over so
     * the loop period stays exact across passes; events between the range start and
     * that point still play (in the next micro-buffer), so a note right on the range
     * start is never skipped. Channel state at the range start is restored by
     * replaying control/program/pitch-bend events before it (no notes), so e.g. a
     * bend still held at the loop end doesn't leak into the next pass.
     * @returns the new main time position (speed applied), or -1 if no range is set.
     */
    mainLoopWrap(): number;
    private _mainSilentProcess;
    loadOneTimeMidi(midiFile: MidiFile): void;
    instrumentPrograms: Set<number>;
    percussionKeys: Set<number>;
    loadMidi(midiFile: MidiFile): void;
    createStateFromFile(midiFile: MidiFile): MidiSequencerState;
    fillMidiEventQueue(): boolean;
    fillMidiEventQueueToEndTime(endTime: number): boolean;
    private _fillMidiEventQueueLimited;
    mainTickPositionToTimePosition(tickPosition: number): number;
    mainUpdateSyncPoints(syncPoints: BackingTrackSyncPoint[]): void;
    currentTimePositionToTickPosition(timePosition: number): number;
    private static _sanitizeBpm;
    currentUpdateCurrentTempo(timePosition: number): void;
    private _updateCurrentTempo;
    currentUpdateSyncPoints(timePosition: number): void;
    private _updateSyncPoints;
    mainTimePositionFromBackingTrack(timePosition: number, backingTrackLength: number): number;
    mainTimePositionToBackingTrack(timePosition: number, backingTrackLength: number): number;
    private _tickPositionToTimePositionWithSpeed;
    private get _internalEndTime();
    get isFinished(): boolean;
    stop(): void;
    resetOneTimeMidi(): void;
    resetCountIn(): void;
    startCountIn(): void;
    generateCountInMidi(): void;
    private _findNextMainMetronomeClick;
}
export {};

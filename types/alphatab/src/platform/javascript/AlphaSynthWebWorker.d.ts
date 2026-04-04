import type { PlayerStateChangedEventArgs } from "./../../synth/PlayerStateChangedEventArgs";
import type { PositionChangedEventArgs } from "./../../synth/PositionChangedEventArgs";
import type { IWorkerScope } from "./IWorkerScope";
import type { MidiEventsPlayedEventArgs } from "./../../synth/MidiEventsPlayedEventArgs";
import type { PlaybackRangeChangedEventArgs } from "./../../synth/PlaybackRangeChangedEventArgs";
/**
 * This class implements a HTML5 WebWorker based version of alphaSynth
 * which can be controlled via WebWorker messages.
 * @target web
 * @internal
 */
export declare class AlphaSynthWebWorker {
    private _player;
    private _main;
    private _exporter;
    constructor(main: IWorkerScope, bufferTimeInMilliseconds: number);
    static init(): void;
    handleMessage(e: MessageEvent): void;
    private _handleExporterMessage;
    onPositionChanged(e: PositionChangedEventArgs): void;
    onPlayerStateChanged(e: PlayerStateChangedEventArgs): void;
    onFinished(): void;
    onSoundFontLoaded(): void;
    onSoundFontLoadFailed(e: any): void;
    private _serializeException;
    onMidiLoaded(e: PositionChangedEventArgs): void;
    onMidiLoadFailed(e: any): void;
    onReadyForPlayback(): void;
    onMidiEventsPlayed(args: MidiEventsPlayedEventArgs): void;
    onPlaybackRangeChanged(args: PlaybackRangeChangedEventArgs): void;
}

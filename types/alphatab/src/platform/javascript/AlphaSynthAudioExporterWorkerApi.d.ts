import type { MidiFile } from "./../../midi/MidiFile";
import type { AlphaSynthWebWorkerApi } from "./AlphaSynthWebWorkerApi";
import type { BackingTrackSyncPoint } from "./../../synth/IAlphaSynth";
import type { AudioExportChunk, AudioExportOptions, IAudioExporterWorker } from "./../../synth/IAudioExporter";
/**
 * @target web
 * @internal
 */
export declare class AlphaSynthAudioExporterWorkerApi implements IAudioExporterWorker {
    private static _nextExporterId;
    private _worker;
    private _unsubscribe;
    private _exporterId;
    private _ownsWorker;
    private _promise;
    constructor(synthWorker: AlphaSynthWebWorkerApi, ownsWorker: boolean);
    initialize(options: AudioExportOptions, midi: MidiFile, syncPoints: BackingTrackSyncPoint[], transpositionPitches: Map<number, number>): Promise<void>;
    handleWorkerMessage(e: MessageEvent): void;
    render(milliseconds: number): Promise<AudioExportChunk | undefined>;
    destroy(): void;
    [Symbol.dispose](): void;
}

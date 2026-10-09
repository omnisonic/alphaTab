import type { Settings } from "./../../Settings";
import { AlphaSynthWebAudioOutputBase } from "./AlphaSynthWebAudioOutputBase";
/**
 * This class implements a HTML5 Web Audio API based audio output device
 * for alphaSynth using the modern Audio Worklets.
 * @target web
 * @internal
 */
export declare class AlphaSynthWebWorklet {
    private static _isRegistered;
    static init(): void;
}
/**
 * This class implements a HTML5 Web Audio API based audio output device
 * for alphaSynth. It can be controlled via a JS API.
 * @target web
 * @internal
 */
export declare class AlphaSynthAudioWorkletOutput extends AlphaSynthWebAudioOutputBase {
    private _worklet;
    private _bufferTimeInMilliseconds;
    private readonly _settings;
    private _boundHandleMessage;
    /**
     * The events received between a play call and the creation of its worklet.
     */
    private _pendingEvents?;
    /**
     * The worklet is created asynchronously while play, pause and destroy are synchronous.
     * Their audio graph operations are chained here to run in the order of the calls.
     */
    private _operations;
    /**
     * Aborted on destroy, to stop waiting for a worklet load which might never complete.
     */
    private readonly _destroyed;
    constructor(settings: Settings);
    open(bufferTimeInMilliseconds: number): void;
    play(): void;
    pause(): void;
    destroy(): void;
    private _enqueue;
    /**
     * Loads the worklet module.
     * @returns false if the output was destroyed before the load completed.
     */
    private _loadWorklet;
    private _start;
    private _stop;
    private _handleMessage;
    private _postWorkerMessage;
    addSamples(f: Float32Array): void;
    resetSamples(): void;
}

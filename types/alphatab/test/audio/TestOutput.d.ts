import type { ISynthOutput, ISynthOutputDevice } from "./../../src/synth/ISynthOutput";
import { type IEventEmitter, type IEventEmitterOfT } from "./../../src/EventEmitter";
/**
 * @internal
 */
export declare class TestOutput implements ISynthOutput {
    samples: Float32Array[];
    sampleCount: number;
    private _storeSamples;
    get sampleRate(): number;
    constructor(storeSamples?: boolean);
    open(_bufferTimeInMilliseconds: number): void;
    play(): void;
    destroy(): void;
    next(): void;
    pause(): void;
    addSamples(f: Float32Array): void;
    resetSamples(): void;
    activate(): void;
    /**
     * Fired when the output has been successfully opened and is ready to play samples.
     */
    readonly ready: IEventEmitter;
    /**
     * Fired when a certain number of samples have been played.
     */
    readonly samplesPlayed: IEventEmitterOfT<number>;
    /**
     * Fired when the output needs more samples to be played.
     */
    readonly sampleRequest: IEventEmitter;
    enumerateOutputDevices(): Promise<ISynthOutputDevice[]>;
    setOutputDevice(_device: ISynthOutputDevice | null): Promise<void>;
    getOutputDevice(): Promise<ISynthOutputDevice | null>;
}

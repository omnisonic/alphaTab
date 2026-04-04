import type { ISynthOutput, ISynthOutputDevice } from "./../../synth/ISynthOutput";
import { type IEventEmitter, type IEventEmitterOfT } from "./../../EventEmitter";
/**
 * @target web
 * @internal
 */
export declare class AlphaSynthWorkerSynthOutput implements ISynthOutput {
    static readonly CmdOutputPrefix: string;
    static readonly CmdOutputAddSamples: string;
    static readonly CmdOutputPlay: string;
    static readonly CmdOutputPause: string;
    static readonly CmdOutputResetSamples: string;
    static readonly CmdOutputStop: string;
    static readonly CmdOutputSampleRequest: string;
    static readonly CmdOutputSamplesPlayed: string;
    static preferredSampleRate: number;
    private _worker;
    get sampleRate(): number;
    open(): void;
    destroy(): void;
    private _handleMessage;
    readonly ready: IEventEmitter;
    readonly samplesPlayed: IEventEmitterOfT<number>;
    readonly sampleRequest: IEventEmitter;
    addSamples(samples: Float32Array): void;
    play(): void;
    pause(): void;
    resetSamples(): void;
    activate(): void;
    enumerateOutputDevices(): Promise<ISynthOutputDevice[]>;
    setOutputDevice(_device: ISynthOutputDevice | null): Promise<void>;
    getOutputDevice(): Promise<ISynthOutputDevice | null>;
}

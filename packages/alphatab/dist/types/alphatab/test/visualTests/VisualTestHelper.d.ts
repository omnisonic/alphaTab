import { AlphaSkiaCanvas, AlphaSkiaImage } from '@coderline/alphaskia';
import { AlphaTabApiBase } from "./../../src/AlphaTabApiBase";
import type { Score } from "./../../src/model/Score";
import type { RenderFinishedEventArgs } from "./../../src/rendering/RenderFinishedEventArgs";
import { Settings } from "./../../src/Settings";
/**
 * @internal
 */
export declare class VisualTestRun {
    width: number;
    referenceFileName: string;
    constructor(width: number, referenceFileName: string);
}
/**
 * @internal
 */
export declare class VisualTestOptions {
    score: Score;
    runs: VisualTestRun[];
    settings: Settings;
    tracks?: number[];
    tolerancePercent?: number;
    prepareFullImage?: (run: VisualTestRun, api: AlphaTabApiBase<unknown>, fullImage: AlphaSkiaCanvas) => void;
    constructor(score: Score, runs: VisualTestRun[], settings: Settings | undefined);
    static file(inputFile: string, runs: VisualTestRun[], settings?: Settings): Promise<VisualTestOptions>;
    static tex(tex: string, referenceFileName: string, settings?: Settings): VisualTestOptions;
}
/**
 * @partial
 * @internal
 */
export declare class VisualTestHelper {
    static runVisualTest(inputFile: string, settings?: Settings, configure?: (o: VisualTestOptions) => void): Promise<void>;
    static runVisualTestTex(tex: string, referenceFileName: string, settings?: Settings, configure?: (o: VisualTestOptions) => void): Promise<void>;
    static runVisualTestFull(options: VisualTestOptions): Promise<void>;
    private static _alphaSkiaPrepared;
    static prepareAlphaSkia(): Promise<void>;
    /**
     * @target web
     * @partial
     */
    static enableAlphaSkia(bravura: ArrayBuffer): void;
    static prepareSettingsForTest(settings: Settings): void;
    static compareVisualResult(run: VisualTestRun, totalWidth: number, totalHeight: number, result: RenderFinishedEventArgs[], referenceFileData: Uint8Array, api: AlphaTabApiBase<unknown>, options: VisualTestOptions): Promise<void>;
    private static _expectToEqualVisuallyAsync;
    static saveFiles(expectedFilePath: string, actual: AlphaSkiaImage, diff: AlphaSkiaImage | undefined): Promise<void>;
    static deleteFiles(expectedFilePath: string): Promise<void>;
    static createFileName(oldName: string, part: string): string;
}

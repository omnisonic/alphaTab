import type { Score } from "./../../src/model/Score";
/**
 * @partial
 * @internal
 */
export declare class ComparisonHelpers {
    private static _removeInitialAutomations;
    private static _removeEmptyVoices;
    static alphaTexExportRoundtripPrepare(expected: Score): void;
    static alphaTexExportRoundtripEqual(testName: string, actual: Score, expected: Score, ignoreKeys?: string[] | null): void;
    static expectJsonEqual(expected: unknown, actual: unknown, path: string, ignoreKeys: string[] | null, ignorePaths?: RegExp[] | null): void;
    /**
     * @target web
     * @partial
     */
    static compareObjects(_expected: unknown, _actual: unknown, path: string, _ignoreKeys: string[] | null): boolean;
}

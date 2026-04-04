/**
 * @internal
 */
export declare class PrettyFormatConfig {
    escapeString: boolean;
    indent: string;
    maxDepth: number;
    maxWidth: number;
    min: boolean;
    plugins: PrettyFormatNewPlugin[];
    printBasicPrototype: boolean;
    printFunctionName: boolean;
    spacingInner: string;
    spacingOuter: string;
}
/**
 * @internal
 */
export type PrettyFormatPrinter = (val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[]) => string;
/**
 * @internal
 */
interface PrettyFormatNewPlugin {
    serialize(val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[], printer: PrettyFormatPrinter): string;
    test(arg0: unknown): boolean;
}
/**
 * @partial
 * @internal
 */
export declare class PrettyFormat {
    static findPlugin(plugins: PrettyFormatNewPlugin[], val: unknown): PrettyFormatNewPlugin | null;
    static printer(val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[]): string;
    static printNumber(val: number): string;
    static printBigInt(val: bigint): string;
    static printError(val: Error): string;
    /**
     * The first port of call for printing an object, handles most of the
     * data-types in JS.
     */
    static printBasicValue(val: unknown, escapeString: boolean): string | null;
    static tryGetIterableType(val: unknown): string;
    /**
     * Handles more complex objects ( such as objects with circular references.
     * maps and sets etc )
     */
    static printComplexValue(val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[]): string;
    private static _printObjectProperties;
    /**
     * Return entries (for example, of a map)
     * with spacing, indentation, and comma
     * without surrounding punctuation (for example, braces)
     */
    static printIteratorEntries(iterator: Iterable<[unknown, unknown]>, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[], printer: PrettyFormatPrinter, separator?: string): string;
    /**
     * Return values (for example, of a set)
     * with spacing, indentation, and comma
     * without surrounding punctuation (braces or brackets)
     */
    static printIterableValues(iterator: Iterable<unknown>, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[], printer: PrettyFormatPrinter): string;
    /**
     * Returns a presentation string of your `val` object
     * @param val any potential JavaScript object
     * @param options Custom settings
     */
    static format(val: unknown, config?: PrettyFormatConfig): string;
}
/**
 * @partial
 * @internal
 */
export declare class AlphaTexAstNodePlugin implements PrettyFormatNewPlugin {
    static readonly instance: AlphaTexAstNodePlugin;
    /**
     * @partial
     * @target web
     */
    test(arg0: unknown): boolean;
    serialize(val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[], printer: PrettyFormatPrinter): string;
}
/**
 * @partial
 * @internal
 */
export declare class AlphaTexDiagnosticPlugin implements PrettyFormatNewPlugin {
    static readonly instance: AlphaTexDiagnosticPlugin;
    /**
     * @partial
     * @target web
     */
    test(arg0: unknown): boolean;
    serialize(val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[], printer: PrettyFormatPrinter): string;
}
/**
 * A serializer plugin for pretty-format for creating simple MidiEbent snapshots
 * @internal
 */
export declare class MidiEventSerializerPlugin implements PrettyFormatNewPlugin {
    static readonly instance: MidiEventSerializerPlugin;
    serialize(val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[], printer: PrettyFormatPrinter): string;
    test(arg0: unknown): boolean;
}
/**
 * A serializer plugin for pretty-format for creating simple Score model snapshots
 * @partial
 * @internal
 */
export declare class ScoreSerializerPlugin implements PrettyFormatNewPlugin {
    static readonly instance: ScoreSerializerPlugin;
    private _defaultScoreJson;
    private _defaultMasterBarJson;
    private _defaultTrackJson;
    private _defaultStaffJson;
    private _defaultBarJson;
    private _defaultVoiceJson;
    private _defaultBeatJson;
    private _defaultNoteJson;
    private constructor();
    serialize(val: unknown, config: PrettyFormatConfig, indentation: string, depth: number, refs: unknown[], printer: PrettyFormatPrinter): string;
    test(arg0: unknown): boolean;
    private _filterOutDefaultValues;
    private static _sanitizeJson;
    /**
     * @target web
     * @partial
     */
    private static _isPlatformTypeEqual;
}
/**
 * @internal
 */
export declare class SnapshotFileRepository {
    private static _cache;
    static loadSnapshotFile(path: string): SnapshotFile;
}
/**
 * @internal
 */
export declare class SnapshotFile {
    private static _createConfig;
    private static readonly _matchOptions;
    snapshots: Map<string, string>;
    /**
     * Matches the given snapshot with the contained one.
     * @param name  The name of the snapshot
     * @param value  The raw value for which to create the snapshot
     * @returns An error message if there was a match error, if they match null
     */
    match(name: string, value: unknown): string | null;
    private static _printBacktickString;
    private static _escapeBacktickString;
    loadFrom(path: string): void;
}
export {};

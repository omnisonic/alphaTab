/**
 * @partial
 * @internal
 */
export declare class TestPlatform {
    /**
     * @target web
     * @partial
     */
    static throttle(action: () => void, delay: number): () => void;
    /**
     * @target web
     * @partial
     */
    static saveFile(name: string, data: Uint8Array): Promise<void>;
    /**
     * @target web
     * @partial
     */
    static deleteFile(name: string): Promise<void>;
    /**
     * @target web
     * @partial
     */
    static loadFile(path: string): Promise<Uint8Array>;
    /**
     * @target web
     * @partial
     */
    static loadFileSync(path: string): Uint8Array;
    /**
     * @target web
     * @partial
     */
    static listDirectory(path: string): Promise<string[]>;
    /**
     * @target web
     * @partial
     */
    static loadFileAsJson<T>(path: string): Promise<T>;
    static loadFileAsString(path: string): Promise<string>;
    static loadFileAsStringSync(path: string): string;
    /**
     * @target web
     * @partial
     */
    static saveFileAsString(name: string, data: string): Promise<void>;
    static changeExtension(file: string, extension: string): string;
    /**
     * @target web
     * @partial
     */
    static joinPath(...parts: string[]): string;
    /**
     * @target web
     * @partial
     */
    static enumValues<T>(enumType: any): T[];
    /**
     * @target web
     * @partial
     */
    static typedArrayAsUnknownArray(array: unknown): unknown[];
    /**
     * @target web
     * @partial
     */
    static typedArrayAsUnknownIterable(array: unknown): Iterable<unknown>;
    /**
     * @target web
     * @partial
     */
    static mapAsUnknownIterable(map: unknown): Iterable<[unknown, unknown]>;
    /**
     * @target web
     * @partial
     */
    static setAsUnknownIterable(set: unknown): Iterable<unknown>;
    /**
     * @target web
     * @partial
     */
    static getConstructorName(val: unknown): string;
    /**
     * @target web
     * @partial
     */
    static currentTestName: string;
}

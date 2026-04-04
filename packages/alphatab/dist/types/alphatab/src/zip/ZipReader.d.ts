import type { IReadable } from "./../io/IReadable";
import { ZipEntry } from "./ZipEntry";
/**
 * @internal
 */
export declare class ZipReader {
    private _readable;
    constructor(readable: IReadable);
    read(): ZipEntry[];
    private _readEntry;
}

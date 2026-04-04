import { MusicXmlImporter } from "./../../src/importer/MusicXmlImporter";
import type { Score } from "./../../src/model/Score";
import { Settings } from "./../../src/Settings";
/**
 * @internal
 */
export declare class MusicXmlImporterTestHelper {
    static loadFile(file: string): Promise<Score>;
    static prepareImporterWithBytes(buffer: Uint8Array, settings?: Settings): MusicXmlImporter;
    static testReferenceFile(file: string, render?: boolean, renderAllTracks?: boolean, prepare?: ((settings: Settings) => void) | null): Promise<Score>;
    protected static getHierarchy(node: unknown): string;
}

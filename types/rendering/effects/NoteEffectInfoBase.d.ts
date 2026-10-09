import type { Beat } from "./../../model/Beat";
import type { Note } from "./../../model/Note";
import type { BarRendererBase } from "./../BarRendererBase";
/**
 * Builds a `shouldCreateGlyph` for note-based effects: it creates a glyph
 * as soon as any note on the beat matches the given predicate.
 * @internal
 */
export declare function createNoteShouldCreateGlyph(shouldCreateGlyphForNote: (note: Note) => boolean): (renderer: BarRendererBase, beat: Beat) => boolean;

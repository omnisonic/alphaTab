import type { Note } from "./../../model/Note";
import { type NoteXPosition, NoteYPosition } from "./../BarRendererBase";
import { BeatGlyphBase } from "./BeatGlyphBase";
import type { Glyph } from "./Glyph";
import type { BeatBounds } from "./../utils/BeatBounds";
/**
 * @internal
 */
export declare abstract class BeatOnNoteGlyphBase extends BeatGlyphBase {
    onTimeX: number;
    middleX: number;
    stemX: number;
    abstract buildBoundingsLookup(_beatBounds: BeatBounds, _cx: number, _cy: number): void;
    abstract getNoteX(note: Note, requestedPosition: NoteXPosition): number;
    abstract getNoteY(note: Note, requestedPosition: NoteYPosition): number;
    abstract getRestY(requestedPosition: NoteYPosition): number;
    abstract getHighestNoteY(requestedPosition: NoteYPosition): number;
    abstract getLowestNoteY(requestedPosition: NoteYPosition): number;
    /**
     * Resolves the requested position on the given rest glyph.
     * Rests have no stems, positions with stems reserve the space of a quarter note stem (e.g. for beams passing by).
     */
    protected getRestGlyphY(g: Glyph | null, requestedPosition: NoteYPosition): number;
}

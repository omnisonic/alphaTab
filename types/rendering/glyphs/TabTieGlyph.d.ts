import type { Note } from "./../../model/Note";
import { NoteTieGlyph } from "./TieGlyph";
import { BeamDirection } from "./../utils/BeamDirection";
/**
 * @internal
 */
export declare class TabTieGlyph extends NoteTieGlyph {
    protected calculateTieDirection(): BeamDirection;
    /**
     * The side of tab ties and slurs: above the upper three strings, below the lower ones.
     */
    static getBeamDirectionForNote(note: Note): BeamDirection;
}

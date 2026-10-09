import type { Note } from "./../../model/Note";
import { TabSlurGlyph } from "./TabSlurGlyph";
import { BeamDirection } from "./../utils/BeamDirection";
/**
 * @internal
 */
export declare class NumberedSlurGlyph extends TabSlurGlyph {
    private _forSlide;
    constructor(slurEffectId: string, startNote: Note, endNote: Note, forSlide: boolean, forEnd: boolean);
    protected calculateTieDirection(): BeamDirection;
    tryExpand(startNote: Note, endNote: Note, forSlide: boolean, forEnd: boolean): boolean;
}

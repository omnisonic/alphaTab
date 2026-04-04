import type { Note } from "./../../model/Note";
import { TabTieGlyph } from "./TabTieGlyph";
/**
 * @internal
 */
export declare class TabSlurGlyph extends TabTieGlyph {
    private _forSlide;
    constructor(slurEffectId: string, startNote: Note, endNote: Note, forSlide: boolean, forEnd: boolean);
    getTieHeight(startX: number, _startY: number, endX: number, _endY: number): number;
    tryExpand(startNote: Note, endNote: Note, forSlide: boolean, forEnd: boolean): boolean;
}

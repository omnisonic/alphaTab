import type { Beat } from "./../../model/Beat";
import type { Note } from "./../../model/Note";
import { TabTieGlyph } from "./TabTieGlyph";
import { BeamDirection } from "./../utils/BeamDirection";
/**
 * The notes connected by the effect slur arc of one side of a beat.
 * @internal
 * @record
 */
export interface TabEffectSlurGroup {
    startNote: Note;
    endNote: Note;
}
/**
 * The arc of hammer-ons, pull-offs and legato slides on the tab staff.
 * @remarks
 * Like Guitar Pro, the notes of a beat take one arc per side (above the upper strings, below the lower strings),
 * connecting the outer note of that side up to the furthest destination of the chains starting on it.
 * @internal
 */
export declare class TabSlurGlyph extends TabTieGlyph {
    /**
     * Gets the notes the effect slur arc on the given side of the beat connects.
     * @returns The notes, or null if no effect slur chain starts on this side of the beat.
     */
    static getEffectSlurGroup(beat: Beat, direction: BeamDirection): TabEffectSlurGroup | null;
    getTieHeight(startX: number, _startY: number, endX: number, _endY: number): number;
}

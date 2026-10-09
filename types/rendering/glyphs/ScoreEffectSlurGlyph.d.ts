import type { Beat } from "./../../model/Beat";
import { ScoreSlurGlyph } from "./ScoreSlurGlyph";
import { BeamDirection } from "./../utils/BeamDirection";
/**
 * The slur of hammer-ons, pull-offs and legato slides in standard notation.
 * @remarks
 * Behind Bars: all notes on one stem take a single slur, and not a slur to each note.
 * Hence the slur connects the outer notes of the start and end beat on the side of the slur,
 * regardless of which notes of the chords carry the effect.
 *
 * In multi-voice bars each voice has its own stem direction. Like articulation, the slur is then
 * placed at the stem end (Behind Bars: never on the notehead side in double-stemmed writing).
 * @internal
 */
export declare class ScoreEffectSlurGlyph extends ScoreSlurGlyph {
    private _startBeat;
    private _endBeat;
    constructor(slurEffectId: string, startBeat: Beat, endBeat: Beat, forEnd: boolean);
    /**
     * Gets the beat on which the effect slur started on the given beat ends: the furthest destination
     * of the effect slur chains starting on any note of the beat.
     * @returns The destination beat or null if no effect slur chain starts on the beat.
     */
    static getDestinationBeat(beat: Beat): Beat | null;
    private static _isOnStemEnd;
    private _stemEndY;
    protected calculateTieDirection(): BeamDirection;
    protected calculateStartX(): number;
    protected calculateStartY(): number;
    protected calculateEndX(): number;
    protected caclculateEndY(): number;
}

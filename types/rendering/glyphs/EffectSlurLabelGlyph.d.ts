import type { Beat } from "./../../model/Beat";
import type { Font } from "./../../model/Font";
import { type ICanvas } from "./../../platform/ICanvas";
import { EffectGlyph } from "./EffectGlyph";
/**
 * The label of hammer-ons, pull-offs and legato slides (H, P, sl.) shown above the staff.
 * @remarks
 * The glyph belongs to the beat where the effect starts, but the label is centered between
 * this beat and the beat where the effect ends (or the end of the system for effects continuing
 * on the next system). The offset to this center is resolved via {@link resolveOffset} once all bars
 * of the system have their final positions.
 *
 * In the vertical placement the label keeps its whole segment (start to end beat) clear, so it is placed
 * above everything on the segment (e.g. fret numbers sticking out of the tab staff), but it only occupies
 * the range of its text, so other markers can share the row next to it.
 *
 * Several labels of one beat (e.g. H on one string, P on another) are stacked with the usual effect band
 * padding between them, as if they were separate bands.
 * @internal
 */
export declare class EffectSlurLabelGlyph extends EffectGlyph {
    private _endBeat;
    private _texts;
    private _font;
    private _lines;
    private _labelOffset;
    private _segmentStart;
    private _segmentEnd;
    constructor(lines: string[], font: Font, endBeat: Beat);
    doLayout(): void;
    /**
     * Centers the label between its beat and the end beat (or the end of the system).
     */
    resolveOffset(): void;
    getBoundingBoxLeft(): number;
    getBoundingBoxRight(): number;
    getPlacementClearanceLeft(): number;
    getPlacementClearanceRight(): number;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

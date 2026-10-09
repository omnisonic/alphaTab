import { SpacingGlyph } from "./SpacingGlyph";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
/**
 * The spacing between the start barline and the first bar header glyph (clef, key signature, time signature ...).
 * @internal
 */
export declare class StartSpacingGlyph extends SpacingGlyph {
    /**
     * The bar header column of the start spacing.
     */
    static readonly HeaderRank: number;
    registerHeaderRod(info: BarLayoutingInfo): void;
    applyHeaderRod(info: BarLayoutingInfo): void;
}

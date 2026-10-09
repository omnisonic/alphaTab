import type { ICanvas } from "./../../platform/ICanvas";
import { LeftToRightLayoutingGlyphGroup } from "./LeftToRightLayoutingGlyphGroup";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
/**
 * @internal
 */
export declare class KeySignatureGlyph extends LeftToRightLayoutingGlyphGroup {
    /**
     * The bar header column of key signatures.
     */
    static readonly HeaderRank: number;
    registerHeaderRod(info: BarLayoutingInfo): void;
    applyHeaderRod(info: BarLayoutingInfo): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

import { type ICanvas } from "./../../platform/ICanvas";
import { LeftToRightLayoutingGlyphGroup } from "./LeftToRightLayoutingGlyphGroup";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
/**
 * @internal
 */
export declare class BarLineGlyph extends LeftToRightLayoutingGlyphGroup {
    /**
     * The bar header column of the start barline.
     */
    static readonly HeaderRank: number;
    private _isRight;
    private _extendToNextStaff;
    constructor(isRight: boolean, extendToNextStaff: boolean);
    doLayout(): void;
    registerHeaderRod(info: BarLayoutingInfo): void;
    applyHeaderRod(info: BarLayoutingInfo): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

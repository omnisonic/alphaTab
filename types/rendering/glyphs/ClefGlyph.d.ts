import { Clef } from "./../../model/Clef";
import { Ottavia } from "./../../model/Ottavia";
import type { ICanvas } from "./../../platform/ICanvas";
import { MusicFontGlyph } from "./MusicFontGlyph";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
/**
 * @internal
 */
export declare class ClefGlyph extends MusicFontGlyph {
    /**
     * The bar header column of clefs (shared with {@link TabClefGlyph}).
     */
    static readonly HeaderRank: number;
    private _clef;
    private _clefOttava;
    private _ottavaGlyph?;
    constructor(x: number, y: number, clef: Clef, clefOttava: Ottavia);
    getBoundingBoxTop(): number;
    getBoundingBoxBottom(): number;
    doLayout(): void;
    registerHeaderRod(info: BarLayoutingInfo): void;
    applyHeaderRod(info: BarLayoutingInfo): void;
    private static _getSymbol;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

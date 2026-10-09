import { GlyphGroup } from "./GlyphGroup";
import { BarSubElement } from "./../../model/Bar";
import { type ICanvas } from "./../../platform/ICanvas";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
/**
 * @internal
 */
export declare abstract class TimeSignatureGlyph extends GlyphGroup {
    private _numerator;
    private _denominator;
    private _isCommon;
    private _isFreeTime;
    barSubElement: BarSubElement;
    /**
     * The bar header column of time signatures.
     */
    static readonly HeaderRank: number;
    /**
     * The spacing after the time signature. If negative, the default
     * {@link EngravingSettings.preBeatGlyphSpacing} is used.
     */
    trailingSpacing: number;
    constructor(x: number, y: number, numerator: number, denominator: number, isCommon: boolean, isFreeTime: boolean);
    protected abstract get commonScale(): number;
    protected abstract get numberScale(): number;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    registerHeaderRod(info: BarLayoutingInfo): void;
    applyHeaderRod(info: BarLayoutingInfo): void;
    doLayout(): void;
}

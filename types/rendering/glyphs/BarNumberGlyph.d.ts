import { type ICanvas } from "./../../platform/ICanvas";
import { EffectGlyph } from "./EffectGlyph";
/**
 * @internal
 */
export declare class BarNumberGlyph extends EffectGlyph {
    private _barNumberText;
    constructor(x: number, y: number, barNumberText: string);
    doLayout(): void;
    populateSkyline(): void;
    /**
     * The glyph is created for every bar which may carry a bar number, but whether it is displayed
     * depends on the position of the bar in the layout (e.g. first bar of the system).
     * Hidden bar numbers report no extent (NaN bounds) so they do not take part in the placement.
     */
    private get _isVisible();
    getBoundingBoxLeft(): number;
    getBoundingBoxRight(): number;
    getBoundingBoxTop(): number;
    getBoundingBoxBottom(): number;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

import { type Beat } from "./../../model/Beat";
import { type ICanvas } from "./../../platform/ICanvas";
import { EffectGlyph } from "./EffectGlyph";
/**
 * @internal
 */
export declare class TabWhammyBarGlyph extends EffectGlyph {
    private _beat;
    private _renderPoints;
    private _isSimpleDip;
    originalTopOffset: number;
    originalBottomOffset: number;
    topOffset: number;
    bottomOffset: number;
    constructor(beat: Beat);
    private _createRenderingPoints;
    doLayout(): void;
    private _getOffset;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    private _paintWhammy;
}

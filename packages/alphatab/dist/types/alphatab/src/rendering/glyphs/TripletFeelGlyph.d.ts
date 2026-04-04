import { TripletFeel } from "./../../model/TripletFeel";
import { type ICanvas } from "./../../platform/ICanvas";
import { EffectGlyph } from "./EffectGlyph";
/**
 * @internal
 */
export declare class TripletFeelGlyph extends EffectGlyph {
    private _tripletFeel;
    private _tupletHeight;
    private _tupletPadding;
    constructor(tripletFeel: TripletFeel);
    doLayout(): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    private _drawGroup;
}

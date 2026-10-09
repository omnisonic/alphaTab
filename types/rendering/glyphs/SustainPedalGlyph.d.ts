import { EffectGlyph } from "./EffectGlyph";
import { type ICanvas } from "./../../platform/ICanvas";
/**
 * @internal
 */
export declare class SustainPedalGlyph extends EffectGlyph {
    constructor();
    doLayout(): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    /**
     * On a pedal change (lift and retake at the same position) the symbols are placed next to each other.
     */
    private _changeOffset;
}

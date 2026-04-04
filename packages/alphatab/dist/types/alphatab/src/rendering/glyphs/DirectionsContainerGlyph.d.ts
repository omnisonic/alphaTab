import { Direction } from "./../../model/Direction";
import { EffectGlyph } from "./EffectGlyph";
import { type ICanvas } from "./../../platform/ICanvas";
/**
 * @internal
 */
export declare class DirectionsContainerGlyph extends EffectGlyph {
    private _directions;
    private _barBeginGlyphs;
    private _barEndGlyphs;
    constructor(x: number, y: number, directions: Set<Direction>);
    doLayout(): void;
    private _doSideLayout;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

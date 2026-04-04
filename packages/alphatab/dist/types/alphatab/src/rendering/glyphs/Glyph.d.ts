import type { ICanvas } from "./../../platform/ICanvas";
import type { BarRendererBase } from "./../BarRendererBase";
/**
 * A glyph is a single symbol which can be added to a GlyphBarRenderer for automated
 * layouting and drawing of stacked symbols.
 * @internal
 */
export declare class Glyph {
    x: number;
    y: number;
    width: number;
    height: number;
    renderer: BarRendererBase;
    constructor(x: number, y: number);
    getBoundingBoxTop(): number;
    getBoundingBoxBottom(): number;
    doLayout(): void;
    paint(_cx: number, _cy: number, _canvas: ICanvas): void;
}

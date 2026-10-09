import type { ICanvas } from "./../../platform/ICanvas";
import type { BarRendererBase } from "./../BarRendererBase";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
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
    /**
     * Paint extent — distinct from the rhythmic-spacing extent (`x`, `x + width`).
     * Override on zero-width "no-rod" glyphs so the bar-local skyline still sees them.
     */
    getBoundingBoxLeft(): number;
    getBoundingBoxRight(): number;
    doLayout(): void;
    /** Hook for glyphs whose bbox is only final after `scaleToWidth`. Default no-op. */
    populateSkyline(): void;
    /**
     * Hook for bar header glyphs (clef, key signature, time signature ...) to register
     * their column extents via {@link BarLayoutingInfo.addHeaderRod}. Default no-op.
     */
    registerHeaderRod(_info: BarLayoutingInfo): void;
    /**
     * Hook for bar header glyphs to apply their aligned position via
     * {@link BarLayoutingInfo.getHeaderRodX}. Default no-op.
     */
    applyHeaderRod(_info: BarLayoutingInfo): void;
    paint(_cx: number, _cy: number, _canvas: ICanvas): void;
}

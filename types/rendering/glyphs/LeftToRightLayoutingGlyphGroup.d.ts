import type { Glyph } from "./Glyph";
import { GlyphGroup } from "./GlyphGroup";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
/**
 * @internal
 */
export declare class LeftToRightLayoutingGlyphGroup extends GlyphGroup {
    gap: number;
    constructor();
    doLayout(): void;
    addGlyph(g: Glyph): void;
    registerHeaderRod(info: BarLayoutingInfo): void;
    applyHeaderRod(info: BarLayoutingInfo): void;
}

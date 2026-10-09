import { MusicFontGlyph } from "./MusicFontGlyph";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
/**
 * @internal
 */
export declare class TabClefGlyph extends MusicFontGlyph {
    constructor(x: number, y: number);
    doLayout(): void;
    registerHeaderRod(info: BarLayoutingInfo): void;
    applyHeaderRod(info: BarLayoutingInfo): void;
}

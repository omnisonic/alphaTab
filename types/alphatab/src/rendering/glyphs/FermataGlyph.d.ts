import { FermataType } from "./../../model/Fermata";
import type { ICanvas } from "./../../platform/ICanvas";
import { MusicFontGlyph } from "./MusicFontGlyph";
/**
 * @internal
 */
export declare class FermataGlyph extends MusicFontGlyph {
    constructor(x: number, y: number, fermata: FermataType);
    private static _getSymbol;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

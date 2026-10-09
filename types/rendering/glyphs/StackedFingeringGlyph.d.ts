import { MusicFontSymbol } from "./../../model/MusicFontSymbol";
import type { ICanvas } from "./../../platform/ICanvas";
import { EffectGlyph } from "./EffectGlyph";
/**
 * Shows the fingering symbols of all notes of a beat as a column centered on the beat,
 * the finger of the highest note on top.
 * @internal
 */
export declare class StackedFingeringGlyph extends EffectGlyph {
    private _symbols;
    private _glyphs;
    constructor(symbols: MusicFontSymbol[]);
    doLayout(): void;
    getBoundingBoxLeft(): number;
    getBoundingBoxRight(): number;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

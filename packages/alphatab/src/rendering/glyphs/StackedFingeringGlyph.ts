import { MusicFontSymbol } from '@coderline/alphatab/model/MusicFontSymbol';
import type { ICanvas } from '@coderline/alphatab/platform/ICanvas';
import { EffectGlyph } from '@coderline/alphatab/rendering/glyphs/EffectGlyph';
import { MusicFontGlyph } from '@coderline/alphatab/rendering/glyphs/MusicFontGlyph';

// all lines share the ascent/descent of the finger letters so the letters sit on one baseline
const lineReferenceSymbols: MusicFontSymbol[] = [
    MusicFontSymbol.FingeringPLower,
    MusicFontSymbol.FingeringILower,
    MusicFontSymbol.FingeringMLower,
    MusicFontSymbol.FingeringALower,
    MusicFontSymbol.FingeringCLower
];

/**
 * Shows the fingering symbols of all notes of a beat as a column centered on the beat,
 * the finger of the highest note on top.
 * @internal
 */
export class StackedFingeringGlyph extends EffectGlyph {
    private _symbols: MusicFontSymbol[];
    private _glyphs: MusicFontGlyph[] = [];

    public constructor(symbols: MusicFontSymbol[]) {
        super(0, 0);
        this._symbols = symbols;
    }

    public override doLayout(): void {
        const metrics = this.renderer.smuflMetrics;
        const padding = this.renderer.settings.display.effectBandPaddingBottom;
        let ascent = 0;
        let descent = 0;
        for (const symbol of lineReferenceSymbols.concat(this._symbols)) {
            const top = metrics.glyphTop.get(symbol)!;
            ascent = Math.max(ascent, top);
            descent = Math.max(descent, metrics.glyphHeights.get(symbol)! - top);
        }
        const lineHeight = ascent + descent;

        let y = 0;
        let width = 0;
        this._glyphs = [];
        for (const symbol of this._symbols) {
            const g = new MusicFontGlyph(0, y, 1, symbol);
            g.center = true;
            g.renderer = this.renderer;
            g.doLayout();
            g.offsetY = ascent;
            this._glyphs.push(g);
            y += lineHeight + padding;
            if (g.width > width) {
                width = g.width;
            }
        }
        this.width = width;
        this.height = this._glyphs.length > 0 ? y - padding : 0;
    }

    public override getBoundingBoxLeft(): number {
        return this.x - this.width / 2;
    }

    public override getBoundingBoxRight(): number {
        return this.x + this.width / 2;
    }

    public override paint(cx: number, cy: number, canvas: ICanvas): void {
        for (const g of this._glyphs) {
            g.paint(cx + this.x, cy + this.y, canvas);
        }
    }
}

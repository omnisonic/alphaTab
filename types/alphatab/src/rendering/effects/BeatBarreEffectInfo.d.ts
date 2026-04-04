import type { Beat } from "./../../model/Beat";
import type { BarRendererBase } from "./../BarRendererBase";
import { EffectBarGlyphSizing } from "./../EffectBarGlyphSizing";
import type { EffectGlyph } from "./../glyphs/EffectGlyph";
import { EffectInfo } from "./../EffectInfo";
import type { Settings } from "./../../Settings";
import { NotationElement } from "./../../NotationSettings";
/**
 * @internal
 */
export declare class BeatBarreEffectInfo extends EffectInfo {
    get notationElement(): NotationElement;
    get canShareBand(): boolean;
    get hideOnMultiTrack(): boolean;
    shouldCreateGlyph(_settings: Settings, beat: Beat): boolean;
    get sizingMode(): EffectBarGlyphSizing;
    createNewGlyph(_renderer: BarRendererBase, beat: Beat): EffectGlyph;
    private static readonly _romanLetters;
    static toRoman(num: number): string;
    canExpand(from: Beat, to: Beat): boolean;
}

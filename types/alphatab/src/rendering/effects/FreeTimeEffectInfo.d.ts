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
export declare class FreeTimeEffectInfo extends EffectInfo {
    get notationElement(): NotationElement;
    get hideOnMultiTrack(): boolean;
    get canShareBand(): boolean;
    get sizingMode(): EffectBarGlyphSizing;
    shouldCreateGlyph(_settings: Settings, beat: Beat): boolean;
    createNewGlyph(renderer: BarRendererBase, _beat: Beat): EffectGlyph;
    canExpand(_from: Beat, _to: Beat): boolean;
}

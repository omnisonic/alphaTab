import { NotationElement } from "./../../NotationSettings";
import { EffectInfo } from "./../EffectInfo";
import { EffectBarGlyphSizing } from "./../EffectBarGlyphSizing";
import type { Settings } from "./../../Settings";
import type { Beat } from "./../../model/Beat";
import type { BarRendererBase } from "./../BarRendererBase";
import type { EffectGlyph } from "./../glyphs/EffectGlyph";
/**
 * @internal
 */
export declare class BeatTimerEffectInfo extends EffectInfo {
    get notationElement(): NotationElement;
    get hideOnMultiTrack(): boolean;
    get canShareBand(): boolean;
    get sizingMode(): EffectBarGlyphSizing;
    shouldCreateGlyph(_settings: Settings, beat: Beat): boolean;
    createNewGlyph(_renderer: BarRendererBase, beat: Beat): EffectGlyph;
    canExpand(_from: Beat, _to: Beat): boolean;
}

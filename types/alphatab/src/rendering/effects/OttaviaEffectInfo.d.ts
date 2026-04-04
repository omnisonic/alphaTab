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
export declare class OttaviaEffectInfo extends EffectInfo {
    private _aboveStaff;
    get effectId(): string;
    get notationElement(): NotationElement;
    get hideOnMultiTrack(): boolean;
    get canShareBand(): boolean;
    get sizingMode(): EffectBarGlyphSizing;
    constructor(aboveStaff: boolean);
    shouldCreateGlyph(_settings: Settings, beat: Beat): boolean;
    createNewGlyph(_renderer: BarRendererBase, beat: Beat): EffectGlyph;
    canExpand(from: Beat, to: Beat): boolean;
}

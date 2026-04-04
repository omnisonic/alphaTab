import { NotationElement } from "./../../NotationSettings";
import { EffectBarGlyphSizing } from "./../EffectBarGlyphSizing";
import type { Settings } from "./../../Settings";
import type { Beat } from "./../../model/Beat";
import { GolpeType } from "./../../model/GolpeType";
import { EffectInfo } from "./../EffectInfo";
import type { BarRendererBase } from "./../BarRendererBase";
import type { EffectGlyph } from "./../glyphs/EffectGlyph";
/**
 * @internal
 */
export declare class GolpeEffectInfo extends EffectInfo {
    private _type;
    constructor(type: GolpeType);
    get notationElement(): NotationElement;
    get effectId(): string;
    get hideOnMultiTrack(): boolean;
    get canShareBand(): boolean;
    get sizingMode(): EffectBarGlyphSizing;
    shouldCreateGlyph(_settings: Settings, beat: Beat): boolean;
    createNewGlyph(_renderer: BarRendererBase, _beat: Beat): EffectGlyph;
    canExpand(_from: Beat, _to: Beat): boolean;
}

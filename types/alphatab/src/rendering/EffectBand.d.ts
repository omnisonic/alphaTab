import { type Beat } from "./../model/Beat";
import type { Voice } from "./../model/Voice";
import type { ICanvas } from "./../platform/ICanvas";
import type { BarRendererBase } from "./BarRendererBase";
import type { EffectBandContainer } from "./EffectBandContainer";
import type { EffectBandSlot } from "./EffectBandSlot";
import type { EffectInfo } from "./EffectInfo";
import type { EffectGlyph } from "./glyphs/EffectGlyph";
import { Glyph } from "./glyphs/Glyph";
/**
 * @internal
 */
export declare class EffectBand extends Glyph {
    private _uniqueEffectGlyphs;
    private _effectGlyphs;
    private _container;
    isEmpty: boolean;
    previousBand: EffectBand | null;
    isLinkedToPrevious: boolean;
    firstBeat: Beat | null;
    lastBeat: Beat | null;
    height: number;
    originalHeight: number;
    voice: Voice;
    info: EffectInfo;
    slot: EffectBandSlot | null;
    constructor(voice: Voice, info: EffectInfo, container: EffectBandContainer);
    iterateAllGlyphs(): Generator<EffectGlyph, void, unknown>;
    finalizeBand(): void;
    doLayout(): void;
    static shouldCreateGlyph(beat: Beat, info: EffectInfo, renderer: BarRendererBase): boolean;
    createGlyph(beat: Beat): void;
    resetHeight(): void;
    private _createOrResizeGlyph;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    alignGlyphs(): void;
    private _alignGlyph;
}

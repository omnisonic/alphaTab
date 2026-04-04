import type { Voice } from "./../model/Voice";
import type { ICanvas } from "./../platform/ICanvas";
import type { BarRendererBase } from "./BarRendererBase";
import type { EffectBandInfo } from "./BarRendererFactory";
import { EffectBand } from "./EffectBand";
/**
 * Wraps the whole effect band staff for having two times the same container
 * holding bands (one for the top effects, one for the bottom effects)
 * @internal
 */
export declare class EffectBandContainer {
    private _bands;
    private _bandLookup;
    private _effectBandSizingInfo;
    private _effectInfosSortOrder;
    height: number;
    infos: EffectBandInfo[];
    private _renderer;
    private _isTopContainer;
    alignGlyphs(): void;
    get previousContainer(): EffectBandContainer | undefined;
    get isLinkedToPreviousRenderer(): boolean;
    constructor(renderer: BarRendererBase, isTopContainer: boolean);
    reLayout(): void;
    afterStaffBarReverted(): void;
    createVoiceGlyphs(voice: Voice): void;
    doLayout(): void;
    resetEffectBandSizingInfo(): void;
    finalizeEffects(): boolean;
    updateEffectBandHeights(): boolean;
    private _updateEffectBandHeights;
    sizeAndAlignEffectBands(register?: boolean): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    getBand(voice: Voice, effectId: string): EffectBand | null;
}

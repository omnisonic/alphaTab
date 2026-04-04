import type { EffectBand } from "./EffectBand";
import type { EffectBandContainer } from "./EffectBandContainer";
import { EffectBandSlot } from "./EffectBandSlot";
import type { EffectInfo } from "./EffectInfo";
/**
 * @internal
 */
export declare class EffectBandSizingInfo {
    private _effectSlot;
    private _assignedSlots;
    slots: EffectBandSlot[];
    owner: EffectBandContainer;
    constructor(owner: EffectBandContainer);
    reset(): void;
    getOrCreateSlot(band: EffectBand): EffectBandSlot;
    register(effectBand: EffectBand): void;
    sortSlots(sortOrder: Map<EffectInfo, number>): void;
}

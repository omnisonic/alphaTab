import type { Beat } from "./../model/Beat";
import type { EffectBand } from "./EffectBand";
/**
 * @internal
 */
export declare class EffectBandSlotShared {
    uniqueEffectId: string | null;
    y: number;
    height: number;
    firstBeat: Beat | null;
    lastBeat: Beat | null;
}
/**
 * @internal
 */
export declare class EffectBandSlot {
    bands: EffectBand[];
    shared: EffectBandSlotShared;
    constructor();
    update(effectBand: EffectBand): void;
    canBeUsed(band: EffectBand): boolean;
}

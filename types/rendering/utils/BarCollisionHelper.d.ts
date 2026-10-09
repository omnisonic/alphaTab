import type { Beat } from "./../../model/Beat";
import { BeamDirection } from "./BeamDirection";
/**
 * @internal
 */
export declare class ReservedLayoutAreaSlot {
    topY: number;
    bottomY: number;
    stemDirection: BeamDirection;
    constructor(topY: number, bottomY: number, stemDirection: BeamDirection);
}
/**
 * @internal
 */
export declare class ReservedLayoutArea {
    beat: Beat;
    topY: number;
    bottomY: number;
    slots: ReservedLayoutAreaSlot[];
    constructor(beat: Beat);
    addSlot(topY: number, bottomY: number, stemDirection?: BeamDirection): void;
}
/**
 * @internal
 */
export declare class BarCollisionHelper {
    reservedLayoutAreasByDisplayTime: Map<number, ReservedLayoutArea>;
    restDurationsByDisplayTime: Map<number, Map<number, number>>;
    getBeatMinMaxY(): number[];
    reserveBeatSlot(beat: Beat, topY: number, bottomY: number, stemDirection?: BeamDirection): void;
    registerRest(beat: Beat): void;
    applyRestCollisionOffset(beat: Beat, currentY: number, linesToPixel: number): number;
}

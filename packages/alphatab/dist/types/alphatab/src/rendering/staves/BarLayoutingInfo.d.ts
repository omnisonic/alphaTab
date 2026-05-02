import type { Beat } from "./../../model/Beat";
import type { ICanvas } from "./../../platform/ICanvas";
import type { BeatContainerGlyphBase } from "./../glyphs/BeatContainerGlyph";
import { Spring } from "./Spring";
/**
 * @internal
 * @record
 */
interface BarLayoutingInfoBeatSizes {
    preBeatSize: number;
    onBeatSize: number;
}
/**
 * This public class stores size information about a stave.
 * It is used by the layout engine to collect the sizes of score parts
 * to align the parts across multiple staves.
 * @internal
 */
export declare class BarLayoutingInfo {
    private static readonly _defaultMinDuration;
    private static readonly _defaultMinDurationWidth;
    private _timeSortedSprings;
    private _minTime;
    private _onTimePositionsForce;
    private _onTimePositions;
    private _incompleteGraceRodsWidth;
    private _beatSizes;
    private _minDuration;
    /**
     * an internal version number that increments whenever a change was made.
     */
    version: number;
    preBeatSize: number;
    postBeatSize: number;
    minStretchForce: number;
    totalSpringConstant: number;
    /**
     * The smallest note duration encountered within this bar's springs, used as the reference in
     * the Gourlay stretch formula. Read by the owning {@link StaffSystem} so that the system can
     * aggregate a shared minimum across all bars and trigger a reconcile if an added bar introduces
     * a shorter duration than previously seen.
     */
    get localMinDuration(): number;
    /**
     * The minimum-duration reference against which the spring constants currently held by this info
     * were computed. Set by {@link finish} and {@link recomputeSpringConstants}. The owning
     * StaffSystem compares this against its system-wide minimum to decide whether spring constants
     * need re-derivation.
     */
    computedWithMinDuration: number;
    private _updateMinStretchForce;
    getBeatSizes(beat: Beat): BarLayoutingInfoBeatSizes | undefined;
    setBeatSizes(beat: BeatContainerGlyphBase, sizes: BarLayoutingInfoBeatSizes): void;
    getPreBeatSize(beat: Beat): number;
    getPostBeatSize(beat: Beat): number;
    incompleteGraceRods: Map<string, Spring[]>;
    allGraceRods: Map<string, Spring[]>;
    springs: Map<number, Spring>;
    addSpring(start: number, duration: number, graceBeatWidth: number, preBeatWidth: number, postSpringSize: number): Spring;
    addBeatSpring(beat: BeatContainerGlyphBase, preBeatSize: number, postBeatSize: number): void;
    finish(): void;
    /**
     * Re-derives the spring constants (and {@link minStretchForce} / {@link totalSpringConstant})
     * using a caller-supplied minimum-duration reference rather than this bar's local minimum.
     *
     * Called by {@link StaffSystem.reconcileMinDurationIfDirty} when a bar added later to the
     * system introduced a shorter note than previously seen, invalidating this bar's spring
     * constants. Grace-rod data is not recomputed — it is independent of the minimum-duration
     * reference. The internal {@link version} is bumped so downstream consumers (e.g.
     * {@link BarRendererBase.applyLayoutingInfo}) pick up the refreshed positions.
     */
    recomputeSpringConstants(minDuration: number): void;
    private _calculateSpringConstants;
    height: number;
    paint(_cx: number, _cy: number, _canvas: ICanvas): void;
    private _calculateSpringConstant;
    spaceToForce(space: number): number;
    calculateVoiceWidth(force: number): number;
    private _calculateWidth;
    buildOnTimePositions(force: number): Map<number, number>;
}
export {};

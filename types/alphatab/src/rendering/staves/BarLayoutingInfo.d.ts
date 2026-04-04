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

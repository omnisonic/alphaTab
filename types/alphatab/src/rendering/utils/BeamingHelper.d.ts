import { type Beat } from "./../../model/Beat";
import { Duration } from "./../../model/Duration";
import { GraceType } from "./../../model/GraceType";
import type { Note } from "./../../model/Note";
import type { Staff } from "./../../model/Staff";
import type { Voice } from "./../../model/Voice";
import type { BarRendererBase } from "./../BarRendererBase";
import type { BeamDirection } from "./BeamDirection";
import type { BeamingRuleLookup } from "./BeamingRuleLookup";
/**
 * @internal
 */
export declare class BeamingHelperDrawInfo {
    startBeat: Beat | null;
    startX: number;
    startY: number;
    endBeat: Beat | null;
    endX: number;
    endY: number;
    /**
     * calculates the Y-position given a X-pos using the current start end point
     * @param x
     */
    calcY(x: number): number;
}
/**
 * This public class helps drawing beams and bars for notes.
 * @internal
 */
export declare class BeamingHelper {
    private _staff;
    private _renderer;
    private _beamingRuleLookup;
    voice: Voice | null;
    beats: Beat[];
    shortestDuration: Duration;
    /**
     * an indicator whether any beat has a tuplet on it.
     */
    hasTuplet: boolean;
    slashBeats: Beat[];
    restBeats: Beat[];
    lowestNoteInHelper: Note | null;
    private _lowestNoteCompareValueInHelper;
    highestNoteInHelper: Note | null;
    private _highestNoteCompareValueInHelper;
    invertBeamDirection: boolean;
    preferredBeamDirection: BeamDirection | null;
    graceType: GraceType;
    get isRestBeamHelper(): boolean;
    hasStem(forceFlagOnSingleBeat: boolean, beat?: Beat): boolean;
    static beatHasStem(beat: Beat): boolean;
    hasFlag(forceFlagOnSingleBeat: boolean, beat?: Beat): boolean;
    static beatHasFlag(beat: Beat): boolean;
    constructor(staff: Staff, renderer: BarRendererBase, beamingRuleLookup: BeamingRuleLookup);
    alignWithBeats(): void;
    finish(): void;
    static computeLineHeightsForRest(duration: Duration): number[];
    checkBeat(beat: Beat): boolean;
    private _checkNote;
    private _canJoin;
    private static _canJoinDuration;
    static isFullBarJoin(a: Beat, b: Beat, barIndex: number): boolean;
    get beatOfLowestNote(): Beat;
    get beatOfHighestNote(): Beat;
    drawingInfos: Map<BeamDirection, BeamingHelperDrawInfo>;
}

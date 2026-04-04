import type { EngravingSettings } from "./../../EngravingSettings";
import { type Track } from "./../../model/Track";
import { type ICanvas } from "./../../platform/ICanvas";
import type { BarRendererBase } from "./../BarRendererBase";
import type { ScoreLayout } from "./../layout/ScoreLayout";
import { MasterBarsRenderers } from "./MasterBarsRenderers";
import type { RenderStaff } from "./RenderStaff";
import { StaffTrackGroup } from "./StaffTrackGroup";
/**
 * @internal
 */
export declare abstract class SystemBracket {
    private _system;
    firstStaffInBracket?: RenderStaff;
    lastStaffInBracket?: RenderStaff;
    firstVisibleStaffInBracket?: RenderStaff;
    lastVisibleStaffInBracket?: RenderStaff;
    drawAsBrace: boolean;
    braceScale: number;
    width: number;
    index: number;
    canPaint: boolean;
    constructor(system: StaffSystem);
    abstract includesStaff(s: RenderStaff): boolean;
    updateCanPaint(): void;
    finalizeBracket(smuflMetrics: EngravingSettings): void;
}
/**
 * A StaffSystem consists of a list of different staves and groups
 * them using an accolade.
 * @internal
 */
export declare class StaffSystem {
    private _accoladeSpacingCalculated;
    private _brackets;
    private _staffToBracket;
    private _contentHeight;
    private _hasSystemSeparator;
    x: number;
    y: number;
    index: number;
    /**
     * The width of the whole accolade inclusive text and bar.
     */
    accoladeWidth: number;
    /**
     * Indicates whether this line is full or not. If the line is full the
     * bars can be aligned to the maximum width. If the line is not full
     * the bars will not get stretched.
     */
    isFull: boolean;
    /**
     * The current width of the system to which the content is scaled.
     * Includes accolade (tracknames, brackets etc) and the content.
     *
     * Used to determine the final size needed for rendering.
     */
    width: number;
    /**
     * The minimum/default width to which the system was sized
     * when performing the layout. This is the size of the system if no
     * fitting/resizing is performed.
     *
     * Includes accolade (tracknames, brackets etc) and the content.
     *
     * Used to perform a resizing/refitting of the system.
     */
    computedWidth: number;
    /**
     * This is the simple sum of all display scales of the bars in this system.
     * This value is mainly used in the parchment style layout for correct scaling of the bars.
     */
    totalBarDisplayScale: number;
    isLast: boolean;
    masterBarsRenderers: MasterBarsRenderers[];
    staves: StaffTrackGroup[];
    layout: ScoreLayout;
    topPadding: number;
    bottomPadding: number;
    allStaves: RenderStaff[];
    firstVisibleStaff?: RenderStaff;
    constructor(layout: ScoreLayout);
    get firstBarIndex(): number;
    get lastBarIndex(): number;
    addMasterBarRenderers(tracks: Track[], renderers: MasterBarsRenderers): MasterBarsRenderers | null;
    addBars(tracks: Track[], barIndex: number, additionalMultiBarRestIndexes: number[] | null): MasterBarsRenderers;
    getBarDisplayScale(renderer: BarRendererBase): number;
    revertLastBar(): MasterBarsRenderers | null;
    private _applyLayoutAndUpdateWidth;
    private _calculateAccoladeSpacing;
    private _getStaffTrackGroup;
    addStaff(staff: RenderStaff): void;
    get height(): number;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    paintPartial(cx: number, cy: number, canvas: ICanvas, startIndex: number, count: number): void;
    private _paintBrackets;
    finalizeSystem(): void;
    private _finalizeTrackGroups;
    buildBoundingsLookup(cx: number, cy: number): void;
    getBarX(index: number): number;
}

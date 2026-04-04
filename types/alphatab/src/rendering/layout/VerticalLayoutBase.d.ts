import { type ICanvas } from "./../../platform/ICanvas";
import type { RenderHints } from "./../IScoreRenderer";
import { ScoreLayout } from "./ScoreLayout";
import { RenderFinishedEventArgs } from "./../RenderFinishedEventArgs";
/**
 * Base layout for page and parchment style layouts where we have an endless
 * vertical page with fitted systems.
 * @internal
 */
export declare abstract class VerticalLayoutBase extends ScoreLayout {
    private _systems;
    private _allMasterBarRenderers;
    private _barsFromPreviousSystem;
    private _reuseViewPort;
    protected doLayoutAndRender(renderHints: RenderHints | undefined): void;
    protected registerPartial(args: RenderFinishedEventArgs, callback: (canvas: ICanvas) => void): void;
    get supportsResize(): boolean;
    get firstBarX(): number;
    doResize(): void;
    private _layoutAndRenderTunings;
    private _layoutAndRenderChordDiagrams;
    private _layoutAndRenderScoreInfo;
    private _resizeAndRenderScore;
    private _layoutAndRenderScore;
    private _paintSystem;
    /**
     * Realignes the bars in this line according to the available space
     */
    private _fitSystem;
    protected abstract get shouldApplyBarScale(): boolean;
    private _scaleToWidth;
    protected abstract getBarsPerSystem(systemIndex: number): number;
    private _createStaffSystem;
    private _needsLineBreak;
    private get _maxWidth();
}

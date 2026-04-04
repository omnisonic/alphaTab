import type { AlphaTabApiBase } from "./../../src/AlphaTabApiBase";
import { type IEventEmitter } from "./../../src/EventEmitter";
import { Score } from "./../../src/model/Score";
import type { Cursors } from "./../../src/platform/Cursors";
import type { IContainer } from "./../../src/platform/IContainer";
import type { IMouseEventArgs } from "./../../src/platform/IMouseEventArgs";
import type { IUiFacade } from "./../../src/platform/IUiFacade";
import type { IScoreRenderer } from "./../../src/rendering/IScoreRenderer";
import type { RenderFinishedEventArgs } from "./../../src/rendering/RenderFinishedEventArgs";
import { Bounds } from "./../../src/rendering/utils/Bounds";
import type { IAlphaSynth } from "./../../src/synth/IAlphaSynth";
import type { IAudioExporterWorker } from "./../../src/synth/IAudioExporter";
/**
 * @internal
 */
export declare class TestUiFacade implements IUiFacade<unknown> {
    readonly rootContainer: IContainer;
    readonly areWorkersSupported: boolean;
    readonly canRender: boolean;
    readonly resizeThrottle: number;
    private _resultIdToElementLookup;
    private _api;
    private _totalResultCount;
    constructor();
    stopScrolling(_scrollElement: IContainer): void;
    setCanvasOverflow(_canvasElement: IContainer, _overflow: number, _isVertical: boolean): void;
    initialize(api: AlphaTabApiBase<unknown>, raw: unknown): void;
    destroy(): void;
    createCanvasElement(): IContainer;
    triggerEvent(_container: IContainer, _eventName: string, _details: unknown, _originalEvent?: IMouseEventArgs): void;
    initialRender(): void;
    beginAppendRenderResults(renderResult: RenderFinishedEventArgs | null): void;
    beginUpdateRenderResults(renderResult: RenderFinishedEventArgs): void;
    createWorkerRenderer(): IScoreRenderer;
    createWorkerAudioExporter(_synth: IAlphaSynth | null): IAudioExporterWorker;
    createWorkerPlayer(): IAlphaSynth | null;
    createCursors(): Cursors | null;
    destroyCursors(): void;
    beginInvoke(action: () => void): void;
    removeHighlights(): void;
    highlightElements(_groupId: string, _masterBarIndex: number): void;
    createSelectionElement(): IContainer | null;
    getScrollContainer(): IContainer;
    getOffset(scrollContainer: IContainer | null, container: IContainer): Bounds;
    scrollToY(scrollElement: IContainer, offset: number, _speed: number): void;
    scrollToX(scrollElement: IContainer, offset: number, _speed: number): void;
    load(data: unknown, success: (score: Score) => void, error: (error: Error) => void): boolean;
    loadSoundFont(data: unknown, append: boolean): boolean;
    createBackingTrackPlayer(): IAlphaSynth | null;
    readonly canRenderChanged: IEventEmitter;
    readonly rootContainerBecameVisible: IEventEmitter;
}

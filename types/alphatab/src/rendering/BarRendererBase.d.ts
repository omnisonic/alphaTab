import type { Bar } from "./../model/Bar";
import type { Beat } from "./../model/Beat";
import type { Note } from "./../model/Note";
import { type Voice } from "./../model/Voice";
import { type ICanvas } from "./../platform/ICanvas";
import { BeatXPosition } from "./BeatXPosition";
import { EffectBandContainer } from "./EffectBandContainer";
import { type BeatContainerGlyphBase } from "./glyphs/BeatContainerGlyph";
import type { Glyph } from "./glyphs/Glyph";
import { MultiVoiceContainerGlyph } from "./glyphs/MultiVoiceContainerGlyph";
import { type ITieGlyph, type TieGlyph } from "./glyphs/TieGlyph";
import type { ScoreRenderer } from "./ScoreRenderer";
import type { BarLayoutingInfo } from "./staves/BarLayoutingInfo";
import type { RenderStaff } from "./staves/RenderStaff";
import { BarHelpers } from "./utils/BarHelpers";
import type { BeamingHelper } from "./utils/BeamingHelper";
import type { MasterBarBounds } from "./utils/MasterBarBounds";
import type { RenderingResources } from "./../RenderingResources";
import type { Settings } from "./../Settings";
/**
 * Lists the different position modes for {@link BarRendererBase.getNoteY}
 * @internal
 */
export declare enum NoteYPosition {
    /**
     * Gets the note y-position on top of the note stem or tab number.
     */
    TopWithStem = 0,
    /**
     * Gets the note y-position on top of the note head or tab number.
     */
    Top = 1,
    /**
     * Gets the note y-position on the center of the note head or tab number.
     */
    Center = 2,
    /**
     * Gets the note y-position on the bottom of the note head or tab number.
     */
    Bottom = 3,
    /**
     * Gets the note y-position on the bottom of the note stem or tab number.
     */
    BottomWithStem = 4,
    /**
     * The position where the upwards stem should be placed.
     */
    StemUp = 5,
    /**
     * The position where the downwards stem should be placed.
     */
    StemDown = 6
}
/**
 * Lists the different position modes for {@link BarRendererBase.getNoteX}
 * @internal
 */
export declare enum NoteXPosition {
    /**
     * Gets the note x-position on left of the note head or tab number.
     */
    Left = 0,
    /**
     * Gets the note x-position on the center of the note head or tab number.
     */
    Center = 1,
    /**
     * Gets the note x-position on the right of the note head or tab number.
     */
    Right = 2
}
/**
 * This is the base public class for creating blocks which can render bars.
 * @internal
 */
export declare class BarRendererBase {
    private _preBeatGlyphs;
    protected readonly voiceContainer: MultiVoiceContainerGlyph;
    private readonly _postBeatGlyphs;
    private _ties;
    private _multiSystemSlurs?;
    topEffects: EffectBandContainer;
    bottomEffects: EffectBandContainer;
    get nextRenderer(): BarRendererBase | null;
    get previousRenderer(): BarRendererBase | null;
    scoreRenderer: ScoreRenderer;
    staff?: RenderStaff;
    layoutingInfo: BarLayoutingInfo;
    bar: Bar;
    additionalMultiRestBars: Bar[] | null;
    get lastBar(): Bar;
    x: number;
    y: number;
    width: number;
    computedWidth: number;
    height: number;
    index: number;
    private _contentTopOverflow;
    private _contentBottomOverflow;
    beatEffectsMinY: number;
    beatEffectsMaxY: number;
    get topOverflow(): number;
    get bottomOverflow(): number;
    protected helpers: BarHelpers;
    get collisionHelper(): import("./utils/BarCollisionHelper").BarCollisionHelper;
    /**
     * Gets or sets whether this renderer is linked to the next one
     * by some glyphs like a vibrato effect
     */
    isLinkedToPrevious: boolean;
    /**
     * Gets or sets whether this renderer can wrap to the next line
     * or it needs to stay connected to the previous one.
     * (e.g. when having double bar repeats we must not separate the 2 bars)
     */
    canWrap: boolean;
    get showMultiBarRest(): boolean;
    constructor(renderer: ScoreRenderer, bar: Bar);
    registerTie(tie: ITieGlyph): void;
    get middleYPosition(): number;
    registerBeatEffectOverflows(beatEffectsMinY: number, beatEffectsMaxY: number): void;
    registerOverflowTop(topOverflow: number): boolean;
    registerOverflowBottom(bottomOverflow: number): boolean;
    scaleToWidth(width: number): void;
    get resources(): RenderingResources;
    get smuflMetrics(): import("../EngravingSettings").EngravingSettings;
    get settings(): Settings;
    protected wasFirstOfStaff: boolean;
    get isFirstOfStaff(): boolean;
    get isLastOfStaff(): boolean;
    get isLast(): boolean;
    _registerLayoutingInfo(): void;
    private _appliedLayoutingInfo;
    afterReverted(): void;
    afterStaffBarReverted(): void;
    applyLayoutingInfo(): boolean;
    isFinalized: boolean;
    registerMultiSystemSlurs(startedTies: Generator<TieGlyph> | undefined): void;
    private _finalizeTies;
    finalizeRenderer(): boolean;
    private _registerStaffOverflow;
    doLayout(): void;
    protected calculateOverflows(_rendererTop: number, rendererBottom: number): void;
    protected updateSizes(): void;
    protected addPreBeatGlyph(g: Glyph): void;
    protected addBeatGlyph(g: BeatContainerGlyphBase): void;
    getBeatContainer(beat: Beat): BeatContainerGlyphBase | undefined;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    protected paintContent(cx: number, cy: number, canvas: ICanvas): void;
    private _paintMultiSystemSlurs;
    protected paintBackground(cx: number, cy: number, canvas: ICanvas): void;
    buildBoundingsLookup(masterBarBounds: MasterBarBounds, cx: number, cy: number): void;
    protected addPostBeatGlyph(g: Glyph): void;
    protected createPreBeatGlyphs(): void;
    protected createBeatGlyphs(): void;
    protected createVoiceGlyphs(voice: Voice): void;
    protected createPostBeatGlyphs(): void;
    get beatGlyphsStart(): number;
    get postBeatGlyphsStart(): number;
    getBeatX(beat: Beat, requestedPosition?: BeatXPosition, useSharedSizes?: boolean): number;
    getRatioPositionX(ratio: number): number;
    getNoteX(note: Note, requestedPosition: NoteXPosition): number;
    getNoteY(note: Note, requestedPosition: NoteYPosition): number;
    getRestY(beat: Beat, requestedPosition: NoteYPosition): number;
    reLayout(): void;
    protected recreatePreBeatGlyphs(): void;
    protected paintSimileMark(cx: number, cy: number, canvas: ICanvas): void;
    completeBeamingHelper(_helper: BeamingHelper): void;
}

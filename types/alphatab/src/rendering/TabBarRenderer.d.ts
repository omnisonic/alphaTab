import { BarSubElement } from "./../model/Bar";
import { type Beat, BeatSubElement } from "./../model/Beat";
import type { Note } from "./../model/Note";
import type { Voice } from "./../model/Voice";
import { TabRhythmMode } from "./../NotationSettings";
import type { ICanvas } from "./../platform/ICanvas";
import { LineBarRenderer } from "./LineBarRenderer";
import { BeamDirection } from "./utils/BeamDirection";
import type { BeamingHelper } from "./utils/BeamingHelper";
/**
 * This BarRenderer renders a bar using guitar tablature notation
 * @internal
 */
export declare class TabBarRenderer extends LineBarRenderer {
    static readonly StaffId: string;
    private _hasTuplets;
    showTimeSignature: boolean;
    showRests: boolean;
    showTiedNotes: boolean;
    private _showMultiBarRest;
    get showMultiBarRest(): boolean;
    get repeatsBarSubElement(): BarSubElement;
    get barNumberBarSubElement(): BarSubElement;
    get barLineBarSubElement(): BarSubElement;
    get staffLineBarSubElement(): BarSubElement;
    get lineSpacing(): number;
    get heightLineCount(): number;
    get drawnLineCount(): number;
    get rhythmMode(): TabRhythmMode.Hidden | TabRhythmMode.ShowWithBeams | TabRhythmMode.ShowWithBars;
    getNoteLine(note: Note): number;
    minString: number;
    maxString: number;
    protected collectSpaces(spaces: Float32Array[][]): void;
    doLayout(): void;
    protected createLinePreBeatGlyphs(): void;
    private _createTimeSignatureGlyphs;
    protected createVoiceGlyphs(v: Voice): void;
    protected get flagsSubElement(): BeatSubElement;
    protected get beamsSubElement(): BeatSubElement;
    protected get tupletSubElement(): BeatSubElement;
    protected paintBeams(cx: number, cy: number, canvas: ICanvas, flagsElement: BeatSubElement, beamsElement: BeatSubElement): void;
    protected paintTuplets(cx: number, cy: number, canvas: ICanvas, beatElement: BeatSubElement, bracketsAsArcs?: boolean): void;
    drawBeamHelperAsFlags(h: BeamingHelper): boolean;
    protected getFlagTopY(beat: Beat, direction: BeamDirection): number;
    protected getFlagBottomY(beat: Beat, direction: BeamDirection): number;
    protected getBeamDirection(_helper: BeamingHelper): BeamDirection;
    protected shouldPaintFlag(beat: Beat): boolean;
    protected paintBeamingStem(beat: Beat, cy: number, x: number, topY: number, bottomY: number, canvas: ICanvas): void;
    protected calculateOverflows(rendererTop: number, rendererBottom: number): void;
}

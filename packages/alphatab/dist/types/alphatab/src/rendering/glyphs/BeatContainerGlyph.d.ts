import type { Beat } from "./../../model/Beat";
import type { GraceGroup } from "./../../model/GraceGroup";
import type { GraceType } from "./../../model/GraceType";
import type { Note } from "./../../model/Note";
import type { TupletGroup } from "./../../model/TupletGroup";
import type { ICanvas } from "./../../platform/ICanvas";
import type { NoteXPosition, NoteYPosition } from "./../BarRendererBase";
import { BeatXPosition } from "./../BeatXPosition";
import type { BeatGlyphBase } from "./BeatGlyphBase";
import type { BeatOnNoteGlyphBase } from "./BeatOnNoteGlyphBase";
import { Glyph } from "./Glyph";
import type { ITieGlyph } from "./TieGlyph";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
import type { BarBounds } from "./../utils/BarBounds";
import type { BeamingHelper } from "./../utils/BeamingHelper";
/**
 * @internal
 */
export declare abstract class BeatContainerGlyphBase extends Glyph {
    abstract get beatId(): number;
    abstract get absoluteDisplayStart(): number;
    abstract get displayDuration(): number;
    abstract get onTimeX(): number;
    abstract get graceType(): GraceType;
    abstract get graceIndex(): number;
    abstract get graceGroup(): GraceGroup | null;
    abstract get voiceIndex(): number;
    abstract get isFirstOfTupletGroup(): boolean;
    abstract get tupletGroup(): TupletGroup | null;
    abstract get isLastOfVoice(): boolean;
    abstract getNoteY(note: Note, requestedPosition: NoteYPosition): number;
    abstract doMultiVoiceLayout(): void;
    abstract getRestY(requestedPosition: NoteYPosition): number;
    abstract getNoteX(note: Note, requestedPosition: NoteXPosition): number;
    abstract getBeatX(requestedPosition: BeatXPosition, useSharedSizes: boolean): number;
    abstract getLowestNoteY(requestedPosition: NoteYPosition): number;
    abstract getHighestNoteY(requestedPosition: NoteYPosition): number;
    abstract registerLayoutingInfo(layoutings: BarLayoutingInfo): void;
    abstract applyLayoutingInfo(info: BarLayoutingInfo): void;
    abstract buildBoundingsLookup(barBounds: BarBounds, cx: number, cy: number): void;
    scaleToWidth(beatWidth: number): void;
}
/**
 * @internal
 */
export declare class BeatContainerGlyph extends BeatContainerGlyphBase {
    private _ties;
    private _tieWidth;
    beat: Beat;
    preNotes: BeatGlyphBase;
    onNotes: BeatOnNoteGlyphBase;
    getLowestNoteY(requestedPosition: NoteYPosition): number;
    getHighestNoteY(requestedPosition: NoteYPosition): number;
    get beatId(): number;
    get isLastOfVoice(): boolean;
    get displayDuration(): number;
    get graceIndex(): number;
    get graceType(): GraceType;
    get absoluteDisplayStart(): number;
    get graceGroup(): GraceGroup | null;
    get voiceIndex(): number;
    get isFirstOfTupletGroup(): boolean;
    get tupletGroup(): TupletGroup | null;
    get onTimeX(): number;
    constructor(beat: Beat);
    getNoteY(note: Note, requestedPosition: NoteYPosition): number;
    getRestY(requestedPosition: NoteYPosition): number;
    getNoteX(note: Note, requestedPosition: NoteXPosition): number;
    addTie(tie: ITieGlyph): void;
    getBoundingBoxTop(): number;
    getBoundingBoxBottom(): number;
    protected drawBeamHelperAsFlags(helper: BeamingHelper): boolean;
    protected get postBeatStretch(): number;
    registerLayoutingInfo(layoutings: BarLayoutingInfo): void;
    applyLayoutingInfo(_info: BarLayoutingInfo): void;
    doLayout(): void;
    protected createBeatTies(): void;
    doMultiVoiceLayout(): void;
    protected updateWidth(): void;
    protected createTies(_n: Note): void;
    static getGroupId(beat: Beat): string;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    buildBoundingsLookup(barBounds: BarBounds, cx: number, cy: number): void;
    getBeatX(requestedPosition: BeatXPosition, useSharedSizes?: boolean): number;
}

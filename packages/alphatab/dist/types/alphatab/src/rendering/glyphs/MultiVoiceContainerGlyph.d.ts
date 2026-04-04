import type { Beat } from "./../../model/Beat";
import type { Note } from "./../../model/Note";
import type { TupletGroup } from "./../../model/TupletGroup";
import type { ICanvas } from "./../../platform/ICanvas";
import type { NoteXPosition, NoteYPosition } from "./../BarRendererBase";
import { BeatXPosition } from "./../BeatXPosition";
import type { BeatContainerGlyphBase } from "./BeatContainerGlyph";
import { Glyph } from "./Glyph";
import type { BarLayoutingInfo } from "./../staves/BarLayoutingInfo";
import type { BarBounds } from "./../utils/BarBounds";
/**
 * This glyph acts as container for handling
 * multiple voice rendering
 * @internal
 */
export declare class MultiVoiceContainerGlyph extends Glyph {
    static readonly KeySizeBeat: string;
    voiceDrawOrder?: number[];
    private readonly _beatGlyphLookup;
    beatGlyphs: Map<number, BeatContainerGlyphBase[]>;
    tupletGroups: Map<number, TupletGroup[]>;
    constructor();
    getBoundingBoxTop(): number;
    getBoundingBoxBottom(): number;
    scaleToWidth(width: number): void;
    private _scaleToForce;
    registerLayoutingInfo(info: BarLayoutingInfo): void;
    applyLayoutingInfo(info: BarLayoutingInfo): void;
    addGlyph(bg: BeatContainerGlyphBase): void;
    getBeatX(beat: Beat, requestedPosition?: BeatXPosition, useSharedSizes?: boolean): number;
    getLowestNoteY(beat: Beat, position: NoteYPosition): number;
    getHighestNoteY(beat: Beat, position: NoteYPosition): number;
    getNoteX(note: Note, requestedPosition: NoteXPosition): number;
    getNoteY(note: Note, requestedPosition: NoteYPosition): number;
    getRestY(beat: Beat, requestedPosition: NoteYPosition): number;
    getBeatContainer(beat: Beat): BeatContainerGlyphBase | undefined;
    buildBoundingsLookup(barBounds: BarBounds, cx: number, cy: number): void;
    doLayout(): void;
    private _doMultiVoiceLayout;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

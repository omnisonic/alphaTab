import { EngravingSettings } from "./../../EngravingSettings";
import { Duration } from "./../../model/Duration";
import { MusicFontSymbol } from "./../../model/MusicFontSymbol";
import type { ICanvas } from "./../../platform/ICanvas";
import { NoteYPosition } from "./../BarRendererBase";
import { MusicFontGlyph } from "./MusicFontGlyph";
import { BeamDirection } from "./../utils/BeamDirection";
/**
 * @internal
 */
export declare class NoteHeadGlyphBase extends MusicFontGlyph {
    centerOnStem: boolean;
    constructor(x: number, y: number, isGrace: boolean, symbol: MusicFontSymbol);
    paint(cx: number, cy: number, canvas: ICanvas): void;
    /**
     * Gets the x-offset from the left of the note head at which a stem in the given direction attaches.
     * @remarks The metrics are passed explicitly as positions are also requested before the note head is laid out.
     */
    getStemX(smufl: EngravingSettings, direction: BeamDirection): number;
    /**
     * Gets the y-position of the note head at the given position (in the same coordinate space as {@link y}).
     * Positions depending on the stem length cannot be resolved by the note head and
     * are treated like {@link NoteYPosition.Top} and {@link NoteYPosition.Bottom}.
     * @remarks The metrics are passed explicitly as positions are also requested before the note head is laid out.
     */
    getNoteHeadY(smufl: EngravingSettings, requestedPosition: NoteYPosition): number;
}
/**
 * @internal
 */
export declare class NoteHeadGlyph extends NoteHeadGlyphBase {
    constructor(x: number, y: number, duration: Duration, isGrace: boolean);
    static getSymbol(duration: Duration): MusicFontSymbol;
}

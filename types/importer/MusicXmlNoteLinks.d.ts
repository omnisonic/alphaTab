import type { Note } from "./../model/Note";
/**
 * @internal
 */
export declare enum MusicXmlNoteLinkType {
    Tie = 0,
    Slur = 1,
    Slide = 2,
    Glissando = 3,
    /**
     * A trill or vibrato line from the origin to the destination note within the voice.
     * The value is the trill step, -1 for a vibrato line (wavy line without trill mark).
     */
    WavyLine = 4
}
/**
 * @internal
 * @record
 */
export interface MusicXmlNoteLink {
    type: MusicXmlNoteLinkType;
    /**
     * Identifies concurrent links of the same type: the MusicXML number-level, the pitch for ties.
     */
    key: string;
    voice: string;
    value: number;
    origin: Note;
    destination: Note | null;
}
/**
 * Pairs the MusicXML elements linking notes of a part (e.g. `<tied>`, `<slur>`, `<wavy-line>`) and applies them.
 * Links are within a staff, the model resolves the origin of a link before its destination.
 * @internal
 */
export declare class MusicXmlNoteLinks {
    private _open;
    private _links;
    /**
     * @param voice The raw MusicXML voice of the note.
     */
    start(type: MusicXmlNoteLinkType, key: string, origin: Note, voice: string, value: number): void;
    /**
     * A continuation (e.g. across system breaks), starts the link if it was not started.
     */
    continue(type: MusicXmlNoteLinkType, key: string, note: Note, voice: string, value: number): void;
    stop(type: MusicXmlNoteLinkType, key: string, destination: Note, voice: string): void;
    /**
     * Adds a link on a single note (e.g. a trill mark without line).
     */
    single(type: MusicXmlNoteLinkType, note: Note, value: number): void;
    apply(): void;
    private _unclosed;
    private static _applySlur;
    /**
     * Applies a line to all notes from the origin to the destination within the voice.
     */
    private static _applyLine;
    /**
     * A tie connects a note with the same pitch on the next beat of the voice.
     * Ties without (or with an invalid) end are tied to that note if it exists.
     */
    private static _tieDestination;
    /**
     * The next beat in the voice, also across bars.
     */
    private static _nextBeat;
    /**
     * The model resolves the origin of a link before its destination (bar by bar, voice by voice).
     */
    private static _isLinkable;
}

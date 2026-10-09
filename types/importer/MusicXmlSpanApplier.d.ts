import { type MusicXmlSpan } from "./MusicXmlSpans";
import { Beat } from "./../model/Beat";
import type { MasterBar } from "./../model/MasterBar";
import type { Staff } from "./../model/Staff";
import type { Track } from "./../model/Track";
/**
 * Applies the spans of a part to the model.
 *
 * A beat is covered by a span if:
 * - the beat is next to the cursor the start or stop is written at, and on the covered side of it. Exporters write
 *   stops after the last covered note (e.g. MuseScore), or nudge them with an offset into the next note (e.g. Finale).
 * - otherwise (e.g. other voices) if its middle is within the span, including the offsets.
 * - beats without duration (grace notes) at a boundary are ordered as in the document.
 * @internal
 */
export declare class MusicXmlSpanApplier {
    private _track;
    private _masterBars;
    private _beats;
    private _beatSequence;
    private _voiceIndexOf;
    private _octaveStopInLastNote;
    private _barLengths;
    private _pedalBars;
    /**
     * @param beats All beats in document order (see {@link MusicXmlSpanPosition.sequence}).
     * @param voiceIndexOf Resolves a raw MusicXML voice to the index of the voice on the staff, -1 if not existing.
     * @param octaveStopInLastNote Whether octave shift stops are written within the last shifted note (e.g. Finale).
     */
    constructor(track: Track, masterBars: MasterBar[], beats: Beat[], voiceIndexOf: (staff: Staff, voice: string) => number, octaveStopInLastNote: boolean);
    apply(spans: MusicXmlSpan[]): void;
    private _applyBeats;
    private static _applyBeat;
    private _covers;
    private static _isBoundary;
    private static _isAtOrAfter;
    private static _compare;
    private static _isOttava;
    /**
     * The end of the beats containing the exact position (stops written within the last covered note).
     */
    private _endOfBeatAt;
    /**
     * The beat the element is written at: the beat following it in the document.
     */
    private _writtenBeat;
    private _applyPedal;
    private _addPedalMarker;
    private static _pedalOrder;
    private _applySimile;
    private _compareStart;
    /**
     * Normalizes the placement to the bar it refers to (e.g. offsets crossing bar lines).
     */
    private _bound;
}

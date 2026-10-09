import type { XmlNode } from "./../xml/XmlNode";
/**
 * The MusicXML element encoding a span. Each element has its own number-level slots to pair starts and stops.
 * @internal
 */
export declare enum MusicXmlSpanElement {
    Dashes = 0,
    Bracket = 1,
    Wedge = 2,
    OctaveShift = 3,
    Pedal = 4,
    Slash = 5,
    MeasureRepeat = 6
}
/**
 * @internal
 */
export declare enum MusicXmlSpanAction {
    Start = 0,
    Stop = 1,
    /**
     * Continuation across system breaks, starts the span if it was not started (e.g. partial exports).
     */
    Continue = 2
}
/**
 * The meaning of a span in the alphaTab model.
 * @internal
 */
export declare enum MusicXmlSpanKind {
    /**
     * No effect on the model (e.g. unknown words on a line), the span is still paired to keep the numbers consistent.
     */
    None = 0,
    LetRing = 1,
    PalmMute = 2,
    Crescendo = 3,
    Decrescendo = 4,
    Ottava8va = 5,
    Ottava8vb = 6,
    Ottava15ma = 7,
    Ottava15mb = 8,
    SustainPedal = 9,
    Slash = 10,
    SimileSimple = 11,
    SimileDouble = 12
}
/**
 * A musical position within a part.
 * @internal
 * @record
 */
export interface MusicXmlSpanPosition {
    /**
     * The index of the master bar.
     */
    barIndex: number;
    /**
     * The display ticks of the cursor (between the notes the element is written at), relative to the start of the bar.
     */
    ticks: number;
    /**
     * The `<offset>` in display ticks, the element is shown at the cursor plus the offset.
     */
    offset: number;
    /**
     * The number of beats created before this position in the document, the index of the following beat.
     */
    sequence: number;
}
/**
 * Where a span element is written.
 * @internal
 * @record
 */
export interface MusicXmlSpanPlacement {
    /**
     * The index of the staff, -1 if not specified.
     */
    staffIndex: number;
    /**
     * The raw MusicXML voice, empty if not specified.
     */
    voice: string;
    position: MusicXmlSpanPosition;
}
/**
 * A span start, stop or continuation read from the MusicXML.
 * @internal
 * @record
 */
export interface MusicXmlSpanEvent {
    element: MusicXmlSpanElement;
    action: MusicXmlSpanAction;
    kind: MusicXmlSpanKind;
    /**
     * The MusicXML number-level identifying concurrent spans of the same element.
     */
    number: string;
}
/**
 * A paired span. Open while only the start is known, a parked stop while only the end is known.
 * @internal
 * @record
 */
export interface MusicXmlSpan {
    element: MusicXmlSpanElement;
    kind: MusicXmlSpanKind;
    number: string;
    start: MusicXmlSpanPlacement | null;
    /**
     * The exclusive end, null if the span is not closed.
     */
    end: MusicXmlSpanPlacement | null;
}
/**
 * Pairs the span starts and stops of a part.
 *
 * - The `number` identifies concurrent spans of the same element within the part (MusicXML number-level).
 *   Exporters reuse numbers across staves (e.g. MuseScore), hence spans on different staves never match.
 *   Lines were identified by their words before numbers were respected, hence a line of the same kind is preferred.
 * - Start and stop refer to the score order, not the document order: a stop can appear before its start
 *   (e.g. in another voice after a `<backup>`). Such stops are parked until their start appears.
 * @internal
 */
export declare class MusicXmlSpanTracker {
    private _open;
    private _parkedStops;
    private _closed;
    /**
     * Processes the span events of a single element (e.g. direction) written at the given placement.
     */
    process(events: MusicXmlSpanEvent[], placement: MusicXmlSpanPlacement): void;
    /**
     * Completes the tracking at the end of the part.
     * @returns The spans with an effect on the model, unclosed spans run to the end of the part.
     */
    finish(): MusicXmlSpan[];
    private _stop;
    private _start;
    private _close;
    /**
     * The best matching span for the event, -1 if none matches. Parked stops only match if they are after the start.
     */
    private static _bestMatch;
    private static _score;
    private static _isSame;
    private static _isIdentifiedByWords;
    private static _isBefore;
}
/**
 * Reads the MusicXML elements encoding spans.
 * @internal
 */
export declare class MusicXmlSpanReader {
    /**
     * Reads a `<dashes>` or `<bracket>` element.
     * @param words The `<words>` labelling the line, they define its meaning.
     */
    static readLine(element: XmlNode, words: string, events: MusicXmlSpanEvent[]): void;
    /**
     * The meaning of a line labelled with the given words (e.g. alphaTab "LetRing", MuseScore "let ring").
     */
    static lineKind(words: string): MusicXmlSpanKind;
    static readWedge(element: XmlNode, events: MusicXmlSpanEvent[]): void;
    static readOctaveShift(element: XmlNode, events: MusicXmlSpanEvent[]): void;
    static readPedal(element: XmlNode, events: MusicXmlSpanEvent[]): void;
    /**
     * Reads a `<measure-style>` element.
     * @param midBar Whether the measure style changes within the bar, measure repeats are only supported at the bar start.
     */
    static readMeasureStyle(element: XmlNode, midBar: boolean, events: MusicXmlSpanEvent[]): void;
    private static _start;
    private static _stop;
    private static _push;
}

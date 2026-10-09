import { ScoreImporter } from "./ScoreImporter";
import { Score } from "./../model/Score";
/**
 * @internal
 */
export declare class MusicXmlImporter extends ScoreImporter {
    private _score;
    private _idToTrackInfo;
    private _indexToTrackInfo;
    private _staffToContext;
    private _staffVoicePacking;
    private _currentBarNumberDisplayPart?;
    private _currentBarNumberDisplayBar?;
    /**
     * The bar number the next (non-implicit) master bar gets by sequential counting.
     * Used to only store custom bar numbers where the measure number differs from it.
     */
    private _nextBarNumber;
    private _divisionsPerQuarterNote;
    /**
     * Whether the exporter writes the stop of octave shifts before the last shifted note instead of after it.
     */
    private _octaveShiftEndsBeforeLastNote;
    private _currentDynamics;
    get name(): string;
    readScore(): Score;
    /**
     * Applies the spans of all parts once all beats are known: a span can cover beats which appear before
     * its start or after its stop in the document (other voices or staves). Must run before the model is finished
     * as the note effects are linked there.
     */
    private _applySpans;
    private _extractMusicXml;
    private _parseDom;
    private _parsePartwise;
    private _parseTimewise;
    private _parseCredit;
    private static _sanitizeDisplay;
    private _parseIdentification;
    private _parseEncoding;
    private _parseMovementTitle;
    private _parsePartList;
    private _parseScorePart;
    private _parseScoreInstrument;
    private _parseScorePartMidiInstrument;
    private static _interpolatePercent;
    private static _interpolatePan;
    private static _interpolate;
    private _parsePartDisplayAsText;
    private _parseWork;
    private _parsePartwisePart;
    private _parsePartwiseMeasure;
    private _parseTimewiseMeasure;
    private _getOrCreateMasterBar;
    private _parseTimewisePart;
    /**
     * The current musical position within the bar.
     */
    private _musicalPosition;
    /**
     * The last known beat which was parsed. Might be used
     * to access the current voice/staff (e.g. on rests when we don't have notes)
     */
    private _lastBeat;
    private _parsePartMeasure;
    private _parsePrint;
    private _parseBarLine;
    private _parseRepeat;
    private _parseEnding;
    private _parseBarStyle;
    private _parseSound;
    /**
     * Applies the jump and marker attributes of a `<sound>` (measure or direction level) as directions.
     * @returns true if any direction was applied.
     */
    private _parseSoundDirections;
    /**
     * The texts (normalized via {@link _normalizeDirectionLabel}) with which `<words>` print the directions
     * of the `<sound>` attributes. Such words are only the visual counterpart of the direction which renders its
     * own label, they are not added as additional beat text. Any other words next to a jump are kept as text.
     * Covers the default labels of the MuseScore export and the spelled-out forms, but no double segno/coda
     * or numbered forms as the directions are not mapped to their double variants.
     */
    private static readonly _soundDirectionLabels;
    /**
     * Lower-cases the text and removes dots and whitespace ("D. C. al Coda" -> "dcalcoda").
     */
    private static _normalizeDirectionLabel;
    private static _isSoundDirectionLabel;
    private _parseSwing;
    private _nextBeatAutomations;
    private _nextBeatChord;
    private _nextBeatText;
    /**
     * Where the pending beat text is written, it can be the label of a following line (e.g. music21).
     */
    private _nextBeatTextTrackIndex;
    private _nextBeatTextBarIndex;
    private _nextBeatTextTicks;
    /**
     * All beats in document order (see {@link MusicXmlSpanPosition.sequence}).
     */
    private _beats;
    /**
     * The placement of a span element at the current cursor.
     */
    private _placement;
    private _parseSoundMidiInstrument;
    private _parseHarmony;
    private _parseDegree;
    private _parseHarmonyRoot;
    private _parseHarmonyKind;
    private _parseHarmonyFrame;
    private _parseAttributes;
    private _parseMeasureStyle;
    private _parseTranspose;
    private _parseStaffDetails;
    private _parseStaffTuning;
    private _parseClef;
    private _parseTime;
    private _keyAllStaves;
    private _parseKey;
    private _parseDirection;
    /**
     * Reads a `<dashes>` or `<bracket>` line.
     * @returns Whether the words were used as the label of the line.
     */
    private _parseLine;
    private _parseMetronome;
    private _hasSameTempo;
    private _parseDynamics;
    private _parseForward;
    private _parseBackup;
    private _getOrCreateStaff;
    private _getOrCreateBar;
    private _resolveAndPlaceVoice;
    private _parseNote;
    /**
     * Creates a new beat for the note on the given staff and inserts it into the voice at the current musical position.
     * The beat level information of the note (beaming, duration, tuplets etc.) is applied after the note was fully parsed.
     */
    private _createBeat;
    /**
     * Validates the string parsed from `<technical><string>` and decides whether it is a
     * tab position (string + fret) or a string number annotation on a pitched note.
     */
    private _finalizeStringNumber;
    /**
     * Whether the note is played on a fretted instrument, which decides whether an x notehead or a mute is a dead note.
     * MusicXML has no dedicated element for dead notes. Applications encode them as x notehead (MuseScore, TuxGuitar, Guitar Pro)
     * or mute (TuxGuitar, Guitar Pro) which have other meanings on other instruments (e.g. hi-hats on percussion, spoken notes).
     * The whole part is checked as the tuning is often only specified on the tablature staff while the x notehead
     * is on the standard notation staff.
     */
    private _isFrettedInstrumentNote;
    /**
     * Resolves the note values which depend on the staff the note is attached to.
     *
     * Purpose:
     * - Apply the staff transposition to pitched notes.
     * - Resolve percussion articulation consistently in one place.
     *
     * Why this is called right after attaching the note:
     * - The logic relies on the note context (attached beat/voice/bar/staff), especially
     *   staff percussion state, and on the final display value after transposition.
     * - The remaining children of the note are interpreted afterwards and rely on the resolved
     *   note (e.g. ties are matched on the transposed pitch).
     */
    private _resolveAttachedNote;
    private _parsePlay;
    private static readonly _b4Value;
    private _estimateBeamDirection;
    private _parseNoteHead;
    private _createRestForGap;
    private _insertBeatToVoice;
    private _musicXmlDivisionsToAlphaTabTicks;
    private _parseBeatDuration;
    private static _allDurations;
    private static _allDurationTicks;
    private _applyBeatDurationFromTicks;
    private _parseLyric;
    private _parseNotations;
    private _noteLinks;
    /**
     * Reads an element linking notes (e.g. `<slur>`, `<slide>`) identified by its number.
     */
    private _parseNoteLink;
    private _getStaffContext;
    private _parseArpeggiate;
    private _parseFermata;
    private _parseArticulations;
    private _parseTechnical;
    private _parseBends;
    /**
     * Parses the text of a `<fingering>` or `<pluck>` element into a finger.
     * @param c The element to parse.
     * @param fretNumbering Whether digits follow the fretting hand numbering instead of the keyboard numbering.
     * @remarks
     * MusicXML defines the fingering as free text, "typically indicated 1,2,3,4,5", and leaves open which
     * number means which finger (see also https://github.com/w3c-cg/musicxml/issues/438).
     * The digits are therefore read in the convention of the instrument and hand:
     * - Keyboards and the plucking hand (`<pluck>`): 1 = thumb … 5 = little finger.
     * - Fretting hand on fretted and bowed instruments: 0 = open, 1 = index … 4 = little finger. 5 is mapped to the
     *   thumb as it is the only finger not covered by 1-4.
     *
     * The piano check used by the caller must match the one in `FingeringGroupGlyph.fingerToMusicFontSymbol`,
     * so that the fingering is displayed as written in the file.
     * Letters follow the SMuFL fingering vocabulary (T, t, p: thumb; i: index; m: middle; a: ring;
     * c, e, o, q, s, x: little finger) and are matched case-insensitive. Text which cannot be mapped to a finger is
     * ignored.
     */
    private _parseFingering;
    private _parseOrnaments;
    private _parseTied;
    private _parseStem;
    /**
     * The spelling of the note is defined by its `<pitch>`, the `<accidental>` only describes the printed sign
     * which is computed during rendering. We only report signs which contradict the pitch.
     * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental/
     */
    private _parseAccidental;
    private _calculatePitchedNoteValue;
    private _parseDuration;
    private _parseUnpitched;
    private _parsePitch;
    /**
     * The `<step>` and `<alter>` define the spelling of the note (e.g. F# vs Gb), also if no `<accidental>` is printed.
     * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pitch/
     */
    private static _accidentalModeForAlter;
    private _applyNoteHead;
}

import { BeatSubElement } from "./../../model/Beat";
import { AccidentalGroupGlyph } from "./AccidentalGroupGlyph";
import { BeatGlyphBase } from "./BeatGlyphBase";
/**
 * @internal
 */
export declare class ScoreBeatPreNotesGlyph extends BeatGlyphBase {
    /**
     * The initial spacing (in stave-spaces) before the first beat of a bar without accidentals.
     * Behind Bars recommends 2.5sp after a clef/key signature (1sp after a barline), but the pre-beat
     * glyphs already have a bit spacing, hence it is a reduced value.
     */
    private static readonly _initialBeatSpacing;
    private _prebends;
    get prebendNoteHeadOffset(): number;
    protected get effectElement(): BeatSubElement;
    accidentals: AccidentalGroupGlyph | null;
    doMultiVoiceLayout(): void;
    doLayout(): void;
    private _createGlyphs;
    private _createAccidentalGlyph;
}

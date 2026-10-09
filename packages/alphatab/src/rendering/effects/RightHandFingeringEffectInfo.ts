import type { Beat } from '@coderline/alphatab/model/Beat';
import { Fingers } from '@coderline/alphatab/model/Fingers';
import type { MusicFontSymbol } from '@coderline/alphatab/model/MusicFontSymbol';
import type { Note } from '@coderline/alphatab/model/Note';
import { FingeringMode, NotationElement } from '@coderline/alphatab/NotationSettings';
import type { BarRendererBase } from '@coderline/alphatab/rendering/BarRendererBase';
import { EffectBarGlyphSizing } from '@coderline/alphatab/rendering/EffectBarGlyphSizing';
import { EffectBandPlacementCategory, type EffectInfo } from '@coderline/alphatab/rendering/EffectInfo';
import type { EffectGlyph } from '@coderline/alphatab/rendering/glyphs/EffectGlyph';
import { FingeringGroupGlyph } from '@coderline/alphatab/rendering/glyphs/FingeringGroupGlyph';
import { StackedFingeringGlyph } from '@coderline/alphatab/rendering/glyphs/StackedFingeringGlyph';
import { LineBarRenderer } from '@coderline/alphatab/rendering/LineBarRenderer';
import { BeamDirection } from '@coderline/alphatab/rendering/utils/BeamDirection';

function rightHandNotes(beat: Beat): Note[] {
    const notes: Note[] = [];
    for (const n of beat.notes) {
        if (n.isVisible && n.rightHandFinger !== Fingers.Unknown) {
            notes.push(n);
        }
    }
    return notes;
}

/**
 * Whether the right-hand fingering of the beat belongs above the staff. In multi-voice bars this follows the stem
 * direction (stems up above, stems down below), which reflects the file's own voicing regardless of which voice
 * carries the melody. Single-voice bars always use the band above.
 */
function isAboveStaff(renderer: BarRendererBase, beat: Beat): boolean {
    if (!beat.voice.bar.isMultiVoice) {
        return true;
    }
    if (renderer instanceof LineBarRenderer) {
        return renderer.getBeatDirection(beat) === BeamDirection.Up;
    }
    return beat.voice.index === 0;
}

/**
 * Right-hand fingerings for {@link FingeringMode.ScoreRightHandEffectBand}: stems-up beats above the staff,
 * stems-down beats below the staff.
 */
function createRightHandFingeringEffectInfo(effectId: string, above: boolean): EffectInfo {
    return {
        effectId,
        notationElement: NotationElement.EffectFingering,
        hideOnMultiTrack: false,
        sizingMode: EffectBarGlyphSizing.SingleOnBeat,
        shouldCreateGlyph: (renderer: BarRendererBase, beat: Beat): boolean => {
            if (
                beat.isRest ||
                renderer.settings.notation.fingeringMode !== FingeringMode.ScoreRightHandEffectBand ||
                above !== isAboveStaff(renderer, beat)
            ) {
                return false;
            }
            return rightHandNotes(beat).length > 0;
        },
        createNewGlyph: (renderer: BarRendererBase, beat: Beat): EffectGlyph => {
            const notes = rightHandNotes(beat);
            notes.sort((a, b) => b.realValue - a.realValue);
            const symbols: MusicFontSymbol[] = [];
            for (const n of notes) {
                symbols.push(
                    FingeringGroupGlyph.fingerToMusicFontSymbol(renderer.settings, beat, n.rightHandFinger, false)
                );
            }
            return new StackedFingeringGlyph(symbols);
        },
        canExpand: (_from: Beat, _to: Beat): boolean => true,
        placementCategory: EffectBandPlacementCategory.NoteAttached
    };
}

/**
 * @internal
 */
export const rightHandFingeringAboveEffectInfo: EffectInfo = createRightHandFingeringEffectInfo(
    'EffectRightHandFingeringAbove',
    true
);

/**
 * @internal
 */
export const rightHandFingeringBelowEffectInfo: EffectInfo = createRightHandFingeringEffectInfo(
    'EffectRightHandFingeringBelow',
    false
);

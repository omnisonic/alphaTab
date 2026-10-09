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
 * Right-hand fingerings for {@link FingeringMode.ScoreRightHandEffectBand}: the first voice above the staff,
 * the other voices (if enabled via {@link NotationSettings.showLowerVoiceRightHandFingering}) below the staff.
 */
function createRightHandFingeringEffectInfo(effectId: string, upperVoice: boolean): EffectInfo {
    return {
        effectId,
        notationElement: NotationElement.EffectFingering,
        hideOnMultiTrack: false,
        sizingMode: EffectBarGlyphSizing.SingleOnBeat,
        shouldCreateGlyph: (renderer: BarRendererBase, beat: Beat): boolean => {
            const notation = renderer.settings.notation;
            if (beat.isRest || notation.fingeringMode !== FingeringMode.ScoreRightHandEffectBand) {
                return false;
            }
            const isUpperVoice = beat.voice.index === 0;
            if (upperVoice !== isUpperVoice || (!upperVoice && !notation.showLowerVoiceRightHandFingering)) {
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

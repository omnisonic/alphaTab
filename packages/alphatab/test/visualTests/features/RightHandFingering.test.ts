import { describe, it } from 'vitest';
import { FingeringMode } from '@coderline/alphatab/NotationSettings';
import { Settings } from '@coderline/alphatab/Settings';
import { StaveProfile } from '@coderline/alphatab/StaveProfile';
import { VisualTestHelper } from 'test/visualTests/VisualTestHelper';

// rf 1-4 = p i m a, lf 2-5 = left-hand fingers 1-4
function settings(): Settings {
    const s = new Settings();
    s.display.staveProfile = StaveProfile.Score;
    s.notation.fingeringMode = FingeringMode.ScoreRightHandEffectBand;
    return s;
}

describe('RightHandFingeringTests', () => {
    // melody in voice 1 (stems up): letters above, bass in voice 2 (stems down): letters below
    it('melody-in-voice-1', async () => {
        await VisualTestHelper.runVisualTestTex(
            '\\voice ' +
                ':4 3.1{rf 3 lf 4} 1.2{rf 2 lf 2} 0.1{rf 4} 3.1{rf 3 lf 4}' +
                ' \\voice ' +
                ':2 3.5{rf 1 lf 4} 0.4{rf 1}',
            'test-data/visual-tests/right-hand-fingering/melody-in-voice-1.png',
            settings()
        );
    });

    // bass written in voice 1 with stems down, melody in voice 2 with stems up (as in many imported files):
    // letters must still follow the stems, melody above and bass below
    it('bass-in-voice-1', async () => {
        await VisualTestHelper.runVisualTestTex(
            '\\voice ' +
                ':2 3.5{rf 1 lf 4 beam down} 0.4{rf 1 beam down}' +
                ' \\voice ' +
                ':4 3.1{rf 3 lf 4 beam up} 1.2{rf 2 lf 2 beam up} 0.1{rf 4 beam up} 3.1{rf 3 lf 4 beam up}',
            'test-data/visual-tests/right-hand-fingering/bass-in-voice-1.png',
            settings()
        );
    });

    // voices swap roles within the bar: each beat follows its own stem
    it('voices-swap-mid-bar', async () => {
        await VisualTestHelper.runVisualTestTex(
            '\\voice ' +
                ':2 3.2{rf 4 lf 4 beam up} 3.5{rf 1 lf 4 beam down}' +
                ' \\voice ' +
                ':2 3.5{rf 1 lf 4 beam down} 0.1{rf 3 beam up}',
            'test-data/visual-tests/right-hand-fingering/voices-swap-mid-bar.png',
            settings()
        );
    });

    // single voice: letters always above, even when high notes flip the stems down; chords stack highest on top
    it('single-voice', async () => {
        await VisualTestHelper.runVisualTestTex(
            ':4 3.6{rf 1} (0.3{rf 2} 1.2{rf 3} 0.1{rf 4}) 3.1{rf 3 lf 4} 5.1{rf 4 lf 2}',
            'test-data/visual-tests/right-hand-fingering/single-voice.png',
            settings()
        );
    });
});

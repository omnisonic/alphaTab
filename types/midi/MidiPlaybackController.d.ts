import type { Score } from "./../model/Score";
/**
 * Walks through the master bars of a song in playback order respecting repeats, alternate endings
 * and jump directions (D.C., D.S., Coda, Fine).
 * @internal
 */
export declare class MidiPlaybackController {
    /**
     * The jumps in the order they are checked if a bar has multiple ones.
     */
    private static readonly _jumps;
    private _score;
    /**
     * The started repeats, the innermost on top.
     */
    private _repeatStack;
    /**
     * The D.C./D.S. we followed, null if we play normally (before any jump or after the coda).
     * After a jump all repeats are played as their final pass (no repeating, only the last alternate ending).
     */
    private _activeJump;
    /**
     * The bars on which a D.C./D.S. jump was already taken. Each jump is only taken once.
     */
    private _takenJumps;
    shouldPlay: boolean;
    index: number;
    currentTick: number;
    get finished(): boolean;
    constructor(score: Score);
    processCurrent(): void;
    moveNext(): void;
    /**
     * Starts the repeat of the given bar if needed: when reaching its opening, or after a jump
     * which landed within the repeat (the opening is then never visited).
     */
    private _enterRepeat;
    private _moveNextWithDirections;
    private _takeJump;
    private _continueAfterJump;
    /**
     * Finds the index of the masterbar with the given direction applied which fits best
     * the current index. In best case in one piece we only have single jump marks, but it could happen
     * that you have multiple Segno/Coda symbols placed at different sections.
     * @param toFind
     * @param backwardsFirst whether to first search backwards before looking forwards.
     * @returns the index of the masterbar found with the given direction or -1 if no masterbar with the given direction was found.
     */
    private _findJumpTarget;
    private _findDirection;
}

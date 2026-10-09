import { ScoreTieGlyph } from "./ScoreTieGlyph";
/**
 * @internal
 */
export declare class ScoreSlurGlyph extends ScoreTieGlyph {
    getTieHeight(startX: number, _startY: number, endX: number, _endY: number): number;
    protected calculateStartX(): number;
    protected calculateStartY(): number;
    protected calculateEndX(): number;
    protected caclculateEndY(): number;
    private _isStartCentered;
    private _isEndCentered;
    private _isEndOnStem;
}

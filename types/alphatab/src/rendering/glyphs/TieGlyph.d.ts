import type { Note } from "./../../model/Note";
import type { ICanvas } from "./../../platform/ICanvas";
import { type BarRendererBase, NoteXPosition } from "./../BarRendererBase";
import { Glyph } from "./Glyph";
import type { LineBarRenderer } from "./../LineBarRenderer";
import { BeamDirection } from "./../utils/BeamDirection";
import { Bounds } from "./../utils/Bounds";
/**
 * @internal
 */
export interface ITieGlyph {
    /**
     * Whether the tie is relevant for checking on bar renderer overflows.
     * If set, the tie bounds will be requested and the overflow is applied.
     */
    readonly checkForOverflow: boolean;
}
/**
 * @internal
 */
export declare abstract class TieGlyph extends Glyph implements ITieGlyph {
    tieDirection: BeamDirection;
    readonly slurEffectId: string;
    protected isForEnd: boolean;
    constructor(slurEffectId: string, forEnd: boolean);
    private _startX;
    private _startY;
    private _endX;
    private _endY;
    private _tieHeight;
    private _boundingBox?;
    private _shouldPaint;
    get checkForOverflow(): boolean;
    getBoundingBoxTop(): number;
    getBoundingBoxBottom(): number;
    doLayout(): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    protected abstract shouldDrawBendSlur(): boolean;
    getTieHeight(_startX: number, _startY: number, _endX: number, _endY: number): number;
    protected abstract calculateTieDirection(): BeamDirection;
    protected abstract lookupStartBeatRenderer(): LineBarRenderer;
    protected abstract lookupEndBeatRenderer(): LineBarRenderer | null;
    protected abstract calculateStartY(): number;
    protected abstract caclculateEndY(): number;
    protected abstract calculateStartX(): number;
    protected abstract calculateEndX(): number;
    calculateMultiSystemSlurY(renderer: BarRendererBase): number;
    shouldCreateMultiSystemSlur(renderer: BarRendererBase): boolean;
    static calculateActualTieHeight(scale: number, x1: number, y1: number, x2: number, y2: number, down: boolean, offset: number, size: number): Bounds;
    private static _computeBezierControlPoints;
    private static _rotate;
    static paintTie(canvas: ICanvas, scale: number, x1: number, y1: number, x2: number, y2: number, down: boolean, offset: number, size: number): void;
    static calculateBendSlurTopY(x1: number, y1: number, x2: number, y2: number, down: boolean, scale: number, bendSlurHeight: number): number;
    static calculateBendSlurHeight(x1: number, y1: number, x2: number, y2: number, down: boolean, bendSlurHeight: number): Bounds;
    static drawBendSlur(canvas: ICanvas, x1: number, y1: number, x2: number, y2: number, down: boolean, bendSlurHeight: number, slurText?: string): void;
}
/**
 * A common tie implementation using note details for positioning
 * @internal
 */
export declare abstract class NoteTieGlyph extends TieGlyph {
    protected startNote: Note;
    protected endNote: Note;
    protected startNoteRenderer: LineBarRenderer | null;
    protected endNoteRenderer: LineBarRenderer | null;
    constructor(slurEffectId: string, startNote: Note, endNote: Note, forEnd: boolean);
    protected get isLeftHandTap(): boolean;
    getTieHeight(startX: number, startY: number, endX: number, endY: number): number;
    protected calculateTieDirection(): BeamDirection;
    protected calculateStartX(): number;
    protected getStartNotePosition(): NoteXPosition;
    protected calculateStartY(): number;
    protected calculateEndX(): number;
    protected getEndNotePosition(): NoteXPosition;
    protected caclculateEndY(): number;
    protected lookupEndBeatRenderer(): LineBarRenderer | null;
    protected lookupStartBeatRenderer(): LineBarRenderer;
    protected shouldDrawBendSlur(): boolean;
}
/**
 * A tie glyph for continued multi-system ties/slurs
 * @internal
 */
export declare class ContinuationTieGlyph extends TieGlyph {
    private _startTie;
    constructor(startTie: TieGlyph);
    protected lookupStartBeatRenderer(): LineBarRenderer;
    protected lookupEndBeatRenderer(): LineBarRenderer;
    protected shouldDrawBendSlur(): boolean;
    protected calculateTieDirection(): BeamDirection;
    protected calculateStartY(): number;
    protected caclculateEndY(): number;
    protected calculateStartX(): number;
    protected calculateEndX(): number;
}

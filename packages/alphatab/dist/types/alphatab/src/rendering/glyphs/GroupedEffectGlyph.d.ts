import type { Beat } from "./../../model/Beat";
import type { ICanvas } from "./../../platform/ICanvas";
import type { BarRendererBase } from "./../BarRendererBase";
import type { BeatXPosition } from "./../BeatXPosition";
import { EffectGlyph } from "./EffectGlyph";
/**
 * @internal
 */
export declare abstract class GroupedEffectGlyph extends EffectGlyph {
    protected endPosition: BeatXPosition;
    protected forceGroupedRendering: boolean;
    protected endOnBarLine: boolean;
    protected constructor(endPosition: BeatXPosition);
    get isLinkedWithPrevious(): boolean;
    get isLinkedWithNext(): boolean;
    paint(cx: number, cy: number, canvas: ICanvas): void;
    protected calculateEndX(endBeatRenderer: BarRendererBase, endBeat: Beat | null, cx: number, endPosition: BeatXPosition): number;
    protected paintNonGrouped(cx: number, cy: number, canvas: ICanvas): void;
    protected abstract paintGrouped(cx: number, cy: number, endX: number, canvas: ICanvas): void;
}

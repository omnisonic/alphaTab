import type { Bar } from "./../model/Bar";
import type { Staff } from "./../model/Staff";
import type { Track } from "./../model/Track";
import type { BarRendererBase } from "./BarRendererBase";
import { BarRendererFactory, type EffectBandInfo } from "./BarRendererFactory";
import type { ScoreRenderer } from "./ScoreRenderer";
/**
 * This Factory produces TabBarRenderer instances
 * @internal
 */
export declare class TabBarRendererFactory extends BarRendererFactory {
    get staffId(): string;
    constructor(effectBands: EffectBandInfo[]);
    canCreate(track: Track, staff: Staff): boolean;
    create(renderer: ScoreRenderer, bar: Bar): BarRendererBase;
}

import type { Automation } from "./../../model/Automation";
import { type ICanvas } from "./../../platform/ICanvas";
import { EffectGlyph } from "./EffectGlyph";
/**
 * This glyph renders tempo annotations for tempo automations
 * where the drawing position is determined more dynamically while rendering.
 * @internal
 */
export declare class BarTempoGlyph extends EffectGlyph {
    private _tempoAutomations;
    constructor(tempoAutomations: Automation[]);
    doLayout(): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

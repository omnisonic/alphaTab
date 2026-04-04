import { type ICanvas } from "./../../platform/ICanvas";
import { Glyph } from "./Glyph";
/**
 * @internal
 */
export declare class RepeatCountGlyph extends Glyph {
    private _count;
    constructor(x: number, y: number, count: number);
    doLayout(): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

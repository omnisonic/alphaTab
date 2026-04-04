import { type ICanvas } from "./../../platform/ICanvas";
import { Glyph } from "./Glyph";
/**
 * @internal
 */
export declare class BarNumberGlyph extends Glyph {
    private _number;
    constructor(x: number, y: number, num: number);
    doLayout(): void;
    paint(cx: number, cy: number, canvas: ICanvas): void;
}

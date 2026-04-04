import { type Bar, BarSubElement } from "./../model/Bar";
import { type Beat, BeatSubElement } from "./../model/Beat";
import { Duration } from "./../model/Duration";
import type { Note } from "./../model/Note";
import type { Voice } from "./../model/Voice";
import type { ICanvas } from "./../platform/ICanvas";
import { LineBarRenderer } from "./LineBarRenderer";
import type { ScoreRenderer } from "./ScoreRenderer";
import { BeamDirection } from "./utils/BeamDirection";
import type { BeamingHelper, BeamingHelperDrawInfo } from "./utils/BeamingHelper";
/**
 * This BarRenderer renders a bar using (Jianpu) Numbered Music Notation
 * @internal
 */
export declare class NumberedBarRenderer extends LineBarRenderer {
    static readonly StaffId: string;
    simpleWhammyOverflow: number;
    private _isOnlyNumbered;
    shortestDuration: Duration;
    get dotSpacing(): number;
    get repeatsBarSubElement(): BarSubElement;
    get barNumberBarSubElement(): BarSubElement;
    get barLineBarSubElement(): BarSubElement;
    get staffLineBarSubElement(): BarSubElement;
    constructor(renderer: ScoreRenderer, bar: Bar);
    get lineSpacing(): number;
    get heightLineCount(): number;
    get drawnLineCount(): number;
    protected get bottomGlyphOverflow(): number;
    protected get flagsSubElement(): BeatSubElement;
    protected get beamsSubElement(): BeatSubElement;
    protected get tupletSubElement(): BeatSubElement;
    protected shouldPaintBeamingHelper(_h: BeamingHelper): boolean;
    protected paintFlag(cx: number, cy: number, canvas: ICanvas, h: BeamingHelper, flagsElement: BeatSubElement): void;
    protected paintBar(cx: number, cy: number, canvas: ICanvas, h: BeamingHelper, flagsElement: BeatSubElement): void;
    protected calculateOverflows(rendererTop: number, rendererBottom: number): void;
    getNoteLine(_note: Note): number;
    private _calculateBarHeight;
    protected getFlagTopY(beat: Beat, direction: BeamDirection): number;
    protected getFlagBottomY(beat: Beat, direction: BeamDirection): number;
    protected getBeamDirection(_helper: BeamingHelper): BeamDirection;
    protected getTupletBeamDirection(_helper: BeamingHelper): BeamDirection;
    protected createPreBeatGlyphs(): void;
    protected createLinePreBeatGlyphs(): void;
    private _createTimeSignatureGlyphs;
    protected createPostBeatGlyphs(): void;
    protected createVoiceGlyphs(v: Voice): void;
    protected paintBeamingStem(_beat: Beat, _cy: number, _x: number, _topY: number, _bottomY: number, _canvas: ICanvas): void;
    protected get beamSpacing(): number;
    protected get beamThickness(): number;
    protected paintBeamHelper(cx: number, cy: number, canvas: ICanvas, h: BeamingHelper, flagsElement: BeatSubElement, beamsElement: BeatSubElement): void;
    protected applyBarShift(_h: BeamingHelper, _direction: BeamDirection, _drawingInfo: BeamingHelperDrawInfo, _barCount: number): number;
    protected calculateBeamYWithDirection(h: BeamingHelper, _x: number, direction: BeamDirection): number;
    protected paintTuplets(cx: number, cy: number, canvas: ICanvas, beatElement: BeatSubElement, _bracketsAsArcs?: boolean): void;
}

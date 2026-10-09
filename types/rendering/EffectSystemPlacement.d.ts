import type { RenderStaff } from "./staves/RenderStaff";
/**
 * Priority-ordered skyline oracle that positions every {@link EffectBand} on
 * a staff line. Fires from {@link RenderStaff.finalizeStaff}.
 * @internal
 */
export declare class EffectSystemPlacement {
    private readonly _staff;
    private readonly _top;
    private readonly _bottom;
    private readonly _groupBands;
    private readonly _groupXStarts;
    private readonly _groupXEnds;
    private readonly _clearXStarts;
    private readonly _clearXEnds;
    constructor(staff: RenderStaff);
    placeAndApply(): void;
    /** The height the placed bands add on top of the given content overflow. */
    private static _effectsHeight;
    /** Sort by precomputed {@link EffectBand.sortKey} (placementCategory, order desc, voice, renderer). */
    private static _sortByPriority;
    private _placeSide;
}

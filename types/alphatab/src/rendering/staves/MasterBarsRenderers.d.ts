import type { MasterBar } from "./../../model/MasterBar";
import type { BarRendererBase } from "./../BarRendererBase";
import type { BarLayoutingInfo } from "./BarLayoutingInfo";
/**
 * This container represents a single column of bar renderers independent from any staves.
 * This container can be used to reorganize renderers into a new staves.
 * @internal
 */
export declare class MasterBarsRenderers {
    width: number;
    isLinkedToPrevious: boolean;
    canWrap: boolean;
    masterBar: MasterBar;
    additionalMultiBarRestIndexes: number[] | null;
    get lastMasterBarIndex(): number;
    renderers: BarRendererBase[];
    layoutingInfo: BarLayoutingInfo;
}

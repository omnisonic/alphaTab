import { BackingTrack } from "./../../model/BackingTrack";
/**
 * @internal
 */
export declare class BackingTrackSerializer {
    static fromJson(obj: BackingTrack, m: unknown): void;
    static toJson(obj: BackingTrack | null): Map<string, unknown> | null;
    static setProperty(obj: BackingTrack, property: string, v: unknown): boolean;
}

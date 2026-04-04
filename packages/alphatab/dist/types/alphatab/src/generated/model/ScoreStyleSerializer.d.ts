import { ScoreStyle } from "./../../model/Score";
/**
 * @internal
 */
export declare class ScoreStyleSerializer {
    static fromJson(obj: ScoreStyle, m: unknown): void;
    static toJson(obj: ScoreStyle | null): Map<string, unknown> | null;
    static setProperty(obj: ScoreStyle, property: string, v: unknown): boolean;
}

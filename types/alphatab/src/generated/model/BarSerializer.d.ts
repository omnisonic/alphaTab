import { Bar } from "./../../model/Bar";
/**
 * @internal
 */
export declare class BarSerializer {
    static fromJson(obj: Bar, m: unknown): void;
    static toJson(obj: Bar | null): Map<string, unknown> | null;
    static setProperty(obj: Bar, property: string, v: unknown): boolean;
}

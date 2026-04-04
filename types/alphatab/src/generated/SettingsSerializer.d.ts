import { Settings } from "./../Settings";
/**
 * @internal
 */
export declare class SettingsSerializer {
    static fromJson(obj: Settings, m: unknown): void;
    static toJson(obj: Settings | null): Map<string, unknown> | null;
    static setProperty(obj: Settings, property: string, v: unknown): boolean;
}

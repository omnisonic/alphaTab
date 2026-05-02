export interface VitestPackageOptions {
    setupFiles?: string[];
    truncateThreshold?: number;
    testTimeout?: number;
}
export declare function defineVitestConfig(options?: VitestPackageOptions): import("vite").UserConfig;

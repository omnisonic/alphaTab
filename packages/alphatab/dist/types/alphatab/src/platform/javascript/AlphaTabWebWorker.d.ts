import type { IWorkerScope } from "./IWorkerScope";
/**
 * @target web
 * @public
 */
export declare class AlphaTabWebWorker {
    private _renderer;
    private _main;
    constructor(main: IWorkerScope);
    static init(): void;
    private _handleMessage;
    private _updateFontSizes;
    private _updateSettings;
    private _renderMultiple;
    private _error;
}

import type { IContainer } from "./../IContainer";
import type { IMouseEventArgs } from "./../IMouseEventArgs";
/**
 * @target web
 * @internal
 */
export declare class BrowserMouseEventArgs implements IMouseEventArgs {
    readonly mouseEvent: PointerEvent;
    get isLeftMouseButton(): boolean;
    getX(relativeTo: IContainer): number;
    getY(relativeTo: IContainer): number;
    preventDefault(): void;
    constructor(e: PointerEvent);
}

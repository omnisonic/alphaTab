import { AlphaTabError } from "./../AlphaTabError";
/**
 * The error thrown when parsing malformed XML.
 * @internal
 */
export declare class XmlError extends AlphaTabError {
    /**
     * The XML which failed to parse.
     */
    xml: string;
    /**
     * The position in the XML where the error was detected.
     */
    pos: number;
    constructor(message: string, xml: string, pos: number);
}

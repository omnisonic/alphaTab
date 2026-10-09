import { XmlNode } from "./XmlNode";
/**
 * The root of a {@link XmlNode} tree, holding the document type and the root element.
 * @internal
 */
export declare class XmlDocument extends XmlNode {
    constructor();
    /**
     * Parses the given XML and adds the read nodes to this document.
     * @throws {XmlError} if the XML is malformed.
     */
    parse(xml: string): void;
    toString(): string;
    toFormattedString(indention?: string, xmlHeader?: boolean): string;
}

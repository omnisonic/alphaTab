/**
 * The types of nodes in a {@link XmlNode} tree.
 * @internal
 */
export declare enum XmlNodeType {
    Element = 0,
    Document = 1,
    Comment = 2,
    DocumentType = 3
}
/**
 * A node of a lightweight XML tree tailored to the data oriented XML formats alphaTab reads and writes
 * (MusicXML, Guitar Pro GPIF, Capella).
 *
 * These formats do not use mixed content, hence character data is not represented as own nodes but
 * as text of the element containing it:
 * - Each run of character data between markup is trimmed, runs with only whitespace (formatting) are dropped.
 * - CDATA sections are kept as written.
 * - The text of an element is the concatenation of its runs and CDATA sections.
 *
 * Comments and processing instructions are skipped while parsing, comments can be added for writing.
 * @internal
 */
export declare class XmlNode {
    private static readonly _noNodes;
    private _text;
    private _isCData;
    private _attributes;
    private _childNodes;
    private _childElements;
    /**
     * The type of this node.
     */
    nodeType: XmlNodeType;
    /**
     * The name of an element node, empty for other node types.
     */
    localName: string;
    constructor(nodeType?: XmlNodeType, localName?: string);
    /**
     * All child nodes in document order. The returned list must not be modified, use {@link addChild}.
     */
    get childNodes(): XmlNode[];
    /**
     * The child element nodes in document order. The returned list must not be modified, use {@link addChild}.
     */
    childElements(): XmlNode[];
    /**
     * The first child element or null if there is none.
     */
    get firstElement(): XmlNode | null;
    /**
     * Whether any attributes are set on this node.
     */
    get hasAttributes(): boolean;
    /**
     * The attributes of this node.
     */
    get attributes(): Map<string, string>;
    /**
     * Gets the value of the attribute with the given name or the default value if the attribute is not set.
     */
    getAttribute(name: string, defaultValue?: string): string;
    /**
     * Whether the text of this node was written as CDATA section.
     */
    get isCData(): boolean;
    /**
     * Whether a text was set for this node (also if it is empty).
     */
    get hasText(): boolean;
    /**
     * The text of this node. For elements with child elements, the texts of the children are appended.
     * Setting the text removes all child nodes.
     */
    get innerText(): string;
    set innerText(value: string);
    /**
     * Sets the text of this node to be written as CDATA section. Removes all child nodes.
     */
    setCData(value: string): void;
    /**
     * Appends the given character data to the text of this node.
     * @param text The text to append.
     * @param isCData Whether the text originates from a CDATA section.
     */
    appendText(text: string, isCData: boolean): void;
    addChild(node: XmlNode): void;
    /**
     * Creates a new element with the given name and adds it as child.
     */
    addElement(name: string): XmlNode;
    /**
     * Finds the first child element with the given name.
     */
    findChildElement(name: string): XmlNode | null;
    /**
     * Collects all child elements with the given name.
     * @param name The name of the elements.
     * @param recursive Whether to also search the descendants of the child elements.
     */
    getElementsByTagName(name: string, recursive?: boolean): XmlNode[];
    private _collectElementsByTagName;
}

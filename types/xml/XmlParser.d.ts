import { XmlNode } from "./XmlNode";
/**
 * A non-validating XML parser building a {@link XmlNode} tree in a single forward pass.
 *
 * It covers what the XML based file formats need: elements, attributes, character data with
 * the predefined entities and character references, CDATA sections and the document type declaration.
 * Comments and processing instructions are skipped, other entities are kept as written.
 * See {@link XmlNode} on how character data is represented.
 * @internal
 */
export declare class XmlParser {
    private static readonly _charTab;
    private static readonly _charLineFeed;
    private static readonly _charCarriageReturn;
    private static readonly _charSpace;
    private static readonly _charExclamation;
    private static readonly _charDoubleQuote;
    private static readonly _charHash;
    private static readonly _charAmpersand;
    private static readonly _charSingleQuote;
    private static readonly _charSlash;
    private static readonly _charSemicolon;
    private static readonly _charLessThan;
    private static readonly _charEquals;
    private static readonly _charGreaterThan;
    private static readonly _charQuestion;
    private static readonly _charBracketOpen;
    private static readonly _charBracketClose;
    private static readonly _charLowerX;
    private static readonly _charByteOrderMark;
    private static readonly _maxEntityLength;
    private readonly _xml;
    private readonly _length;
    private _pos;
    private readonly _openElements;
    private constructor();
    /**
     * Parses the given XML and adds the read nodes to the given document.
     * @throws {XmlError} if the XML is malformed.
     */
    static parse(xml: string, document: XmlNode): void;
    private _parseDocument;
    /**
     * Reads a run of character data up to the next markup.
     */
    private _readCharacterData;
    /**
     * Reads a start tag (or empty element tag) including its attributes.
     * @returns The element which receives the following content.
     */
    private _readStartTag;
    private _readAttributeValue;
    /**
     * Reads an end tag and checks that it closes the current element.
     * @returns The parent of the closed element.
     */
    private _readEndTag;
    /**
     * Reads the markup starting with '<!': comments, CDATA sections and the document type declaration.
     */
    private _readDeclaration;
    /**
     * Decodes the character data in the given range resolving entity and character references.
     */
    private _decode;
    private static _resolveReference;
    private _readName;
    /**
     * Finds the given terminator starting at the given position.
     * @returns The position after the terminator.
     */
    private _indexAfter;
    private _isAt;
    private _expect;
    private _skipWhitespace;
    private static _toUpperAscii;
    private static _isWhitespace;
    private static _isNameEnd;
}

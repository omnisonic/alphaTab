import ts from 'typescript';
export type TypeWithNullableInfo = {
    readonly isNullable: boolean;
    readonly isOptional: boolean;
    readonly isUnionType: boolean;
    readonly isPrimitiveType: boolean;
    readonly isEnumType: boolean;
    readonly isOwnType: boolean;
    readonly isTypedArray: boolean;
    readonly typeAsString: string;
    readonly modulePath: string;
    readonly isCloneable: boolean;
    readonly isJsonImmutable: boolean;
    readonly isNumberType: boolean;
    readonly isMap: boolean;
    readonly isSet: boolean;
    readonly isArray: boolean;
    readonly arrayItemType?: TypeWithNullableInfo;
    readonly typeArguments?: readonly TypeWithNullableInfo[];
    readonly unionTypes?: readonly TypeWithNullableInfo[];
    readonly jsDocTags?: readonly ts.JSDocTag[];
    createTypeNode(): ts.TypeNode;
};
export declare function buildTypeSchema(program: ts.Program, input: ts.ClassDeclaration): TypeSchema;
export declare function getTypeWithNullableInfo(program: ts.Program, node: ts.TypeNode | ts.Type, allowUnion: boolean, isOptionalFromDeclaration: boolean, typeArgumentMapping: Map<string, ts.Type> | undefined): TypeWithNullableInfo;
export interface TypeProperty {
    partialNames: boolean;
    name: string;
    jsDocTags: readonly ts.JSDocTag[];
    type: TypeWithNullableInfo;
    jsonNames: string[];
    asRaw: boolean;
    target?: string;
    isJsonReadOnly: boolean;
    isReadOnly: boolean;
}
export interface TypeSchema {
    isStrict: boolean;
    hasToJsonExtension: boolean;
    hasSetPropertyExtension: boolean;
    properties: TypeProperty[];
}
export declare function toImportPath(fileName: string): string;

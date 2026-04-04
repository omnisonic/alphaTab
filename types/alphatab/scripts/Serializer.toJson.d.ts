import * as ts from 'typescript';
import type { TypeSchema } from './TypeSchema';
export declare function createToJsonMethod(input: ts.ClassDeclaration, serializable: TypeSchema, importer: (name: string, module: string) => void): ts.MethodDeclaration;

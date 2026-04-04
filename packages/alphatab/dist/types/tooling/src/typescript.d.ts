import * as ts from 'typescript';
type Logger = Pick<Console, 'log' | 'info' | 'warn' | 'error'>;
export declare function createDiagnosticReporter(pretty: boolean, logger: Logger): ts.DiagnosticReporter;
export declare function symbolFromNode(checker: ts.TypeChecker, node: ts.Node): ts.Symbol | undefined;
export declare function resolveImportedSourceFile(checker: ts.TypeChecker, node: ts.ImportDeclaration): ts.SourceFile | undefined;
export declare function createApiDtsFiles(dtsBaseDir: string, dtsFiles: string[], projectDir: string, outDir: string, logger: Logger): Promise<void>;
export declare function isElementStyleHelper(node: ts.Statement): boolean;
export declare function elementStyleUsingTransformer(): (context: ts.TransformationContext) => (source: ts.SourceFile) => ts.SourceFile;
export {};

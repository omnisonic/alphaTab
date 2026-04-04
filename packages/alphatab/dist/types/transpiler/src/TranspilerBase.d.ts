import ts from 'typescript';
interface Emitter {
    name: string;
    emit(program: ts.Program, diagnostics: ts.Diagnostic[]): void;
}
export default function (emitters: Emitter[], handleErrors: boolean): void;
export {};

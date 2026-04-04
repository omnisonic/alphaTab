declare global {
    namespace Chai {
        interface Assertion {
            toMatchSnapshot(message?: string): Assertion;
        }
    }
}
export declare function initializeJestSnapshot(): Promise<void>;
export declare function beforeEachTest(newTest: Mocha.Test): void;
export declare function afterAll(): void;

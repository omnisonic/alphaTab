export declare const mochaHooks: {
    beforeAll(): Promise<void>;
    beforeEach: (this: Mocha.Context, done: Mocha.Done) => void;
    afterAll(this: Mocha.Context, done: Mocha.Done): void;
};

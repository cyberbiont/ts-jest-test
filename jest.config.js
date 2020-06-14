module.exports = {
	roots: [`<rootDir>/src`],
	testMatch: [`<rootDir>/src/**/*(*.)+(spec|test).+(ts|tsx|js|jsx)`],
	preset: `ts-jest`,
	setupFilesAfterEnv: [`<rootDir>/test.setup.ts`, `<rootDir>/src/global.ts`],
};

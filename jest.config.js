module.exports = {
	preset: 'ts-jest', // Use ts-jest
	testEnvironment: 'node', // Tell Jest to run in a Node env
	testRunner: 'jest-circus/runner', // Tell jest to use jest-circus
	testMatch: ['<rootDir>/tests/**/*.test.ts'] // Or your own glob pattern. <rootDir> is a Jest replacement variable that references project root dir.
};

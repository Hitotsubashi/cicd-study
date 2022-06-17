module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['expect-puppeteer'],
  testTimeout: 100000,
  testMatch: ['<rootDir>/src/e2e/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
};

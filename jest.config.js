module.exports = {
  'moduleNameMapper': {
    '^.+\\.(css|scss)$': '<rootDir>/empty-module.js',
    '~(.*)$': '<rootDir>/src/$1',
  },
  'setupTestFrameworkScriptFile': '<rootDir>/jest.setup.js',
};

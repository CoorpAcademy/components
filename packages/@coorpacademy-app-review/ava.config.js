module.exports = {
  extensions: ['ts'],
  files: ['src/**/*.test.ts'],
  // https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-without-type-module
  require: ['ts-node/register/transpile-only']
};

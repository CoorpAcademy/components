module.exports = {
  extensions: ['ts', 'tsx'],
  files: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  // https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-without-type-module
  require: ['ts-node/register/transpile-only']
};

const dotenv = require('dotenv');
dotenv.config({
  path: '.env.sample'
});

module.exports = {
  files: ['src/**/*.test.*', 'test/**/*.test.*'],
  extensions: ['ts', 'tsx'],
  // https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-without-type-module
  require: ['ts-node/register/transpile-only', './src/helpers/css-register.ts']
};

const config = require('../../ava.config');

// https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-without-type-module
module.exports = Object.assign({}, config, {
  require: [...config.require, 'ts-node/register/transpile-only'],
  files: [...config.files, 'src/**/test/**/*.ts', 'src/**/test/**/*.tsx'],
  extensions: ['js', 'ts', 'tsx'],
  timeout: '45s',
  concurrency: 8
});

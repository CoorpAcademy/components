const config = require('../../ava.config');

// https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-without-type-module
module.exports = Object.assign({}, config, {
  require: [
    ...config.require,
    '../../test/helpers/throw-warning',
    'ts-node/register/transpile-only'
  ],
  timeout: '45s'
});

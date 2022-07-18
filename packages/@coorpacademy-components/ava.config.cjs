const config = require('../../ava.config');

// https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-without-type-module
module.exports = Object.assign({}, config, {
  require: [`${__dirname}/ava.requirements.js`, '../../test/helpers/throw-warning'],
  extensions: ['js', 'ts', 'tsx'],
  timeout: '45s',
  workerThreads: false
});

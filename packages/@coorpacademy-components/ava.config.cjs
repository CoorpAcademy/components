const config = require('../../ava.config');

module.exports = Object.assign({}, config, {
  require: [...config.require, '../../test/helpers/throw-warning'],
  timeout: '45s'
});

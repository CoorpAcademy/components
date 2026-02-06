const base = require('../../ava.config');

module.exports = {
  ...base,
  require: [...(base.require || []), './test-setup.js']
};

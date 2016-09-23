const assign = require('lodash/fp/assign');
const defaultConfig = require('./webpack.config.js');

module.exports = (bundle, dist) => {
  return assign(defaultConfig, {
    entry: {bundle},
    output: {
      path: dist
    }
  });
};

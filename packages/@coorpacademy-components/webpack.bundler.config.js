const set = require('lodash/fp/set');
const defaultConfig = require('./webpack.config.js');

module.exports = (bundle, dist) => {
  let config = set('output.path', dist, defaultConfig);
  config = set('entry', {bundle}, config);
  return config;
};

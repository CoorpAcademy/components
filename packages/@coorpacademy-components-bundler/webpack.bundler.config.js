const {join} = require('path');
const set = require('lodash/fp/set');
const defaultConfig = require('./webpack.config.js');

module.exports = (src, bundle, dist) => {
  let config = set('output.path', dist, defaultConfig);
  config = set('entry', {bundle}, config);

  config.module.loaders.push({
    test: /\.js$/,
    loader: 'babel',
    include: join(process.cwd(), src)
  });

  return config;
};

const {join} = require('path');
const set = require('lodash/fp/set');
const defaultConfig = require('../webpack.config.js');

const componentsConfig = (src, input, dist, cssScope) => {
  let config = defaultConfig('Coorponents', cssScope);
  config = set('output.path', dist, config);
  config = set('entry', {bundle: input}, config);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: join(process.cwd(), src)
  });

  return config;
};

const createConfig = (appName, entry, output) => {
  let config = set('output', output, defaultConfig(appName));
  config = set('entry', entry, config);

  return config;
};

module.exports = {
  componentsConfig,
  createConfig
};

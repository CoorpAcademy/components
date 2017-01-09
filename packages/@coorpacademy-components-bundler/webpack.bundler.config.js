const {join} = require('path');
const set = require('lodash/fp/set');
const {concat, kebabCase} = require('lodash/fp');
const defaultConfig = require('./webpack.config.js');

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

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

const appConfig = (appName, input) => {
  let config = set(
    'output',
    {
      library: appName,
      filename: '[name].js',
      path: join(process.cwd(), 'dist'),
      publicPath: '/dist',
      libraryTarget: 'umd'
    },
    defaultConfig(appName)
  );

  config = set(
    'entry',
    {
      [kebabCase(appName)]: addHMR(['babel-polyfill', input])
    },
    config
  );

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: join(input, '..')
  });

  return config;
};

module.exports = {
  componentsConfig,
  appConfig
};

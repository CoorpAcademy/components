const path = require('path');
const config = require('@coorpacademy/webpack-config');

const appName = 'Forum';

const entry = {
  app: ['babel-polyfill', './src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: 'forum.js',
  libraryTarget: 'umd'
};

_.set(config, 'entry', entry);
_.set(config, 'output', output);

module.exports = config;

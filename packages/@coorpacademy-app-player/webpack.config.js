const path = require('path');
const config = require('@coorpacademy/webpack-config');

const appName = 'Player';

const entry = {
  app: ['babel-polyfill', './src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: 'player.js',
  libraryTarget: 'umd'
};

_.set(config, 'entry', entry);
_.set(config, 'output', output);

module.exports = config;

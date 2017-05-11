const path = require('path');
const {createConfig} = require('@coorpacademy/components-bundler');

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

module.exports = createConfig(appName, entry, output);

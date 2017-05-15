const set = require('lodash/fp/set');
const path = require('path');
let config = require('@coorpacademy/webpack-config');

const appName = 'Player';

const entry = {
  player: ['babel-polyfill', './src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: 'player.js',
  libraryTarget: 'umd'
};

config = set('entry', entry, config);
config = set('output', output, config);

console.log({config});

module.exports = config;

const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const config = require('@coorpacademy/webpack-config');

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

module.exports = pipe(set('entry', entry), set('output', output))(config);

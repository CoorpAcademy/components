const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const {default: generateConfig} = require('@coorpacademy/webpack-config');

const entry = {
  Player: ['babel-polyfill', './src'],
  Scenarios: './src/scenarios',
  Services: './src/services'
};

const output = {
  library: ['Coorpacademy', '[name]'],
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: '[name].js',
  libraryTarget: 'umd'
};

module.exports = pipe(
  set('entry', entry),
  set('output', output),
  set('resolve.modules', [path.join(__dirname, 'node_modules'), 'node_modules'])
)(generateConfig(process.env.NODE_ENV));

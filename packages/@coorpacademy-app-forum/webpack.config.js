const set = require('lodash/fp/set');
const path = require('path');
let config = require('@coorpacademy/webpack-config');

const appName = 'Forum';

const entry = {
  forum: ['babel-polyfill', './src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: 'forum.js',
  libraryTarget: 'umd'
};

config = set('entry', entry, config);
config = set('output', output, config);

module.exports = config;

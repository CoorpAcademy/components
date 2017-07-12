const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const update = require('lodash/fp/update');
const concat = require('lodash/fp/concat');
const {default: generateConfig} = require('@coorpacademy/webpack-config');

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

module.exports = pipe(
  set('entry', entry),
  set('output', output),
  update('resolve.modules', concat([path.join(__dirname, 'node_modules')]))
)(generateConfig(process.env.NODE_ENV));

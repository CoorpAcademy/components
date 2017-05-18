const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const config = require('@coorpacademy/webpack-config');

const entry = {
  template: ['babel-polyfill', './src']
};

const output = {
  library: 'Template',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: '[name].js',
  libraryTarget: 'umd'
};

module.exports = pipe(
  set('entry', entry),
  set('output', output),
  set('resolve.modules', [path.join(__dirname, 'node_modules'), 'node_modules'])
)(config);

const path = require('path');
const {createConfig} = require('@coorpacademy/components-bundler');

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

module.exports = createConfig(appName, entry, output);

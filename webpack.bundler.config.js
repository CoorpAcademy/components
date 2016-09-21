const merge = require('webpack-merge');

const defaultConfig = require('./webpack.config.default');
const styleConfig = require('./webpack.config.style');

const config = (factories, dist) => ({
  entry: {
    bundle: factories
  },
  output: {
    path: dist
  }
});

module.exports = (factories, dist) => merge.smart(
  styleConfig,
  defaultConfig,
  config(factories, dist)
);

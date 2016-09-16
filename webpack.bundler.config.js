const merge = require('webpack-merge');

const defaultConfig = require('./webpack.config.default');
const styleConfig = require('./webpack.config.style');

const config = (bundle, dist) => ({
  entry: {
    bundle
  },
  output: {
    path: dist
  }
});

module.exports = (bundle, dist) => merge.smart(
  styleConfig,
  defaultConfig,
  config(bundle, dist)
);

const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const {default: generateConfig} = require('@coorpacademy/webpack-config');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const appName = 'Components';

const entry = {
  components: ['./src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  filename: 'components.js'
};

const addBundleAnalyzerPlugin = config => {
  const existingPlugins = config.plugins || [];
  return {
    ...config,
    plugins: [...existingPlugins, new BundleAnalyzerPlugin()]
  };
};

module.exports = pipe(
  generateConfig,
  set('entry', entry),
  set('output', output),
  addBundleAnalyzerPlugin
)(process.env.NODE_ENV);

## example
```
const path = require('path');
const _ = require('lodash');
const config = require('@coorpacademy/webpack-config');
const CSSWrapper = require('@coorpacademy/css-wrapper-webpack-plugin');

const appName = 'Coorponents';

const entry = {
  foo: path.join(__dirname, './path/to/file-to-pack')
};

const output = {
  library: appName,
  path: path.join(__dirname, './path/to/dist'),
  publicPath: '/dist',
  filename: '[name].js',
  libraryTarget: 'umd'
};

_.set(config, 'entry', entry);
_.set(config, 'output', output);
config.plugins.push(new CSSWrapper('bundle.css', cssScope));

module.exports = config;
```

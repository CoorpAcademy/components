const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const update = require('lodash/fp/update');
const concat = require('lodash/fp/concat');
const {default: generateConfig} = require('@coorpacademy/webpack-config');

const entry = {
  'app-review-sandbox': ['@babel/polyfill', './sandbox/index.tsx']
};

const output = {
  library: ['Coorpacademy', '[name]'],
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: '[name].js',
  libraryTarget: 'umd'
};

const tsRule = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  ]
};

module.exports = pipe(
  set('entry', entry),
  set('output', output),
  set('resolve.extensions', ['.tsx', '.ts', '.js']),
  set('devServer.disableHostCheck', true),
  update('resolve.modules', concat([path.join(__dirname, 'node_modules')])),
  update('module.rules', concat([tsRule]))
)(generateConfig(process.env.NODE_ENV));

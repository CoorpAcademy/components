const path = require('path');
const webpack = require('webpack');
const concat = require('lodash/fp/concat');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const update = require('lodash/fp/update');
const {default: generateConfig} = require('@coorpacademy/webpack-config');
const {
  environmentVariables: {API_TEST_TOKEN}
} = require('./ava.config');

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
  update('resolve.modules', concat([path.join(__dirname, 'node_modules')])),
  update('module.rules', concat([tsRule])),
  update(
    'plugins',
    concat([
      new webpack.DefinePlugin({
        'process.env.API_TEST_TOKEN': JSON.stringify(API_TEST_TOKEN)
      })
    ])
  ),
  set('devServer', {
    static: {
      directory: path.join(__dirname, 'sandbox')
    },
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    compress: true,
    port: 8080
  })
)(generateConfig(process.env.NODE_ENV));

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const update = require('lodash/fp/update');
const concat = require('lodash/fp/concat');
const {default: generateConfig} = require('@coorpacademy/webpack-config');

const entry = {
  Player: ['./src']
};

const output = {
  library: ['Coorpacademy', '[name]'],
  filename: '[name].js',
  libraryTarget: 'umd'
};

module.exports = pipe(
  set('entry', entry),
  set('output', output),
  update(
    'plugins',
    concat([
      new HtmlWebpackPlugin({
        filename: `index.html`,
        template: './sandbox/index.html'
      })
    ])
  ),
  set('devServer', {
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    compress: true,
    port: 8080
  }),
  update('resolve.modules', concat([path.join(__dirname, 'node_modules')]))
)(generateConfig(process.env.NODE_ENV));

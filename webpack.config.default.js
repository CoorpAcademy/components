const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  devtool: NODE_ENV === 'production' ? null : 'eval',

  output: {
    library: 'Coorponents',
    filename: '[name].js'
  },
  stats: {
    children: false
  },
  mainFields: ['jsnext:main', 'browser', 'main']
};

const jsLoader = {
  test: /\.js$/,
  loader: 'babel',
  query: {
    babelrc: false,
    extends: path.join(__dirname, '.babelrc.default'),
    presets: [['es2015', {modules: false}]]
  },
  include: [
    path.join(__dirname, 'src')
  ]
};

const jsonLoader = {
  test: /\.json$/,
  loader: 'json'
};

const fileLoader = {
  test: /\.(ttf|otf|eot|svg|woff)$/,
  loader: 'file-loader'
};

const loaders = [
  jsLoader,
  jsonLoader,
  fileLoader
];

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV)
    }
  })
];

if (NODE_ENV === 'production')
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz',
      algorithm: 'gzip',
      regExp: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );

module.exports = Object.assign(
  config,
  {
    module: {
      loaders
    },
    plugins
  }
);

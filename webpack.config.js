require('babel-register');

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const hash = '[folder]__[local]___[hash:base64:5]';

module.exports = {
  context: __dirname,
  devtool: 'inline',

  entry: {
    'bundle-mooc': path.join(__dirname, 'src', 'bundle-mooc')
  },

  output: {
    library: 'Coorponents',
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [path.join(__dirname, 'src')]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style',
        `css?modules&importLoaders=1&localIdentName=${hash}!postcss`
      )
    }]
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
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
      minRatio: 0.9
    })
  ]
};
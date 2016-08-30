const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const hash = '[folder]__[local]___[hash:base64:5]';

module.exports = {
  context: __dirname,
  devtool: 'source-map',

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
      include: [
        path.join(__dirname, 'src')
      ]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style',
        `css?modules&importLoaders=1&localIdentName=${hash}!postcss`
      )
    }, {
      test: /\.json$/,
      loader: 'json',
      include: [
        path.join(__dirname, 'src')
      ]
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
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};

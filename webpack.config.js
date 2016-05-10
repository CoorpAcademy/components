require('babel-register');

const path = require('path');
var assign = require('lodash/fp/assign');
var reduce = require('lodash/fp/reduce');
var keys = require('lodash/fp/keys');
var map = require('lodash/fp/map');
var set = require('lodash/fp/set');
var pipe = require('lodash/fp/pipe');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

var engines = require('./src/engines').default;

module.exports = {
  context: __dirname,
  devtool: 'inline',

  entry: pipe(
    keys,
    map(function(name) {
      var entry = ['bundle', 'with', name].join('-');
      return set(entry, path.join(__dirname, 'src', entry), {});
    }),
    reduce(assign, {
      'bundle': path.join(__dirname, 'src', 'bundle'),
      'bundle-mooc': path.join(__dirname, 'src', 'bundle-mooc')
    })
  )(engines),

  output: {
    library: 'Components',
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
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
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
        'NODE_ENV': JSON.stringify('production')
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

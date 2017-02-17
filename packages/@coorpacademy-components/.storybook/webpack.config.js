const join = require('path').join;
const concat = require('lodash/fp/concat');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const hash = '[folder]__[local]';

module.exports = {
  module: {
    rules: [{
      test: /\.json$/,
      use: ['json-loader']
    }, {
      test: /\.(ttf|otf|eot|svg|woff)$/,
      use: ['file-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          minimize: true,
          modules: true,
          importLoaders: 1,
          localIdentName: `${hash}`
        }
      }, {
        loader: 'postcss-loader'
      }]
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      },
      minimize: true,
      debug: false
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

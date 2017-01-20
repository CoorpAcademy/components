const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CSSWrapper = require('@coorpacademy/css-wrapper-webpack-plugin');

const hash = '[folder]__[local]';
const componentCSS = new ExtractTextPlugin('bundle.css');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = cssScope => ({
  devtool: NODE_ENV === 'production' ? false : 'eval',

  stats: {
    children: false
  },

  output: {
    library: 'Coorponents',
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [{
      test: /\.(ttf|otf|eot|svg|woff)$/,
      loader: 'file-loader'
    },
      (() => {
        if (NODE_ENV === 'production') {
          return {
            test: /\.css$/,
            loader: componentCSS.extract({
              fallbackLoader: 'style-loader',
              loader: [{
                loader: 'css-loader',
                query: {
                  minimize: true,
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[hash]'
                }
              }, {
                loader: 'postcss-loader'
              }]
            })
          };
        }
        else {
          return {
            test: /\.css$/,
            use: [{
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash]'
              }
            }, {
              loader: 'postcss-loader'
            }]
          };
        }
      })()
    ]
  },

  plugins: (() => {
    const plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      })
    ];

    if (NODE_ENV === 'production')
      plugins.push(
        new CompressionPlugin({
          asset: '[path].gz',
          algorithm: 'gzip',
          regExp: /\.js$|\.css$/,
          threshold: 10240,
          minRatio: 0.8
        }),
        new webpack.LoaderOptionsPlugin({
          options: {
            context: __dirname
          },
          minimize: true,
          debug: false
        }),
        // new BabiliPlugin({
        //   comments: false,
        //   sourceMap: false
        // }),
        componentCSS
      );

    if (cssScope) {
      plugins.push(
        new CSSWrapper('bundle.css', cssScope)
      );
    }

    return plugins;
  })()
});

module.exports = config;

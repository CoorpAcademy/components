import {join} from 'path';
import webpack from 'webpack';
import BabiliPlugin from 'babili-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const hash = '[folder]_[local]-[hash:base64:5]';
const componentCSS = new ExtractTextPlugin({
  filename: '[name].css',
  ignoreOrder: true
});

const createConfig = (NODE_ENV = 'development', additionalPlugins = []) => ({
  devtool: NODE_ENV === 'production' ? false : 'eval',

  stats: {
    children: false,
    chunks: false, // Makes the build much quieter
    colors: true
  },

  resolveLoader: {
    modules: [join(__dirname, '../node_modules'), 'node_modules']
  },

  resolve: {
    modules: [join(__dirname, '../node_modules'), 'node_modules']
  },

  output: {
    library: 'bundle',
    filename: '[name].js',
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.(ttf|otf|eot|svg|woff)$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions']
                },
                modules: false,
                loose: true
              }
            ]
          ],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.css$/,
        loader: componentCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
                localIdentName: `${hash}`
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },

  plugins: (() => {
    const plugins = [].concat(
      [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          generateStatsFile: true,
          openAnalyzer: false
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(NODE_ENV)
          }
        }),
        componentCSS
      ],
      additionalPlugins
    );

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
        new BabiliPlugin(
          {
            evaluate: false
          },
          {
            comments: false,
            sourceMap: false
          }
        )
      );

    return plugins;
  })()
});

export default createConfig;

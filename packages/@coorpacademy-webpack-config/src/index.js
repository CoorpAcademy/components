import {join} from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const hash = '[local]-[hash:base64:5]';

const createConfig = (NODE_ENV = 'development', additionalPlugins = []) => {
  const isProduction = NODE_ENV === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval',
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
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 versions']
                  },
                  modules: false,
                  loose: true
                }
              ]
            ],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: hash
              }
            },
            'postcss-loader'
          ]
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
          new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: true
          })
        ],
        additionalPlugins
      );

      if (isProduction)
        plugins.push(
          new CompressionPlugin({
            filename: '[path].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
          })
        );

      return plugins;
    })()
  };
};

export default createConfig;

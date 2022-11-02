import {join, relative} from 'path';
import {createHash} from 'crypto';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

export const getLocalIdent = (context, localIdentName, localName) => {
  const {resourcePath} = context;
  const hash = createHash('md4');
  hash.update(relative(process.cwd(), resourcePath));
  hash.update(localName);
  return `${localName}-${hash.digest('base64').slice(0, 5)}`;
};

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
                    browsers: ['last 2 versions', 'IE >= 10']
                  },
                  modules: false,
                  loose: true
                }
              ]
            ],
            plugins: [['@babel/plugin-proposal-object-rest-spread', {loose: true}], 'lodash']
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  getLocalIdent
                }
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },

    plugins: (() => {
      const plugins = [
        ...[
          new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: true
          })
        ],
        ...(isProduction
          ? [
              new CompressionPlugin({
                filename: '[path][base].gz',
                algorithm: 'gzip',
                test: /\.js$|\.css$/,
                threshold: 10240,
                minRatio: 0.8
              })
            ]
          : []),
        ...additionalPlugins
      ];

      return plugins;
    })()
  };
};

export default createConfig;

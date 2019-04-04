const hash = '[folder]_[local]-[hash:base64:5]';
const path = require('path');
const webpack = require('webpack');

module.exports = ({config}) => {
  config.module.rules = [
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
          ],

          '@babel/preset-react',
          '@babel/preset-flow'
        ],
        plugins: [
          '@babel/transform-object-assign',
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-proposal-logical-assignment-operators',
          ['@babel/plugin-proposal-optional-chaining', {loose: false}],
          ['@babel/plugin-proposal-pipeline-operator', {proposal: 'minimal'}],
          ['@babel/plugin-proposal-nullish-coalescing-operator', {loose: false}],
          '@babel/plugin-proposal-do-expressions',
          '@babel/plugin-transform-destructuring',
          '@babel/plugin-transform-block-scoping'
        ]
      },
      exclude: [/node_modules/]
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
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
      ],
      include: path.join(__dirname, '../src')
    }
  ];

  return config;
};

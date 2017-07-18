const hash = '[folder]__[local]';
const path = require('path');
const webpack = require('webpack');
const lowerCase = require('lodash/fp/lowerCase');


module.exports = (storybookBaseConfig, configType) => {
  const NODE_ENV = lowerCase(configType);

  storybookBaseConfig.module.rules.push({
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
  });

  storybookBaseConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ];

  return storybookBaseConfig;
};

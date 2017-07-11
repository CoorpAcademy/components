const hash = '[folder]__[local]';
const path = require('path');

module.exports = {
  module: {
    rules: [
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
    ]
  }
};

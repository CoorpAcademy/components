const hash = '[folder]__[local]';
const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: `style-loader!css-loader?minimize&modules&importLoaders=1&localIdentName=${hash}!postcss-loader`,
        include: path.join(__dirname, '../src')
      }
    ]
  }
};

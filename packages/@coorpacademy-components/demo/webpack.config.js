import {join} from 'path';
import concat from 'lodash/fp/concat';
import webpack from 'webpack';
import merge from 'webpack-merge';

import webpackConfig from '../webpack.config'; 

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const sandboxConfig = ({
  output: {
    publicPath: '/dist'
  },

  entry: {
    components: addHMR(join(__dirname, 'client'))
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

export default merge.smart(
  webpackConfig,
  sandboxConfig
);

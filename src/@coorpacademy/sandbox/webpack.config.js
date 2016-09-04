import {join} from 'path';
import concat from 'lodash/fp/concat';
import webpack from 'webpack';
import merge from 'webpack-merge';

import defaultConfig from '../../../webpack.config.default';
import styleConfig from '../../../webpack.config.style';

const addHMR = entries => {
  if (process.env.NODE_ENV === 'production') return entries;
  return concat(['webpack-hot-middleware/client'], entries);
};

const sandboxConfig = ({
  output: {
    publicPath: '/dist'
  },

  entry: {
    main: addHMR(join(__dirname, 'src/client')),
    angular: addHMR(join(__dirname, 'angular/main'))
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

export default merge.smart(
  styleConfig,
  defaultConfig,
  sandboxConfig
);

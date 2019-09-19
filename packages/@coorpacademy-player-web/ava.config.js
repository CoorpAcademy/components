import config from '../../ava.config';

export default Object.assign({}, config, {
  require: [...config.require, './src/test/helpers/css-register']
});

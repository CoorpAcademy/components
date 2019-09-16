import config from '../../ava.config';

export default Object.assign({}, config, {
  require: [...config.require, '../../test/helpers/throw-warning']
});

import apiCheck from 'api-check';
import mapValues from 'lodash/fp/mapValues';

const check = apiCheck();

const spec = (propTypes) => {
  const validator = (type) => check[type];
  const p = mapValues(validator, propTypes);
  return check.shape(p);
};

const validate = (o, propTypes) => {
  check.warn(propTypes, o);
};

export {
  spec,
  validate
};

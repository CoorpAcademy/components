import apiCheck from 'api-check';

const check = apiCheck();

const spec = (types) => {
  return check.shape(types);
};

const validate = (propTypes) => (props) => {
  check.throw(propTypes, props);
};

export {
  spec,
  validate,
  check
};

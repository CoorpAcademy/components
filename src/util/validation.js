import apiCheck from 'api-check';
import isArray from 'lodash/fp/isArray';
import isEmpty from 'lodash/fp/isEmpty';
import isBoolean from 'lodash/fp/isBoolean';

const checker = apiCheck();

const createValidate = conditions => {
  const validate = (props, children) => {
    checker.throw(conditions, {props, children});
  };

  validate.conditions = conditions;
  return validate;
};

checker.none = (val, name, location) => {
  if (isBoolean(val) || !isEmpty(val) || (val && val[0] !== undefined && val[0] !== null)) {
    return checker.utils.getError(name, location, 'null or undefined');
  }
};

checker.one = (val, name, location) => {
  if (!isArray(val) || val.length !== 1) {
    return checker.utils.getError(name, location, 'an Array with one value');
  }
};

checker.oneOrMore = (val, name, location) => {
  if (!isArray(val) || val.length < 1 || val[0] === null) {
    return checker.utils.getError(name, location, 'an Array with at least one value');
  }
};

checker.many = (val, name, location) => {
  if (!isArray(val) || val.length < 2) {
    return checker.utils.getError(name, location, 'an Array with many values');
  }
};

checker.color = (val, name, location) => {
  if (val && !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val)) {
    return checker.utils.getError(name, location, '#123 or #123456');
  }
};

export {
  createValidate,
  checker
};

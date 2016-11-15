import apiCheck from 'api-check';
import isArray from 'lodash/fp/isArray';
import isEmpty from 'lodash/fp/isEmpty';
import isBoolean from 'lodash/fp/isBoolean';

const checker = apiCheck();

const createValidate = conditions => {
  const validate = (props, children) => {
    if (process.env.NODE_ENV === 'production') return;
    if (process.env.NODE_ENV === 'test') {
      checker.throw(conditions, {props, children});
    }
    else {
      checker.warn(conditions, {props, children});
    }
  };

  validate.conditions = conditions;
  return validate;
};

checker.none = (val, _name, _location) => {
  const arrayOfOne = isArray(val) && val.length === 1;
  const arrayNotEmpty = arrayOfOne && val[0] !== undefined && val[0] !== null;
  const objectNotEmpty = !isArray(val) && !isEmpty(val);
  const notEmpty = arrayNotEmpty || objectNotEmpty;
  const arrayOfMoreThanOne = isArray(val) && val.length > 1;

  if (isBoolean(val) || notEmpty || arrayOfMoreThanOne) {
    return checker.utils.getError(_name, _location, 'null or undefined');
  }
};
checker.none.type = 'checker.none';

const URL_REGEXP = /(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
checker.url = (val, _name, _location) => {
  if (!val || !URL_REGEXP.test(val)) {
    return checker.utils.getError(_name, _location, 'a URL');
  }
};
checker.url.type = 'checker.url';
apiCheck.utils.checkerHelpers.addOptional(checker.url);

checker.one = (val, _name, _location) => {
  if (!isArray(val) || val.length !== 1) {
    return checker.utils.getError(_name, _location, 'an Array with one value');
  }
};
checker.one.type = 'checker.one';
apiCheck.utils.checkerHelpers.addOptional(checker.one);

checker.oneOrMore = (val, _name, _location) => {
  if (!isArray(val) || val.length < 1 || val[0] === null) {
    return checker.utils.getError(_name, _location, 'an Array with at least one value');
  }
};
checker.oneOrMore.type = 'checker.oneOrMore';
apiCheck.utils.checkerHelpers.addOptional(checker.oneOrMore);

checker.many = (val, _name, _location) => {
  if (!isArray(val) || val.length < 2) {
    return checker.utils.getError(_name, _location, 'an Array with many values');
  }
};
checker.many.type = 'checker.many';
apiCheck.utils.checkerHelpers.addOptional(checker.many);

checker.color = (val, _name, _location) => {
  if (!val || !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val)) {
    return checker.utils.getError(_name, _location, '#123 or #123456');
  }
};
checker.color.type = 'checker.color';
apiCheck.utils.checkerHelpers.addOptional(checker.color);

export {
  createValidate,
  checker
};

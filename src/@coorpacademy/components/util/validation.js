import apiCheck from 'api-check';
import isArray from 'lodash/fp/isArray';
import isEmpty from 'lodash/fp/isEmpty';
import isBoolean from 'lodash/fp/isBoolean';

const checker = apiCheck();

const createValidate = (conditions, exception) => {
  const validate = (props, children) => {
    if (exception) {
      checker.throw(conditions, {props, children});
    }
    else {
      checker.warn(conditions, {props, children});
    }
  };

  validate.conditions = conditions;
  return validate;
};

checker.none = (val, name, location) => {
  const arrayOfOne = isArray(val) && val.length === 1;
  const arrayNotEmpty = arrayOfOne && val[0] !== undefined && val[0] !== null;
  const objectNotEmpty = !isArray(val) && !isEmpty(val);
  const notEmpty = arrayNotEmpty || objectNotEmpty;
  const arrayOfMoreThanOne = isArray(val) && val.length > 1;

  if (isBoolean(val) || notEmpty || arrayOfMoreThanOne) {
    return checker.utils.getError(name, location, 'null or undefined');
  }
};
checker.none.type = 'checker.none';

checker.url = (val, name, location) => {
  if (!val || !/(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(val)) {
    return checker.utils.getError(name, location, 'a URL');
  }
};
checker.url.type = 'checker.url';

checker.one = (val, name, location) => {
  if (!isArray(val) || val.length !== 1) {
    return checker.utils.getError(name, location, 'an Array with one value');
  }
};
checker.one.type = 'checker.one';

checker.oneOrMore = (val, name, location) => {
  if (!isArray(val) || val.length < 1 || val[0] === null) {
    return checker.utils.getError(name, location, 'an Array with at least one value');
  }
};
checker.oneOrMore.type = 'checker.oneOrMore';

checker.many = (val, name, location) => {
  if (!isArray(val) || val.length < 2) {
    return checker.utils.getError(name, location, 'an Array with many values');
  }
};
checker.many.type = 'checker.many';

checker.color = (val, name, location) => {
  if (!val || !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val)) {
    return checker.utils.getError(name, location, '#123 or #123456');
  }
};
checker.color.type = 'checker.color';
apiCheck.utils.checkerHelpers.addOptional(checker.color);

export {
  createValidate,
  checker
};

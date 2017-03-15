import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import isString from 'lodash/fp/isString';
import trim from 'lodash/fp/trim';
import replace from 'lodash/fp/replace';

const interpolation = /\{\{([\s\S]+?)\}\}/g;

const createTranslate = locales => (key, data) => {
  const template = locales[key];
  if (!isString(template)) {
    throw new Error(`${key} not found !`);
  }

  return replace(
    interpolation,
    (token, value) => {
      const _value = trim(value);
      return has(_value, data) ?
        get(_value, data) :
        token;
    },
    template
  );
};

export default createTranslate;

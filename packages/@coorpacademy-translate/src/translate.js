import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import isString from 'lodash/fp/isString';
import isNumber from 'lodash/fp/isNumber';
import trim from 'lodash/fp/trim';
import replace from 'lodash/fp/replace';

const interpolation = /\{\{([\s\S]+?)\}\}/g;

function getTemplate(locales, key, count) {
  const regularTemplate = locales[key];
  if (!isNumber(count)) {
    return regularTemplate;
  }
  if (count === 0) {
    return locales[`${key}_none`] || regularTemplate;
  }
  if (count === 1 || isNaN(count)) {
    return regularTemplate;
  }
  return locales[`${key}_plural`] || regularTemplate;
}

const createTranslate = locales => (key, data) => {
  const template = getTemplate(locales, key, get('count', data));
  if (!isString(template)) {
    throw new Error(`Key ${key} not found!`);
  }

  return replace(
    interpolation,
    (token, value) => {
      const _value = trim(value);
      return has(_value, data) ? get(_value, data) : token;
    },
    template
  );
};

export default createTranslate;

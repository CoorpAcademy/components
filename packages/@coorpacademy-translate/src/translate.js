import {get, getOr, has, isString, isNumber, trim, replace} from 'lodash/fp';

const interpolation = /\{\{([\s\S]+?)\}\}/g;

function getTemplate(locales, key, count) {
  const regularTemplate = get(key, locales);
  if (!isNumber(count)) {
    return regularTemplate;
  }
  if (count === 0) {
    return getOr(regularTemplate, `${key}_none`, locales);
  }
  if (count === 1 || Number.isNaN(count)) {
    return regularTemplate;
  }
  return getOr(regularTemplate, `${key}_plural`, locales);
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

export function mockTranslate(key, data) {
  if (data) {
    return `__${key}${JSON.stringify(data)}`;
  }
  return `__${key}`;
}

export default createTranslate;

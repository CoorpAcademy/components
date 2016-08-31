import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import trim from 'lodash/fp/trim';

const interpolation = /\{\{([\s\S]+?)\}\}/g;

const createTranslate = locales => (token, data) => {
  const template = locales[token] || token;

  return template.replace(
    interpolation,
    (token, value) => {
      const _value = trim(value);
      return has(_value, data) ?
        get(_value, data) :
        data;
    }
  );
};

export default createTranslate;

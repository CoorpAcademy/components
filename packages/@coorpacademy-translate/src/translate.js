import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import trim from 'lodash/fp/trim';
import replace from 'lodash/fp/replace';

const interpolation = /\{\{([\s\S]+?)\}\}/g;

const createTranslate = locales => (key, data) => {
  const template = locales[key] || key;

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

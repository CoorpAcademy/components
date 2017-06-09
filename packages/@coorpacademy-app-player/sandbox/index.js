import createTranslate from '@coorpacademy/translate';
import locales from '../locales/fr/player';
import {create as createApp} from '../src';
import * as Services from '../src/services';

// eslint-disable-next-line import/prefer-default-export
export const create = options => {
  const translate = (key, data) => {
    try {
      return createTranslate(locales)(key, data);
    } catch (err) {
      return createTranslate({[key]: key})(key, data);
    }
  };
  return createApp({
    services: Services,
    translate,
    skin: {
      common: {
        primary: '#007bb3'
      }
    },
    progression: '0',
    ...options
  });
};

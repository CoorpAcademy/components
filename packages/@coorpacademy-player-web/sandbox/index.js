import createTranslate from '@coorpacademy/translate';
import localesComponents from '@coorpacademy/components/locales/en/global';
import localesAppPlayer from '../locales/en/player';
import {create as createApp} from '../src';
import Services from './services';
import * as fixtures from './fixtures';

export const create = options => {
  const translate = (key, data) => {
    try {
      return createTranslate({
        ...localesAppPlayer,
        ...localesComponents
      })(key, data);
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      return createTranslate({[key]: key})(key, data);
    }
  };
  return createApp({
    services: Services(fixtures),
    translate,
    skin: {
      common: {
        primary: '#007bb3'
      }
    },
    ...options
  });
};

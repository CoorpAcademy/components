import createTranslate from '@coorpacademy/translate';
import localesComponents from '@coorpacademy/translations/components/en/global';
import localesAppPlayer from '@coorpacademy/translations/player/en/player';
import {create as createApp} from '../src';
import Services from './services';
import * as fixtures from './fixtures';

// eslint-disable-next-line import/prefer-default-export
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

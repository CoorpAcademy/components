import createTranslate from '@coorpacademy/translate';
import localesComponents from '@coorpacademy/components/locales/en/global';
import localesAppPlayer from '../locales/en/player';
import {create as createApp} from '../src';
import Services from './services';
import * as fixtures from './fixtures';

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

export const create = options => {
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

const hash = window.location.hash;
const search = window.location.search;
const pathname = window.location.pathname;
const progressionId = (/[?/#]([^/]*)$/.exec(hash || search || pathname) || [])[1] || '0';

create({
  container: document.getElementById('player'),
  progression: progressionId,
  Vimeo: window.Vimeo
});

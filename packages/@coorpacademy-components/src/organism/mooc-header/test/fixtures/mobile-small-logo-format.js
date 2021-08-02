import {defaultsDeep} from 'lodash/fp';
import Default from './logged-with-battle-notifications';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491561426926.svg',
      srcMobile: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491561428898.svg',
      href: '#'
    }
  })
};

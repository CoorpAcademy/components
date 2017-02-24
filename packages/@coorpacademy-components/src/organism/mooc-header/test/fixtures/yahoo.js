import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://static.coorpacademy.com/content/yahoo/raw/logo-1487612192411.svg',
      srcMobile: 'https://static.coorpacademy.com/content/yahoo/raw/logo-1487612192411.svg',
      href: '#'
    }
  })
};

import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://static.coorpacademy.com/content/cciloire/raw/logo-1487611211545.svg',
      srcMobile: 'https://static.coorpacademy.com/content/cciloire/raw/logo-mobile-1487700015447.svg',
      href: '#'
    }
  })
};

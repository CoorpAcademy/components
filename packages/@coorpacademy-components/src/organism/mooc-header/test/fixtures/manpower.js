import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://static.coorpacademy.com/content/manpower/raw/logo-desktop-1487611213841.png',
      srcMobile: 'https://static.coorpacademy.com/content/manpower/raw/logo-mobile-1487700015341.png',
      href: '#'
    }
  })
};

import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://chanel-ilearn.coorpacademy.com/assets/css/skin/logos/logo-ilearn.cf99f30269e.svg',
      srcMobile: 'https://chanel-ilearn.coorpacademy.com/assets/css/skin/logos/logo-ilearn.cf99f30269e.svg',
      href: '#'
    }
  })
};

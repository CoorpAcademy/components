import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://capgeminiconsulting.coorpacademy.com/assets/css/skin/logos/logo_capgemini.0549f45f053.png',
      srcMobile: 'https://capgeminiconsulting.coorpacademy.com/assets/css/skin/logos/logo_capgemini_small.74b44728532.png',
      href: '#'
    }
  })
};

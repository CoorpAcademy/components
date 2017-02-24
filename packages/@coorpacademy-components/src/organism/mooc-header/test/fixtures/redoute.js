import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://laredoutelearninglab.coorpacademy.com/assets/css/skin/logos/logoredoute.ea94ff40561.svg',
      srcMobile: 'https://laredoutelearninglab.coorpacademy.com/assets/css/skin/logos/logoredoute.ea94ff40561.svg',
      href: '#'
    }
  })
};

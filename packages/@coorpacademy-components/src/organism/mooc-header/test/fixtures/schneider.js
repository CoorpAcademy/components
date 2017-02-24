import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://schneider-electric.coorpacademy.com/assets/css/skin/logos/schneiderLogox2.18b5b4036a5.png',
      srcMobile: 'https://schneider-electric.coorpacademy.com/assets/css/skin/logos/logo_schneider_small.c87376be2a7.png',
      href: '#'
    }
  })
};

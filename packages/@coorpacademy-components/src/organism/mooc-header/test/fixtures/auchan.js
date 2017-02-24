import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://life-auchan-staging.coorpacademy.com/assets/css/skin/logos/logo.4991b966b0a.png',
      srcMobile: 'https://life-auchan-staging.coorpacademy.com/assets/css/skin/logos/logo.4991b966b0a.png',
      href: '#'
    }
  })
};

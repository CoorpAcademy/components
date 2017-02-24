import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://crisismanagement-pruniversity.coorpacademy.com/assets/css/skin/logos/pernod-crisis-logo.01c63b96f59.svg',
      srcMobile: 'https://crisismanagement-pruniversity.coorpacademy.com/assets/css/skin/logos/pernod-crisis-logo-small.bf4a6206be2.svg',
      href: '#'
    }
  })
};

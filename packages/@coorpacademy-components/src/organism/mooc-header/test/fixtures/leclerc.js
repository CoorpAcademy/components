import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://el.coorpacademy.com/assets/css/skin/logos/logo_leclerc.76ddcb76ddb.svg',
      srcMobile: 'https://el.coorpacademy.com/assets/css/skin/logos/logo_leclerc.76ddcb76ddb.svg',
      href: '#'
    }
  })
};

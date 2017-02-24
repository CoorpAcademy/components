import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://trainingcpl-adeo.coorpacademy.com/assets/css/skin/logos/logo_adeo_desktop.8c626351211.svg',
      srcMobile: 'https://trainingcpl-adeo.coorpacademy.com/assets/css/skin/logos/logo_adeo_mobile.092c877b5df.svg',
      href: '#'
    }
  })
};

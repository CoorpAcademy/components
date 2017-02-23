import defaultsDeep from 'lodash/fp/defaultsDeep';
import sliderFixtures from '../../../../molecule/slider/test/fixtures/default';
import Default from './default';

const slider = sliderFixtures.props;

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://batman-staging.coorpacademy.com/assets/css/skin/logos/logo.d2b15b6d3d2.png',
      srcMobile: 'https://batman-staging.coorpacademy.com/assets/css/skin/logos/logo-mobile.d3051ae0aef.png',
      href: '#'
    },
    slider
  })
};

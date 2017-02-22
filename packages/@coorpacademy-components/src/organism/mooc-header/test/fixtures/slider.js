import defaultsDeep from 'lodash/fp/defaultsDeep';
import sliderFixtures from '../../../../molecule/slider/test/fixtures/default';
import Default from './default';

const slider = sliderFixtures.props;

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    logo: {
      src: 'https://adidas-fr-staging.coorpacademy.com/assets/css/skin/logos/logo.7d13bba680b.svg',
      srcMobile: 'https://adidas-fr-staging.coorpacademy.com/assets/css/skin/logos/logo.7d13bba680b.svg',
      href: '#'
    },
    slider
  })
};

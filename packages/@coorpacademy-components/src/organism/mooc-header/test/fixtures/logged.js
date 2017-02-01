import defaultsDeep from 'lodash/fp/defaultsDeep';
import sliderFixtures from '../../../../molecule/slider/test/fixtures/default';
import Default from './default';

const slider = sliderFixtures.props;

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    slider,
    user: {
      picture: 'https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg',
      notifications: 5,
      link: '#'
    }
  })
};

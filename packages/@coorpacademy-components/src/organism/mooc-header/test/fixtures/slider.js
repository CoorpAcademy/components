import defaultsDeep from 'lodash/fp/defaultsDeep';
import sliderFixtures from '../../../mooc/image-slider/test/fixtures/default';
import Default from './default';

const slider = sliderFixtures.props;

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    slider
  })
};

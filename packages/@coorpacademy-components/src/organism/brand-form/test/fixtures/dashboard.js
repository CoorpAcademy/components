import Slider from '../../../../molecule/brand-form-group/test/fixtures/slider';
import Dashboard from '../../../../molecule/brand-form-group/test/fixtures/dashboard';

const {props} = Slider;
const propsDash = Dashboard.props;

export default {
  props: {
    groups: [
      props,
      propsDash
    ]
  }
};

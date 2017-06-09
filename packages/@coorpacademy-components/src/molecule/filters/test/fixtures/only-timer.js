import defaultsDeep from 'lodash/fp/defaultsDeep';
import rangeslider from '../../../../molecule/range-slider/test/fixtures/steps-force-range';
import Default from './zero';

const timer = rangeslider.props;

export default defaultsDeep(Default, {
  props: {
    timer,
    openFilters: true
  }
});

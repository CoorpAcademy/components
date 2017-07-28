import defaultsDeep from 'lodash/fp/defaultsDeep';
import rangeslider from '../../../../atom/range/test/fixtures/multi';
import Default from './zero';

const timer = rangeslider.props;

export default defaultsDeep(Default, {
  props: {
    timer: {
      ...timer,
      title: 'Time:',
      subTitle: '2 mins - 3 hours +'
    },
    openFilters: true
  }
});

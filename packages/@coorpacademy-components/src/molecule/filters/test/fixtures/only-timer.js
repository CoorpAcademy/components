import {defaultsDeep} from 'lodash/fp';
import rangeslider from '../../../../atom/range/test/fixtures/multi';
import Default from './zero';

const timer = rangeslider.props;

export default defaultsDeep(Default, {
  props: {
    filters: [
      {
        ...timer,
        type: 'range',
        fieldName: 'Time',
        title: 'Time:',
        subtitle: '2 mins - 3 hours +'
      }
    ],
    openFilters: true
  }
});

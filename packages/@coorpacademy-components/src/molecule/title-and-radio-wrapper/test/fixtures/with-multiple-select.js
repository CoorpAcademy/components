import SelectMultiple from '../../../select-multiple';
import defaultFixtures from './default';

export default {
  props: {
    ...defaultFixtures.props,
    child: {
      ...SelectMultiple.props,
      childType: 'select-multipe'
    }
  }
};

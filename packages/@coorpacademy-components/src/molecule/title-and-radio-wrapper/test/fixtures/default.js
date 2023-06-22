import RadioWithTitleDefaultFixtures from '../../../../atom/radio-with-title/test/fixtures/default';
import SelectMultipleDefaultFixtures from '../../../select-multiple/test/fixtures/default';

export default {
  props: {
    radioWithTitle: RadioWithTitleDefaultFixtures.props,
    child: {
      ...SelectMultipleDefaultFixtures.props,
      childType: 'select-multiple'
    }
  }
};

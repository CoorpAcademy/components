import omit from 'lodash/fp/omit';
import initStateFixture from '../../../review-slide/test/fixtures/initial-state';

export default {
  props: {
    ...omit('slideIndex', initStateFixture.props)
  }
};

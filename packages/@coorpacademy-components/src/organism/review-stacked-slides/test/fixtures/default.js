import omit from 'lodash/fp/omit';
import initStateFixture from '../../../review-slide/test/fixtures/default';

export default {
  props: {
    ...omit('slideIndex', initStateFixture.props)
  }
};

import Range from '../../../../../molecule/answer/test/fixtures/range';
import Default from './default';

const answer = Range.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'questionRange',
      ...answer
    }
  }
};

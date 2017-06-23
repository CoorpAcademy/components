import Answer from '../../../../../molecule/answer/test/fixtures/picker';
import Default from './default';

const answer = Answer.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'picker',
      ...answer
    }
  }
};

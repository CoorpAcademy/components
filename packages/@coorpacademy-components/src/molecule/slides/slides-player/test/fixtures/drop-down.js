import Answer from '../../../../../molecule/answer/test/fixtures/drop-down';
import Default from './default';

const answer = Answer.props;

export default {
  props: {
    ...Default.props,
    ...answer
  }
};

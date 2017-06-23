import Answer from '../../../../../molecule/answer/test/fixtures/default';
import Default from './default';

const answer = Answer.props;

export default {
  props: {
    typeClue: false,
    ...Default.props,
    answer: {
      type: 'freeText',
      ...answer
    }
  }
};

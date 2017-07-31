import Answer from '../../../../../molecule/answer/test/fixtures/picker';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    help: null,
    answerType
  }
};

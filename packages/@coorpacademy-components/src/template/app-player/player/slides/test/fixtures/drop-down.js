import Answer from '../../../../../../molecule/answer/test/fixtures/drop-down';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    ...Default.props,
    typeClue: 'answer',
    answerType
  }
};

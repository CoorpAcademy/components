import Answer from '../../../../../../molecule/answer/test/fixtures/qcm-drag';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    ...Default.props,
    typeClue: 'answer',
    help: 'test help',
    answerType
  }
};

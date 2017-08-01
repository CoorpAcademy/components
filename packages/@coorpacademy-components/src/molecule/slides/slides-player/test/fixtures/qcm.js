import Answer from '../../../../answer/test/fixtures/qcm';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    answerType
  }
};

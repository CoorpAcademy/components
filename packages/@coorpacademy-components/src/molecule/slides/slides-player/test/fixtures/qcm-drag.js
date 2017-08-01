import Answer from '../../../../answer/test/fixtures/qcm-drag';
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

import Answer from '../../../../answer/test/fixtures/template';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    typeClue: 'template',
    ...Default.props,
    answerType
  }
};

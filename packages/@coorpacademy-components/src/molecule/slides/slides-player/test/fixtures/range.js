import QuestionRange from '../../../../questions/question-range/test/fixtures/default';
import Default from './default';

const answerProps = QuestionRange.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'range',
      ...answerProps
    }
  }
};

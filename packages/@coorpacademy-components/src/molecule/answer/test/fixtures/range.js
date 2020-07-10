import QuestionRange from '../../../questions/question-range/test/fixtures/default';

const answerProps = QuestionRange.props;

export default {
  props: {
    model: {
      ...answerProps,
      type: 'slider'
    }
  }
};

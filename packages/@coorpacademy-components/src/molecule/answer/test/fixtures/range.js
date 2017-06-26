import QuestionRange from '../../../../molecule/questions/question-range/test/fixtures/default';

const answerProps = QuestionRange.props;

export default {
  props: {
    question: {
      type: 'range',
      ...answerProps
    }
  }
};

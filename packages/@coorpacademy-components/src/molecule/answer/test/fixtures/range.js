import QuestionRange from '../../../../molecule/questions/question-range/test/fixtures/default';

const answerProps = QuestionRange.props;

export default {
  props: {
    answer: {
      type: 'range',
      ...answerProps
    }
  }
};

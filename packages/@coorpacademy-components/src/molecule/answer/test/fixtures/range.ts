import QuestionRange from '../../../questions/question-range/test/fixtures/default';

import {AnswerProps} from '../../prop-types';

type Fixture = {
  props: AnswerProps;
};

const answerProps = QuestionRange.props;

const fixture: Fixture = {
  props: {
    model: {
      ...answerProps,
      type: 'slider'
    },
    help: ''
  }
};

export default fixture;

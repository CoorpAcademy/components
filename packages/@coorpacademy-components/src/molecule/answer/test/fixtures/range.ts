import QuestionRange from '../../../questions/question-range/test/fixtures/default';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
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

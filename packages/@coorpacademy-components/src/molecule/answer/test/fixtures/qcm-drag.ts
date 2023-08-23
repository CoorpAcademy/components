import QcmDrag from '../../../questions/qcm-drag/test/fixtures/default';
import {AnswerProps} from '../../prop-types';

const answerProps = QcmDrag.props;

type Fixture = {
  props: AnswerProps;
};

const fixture: Fixture = {
  props: {
    model: {
      ...answerProps,
      type: 'qcmDrag'
    },
    help: 'Help text will appear here',
    question: 'This is the question'
  }
};

export default fixture;

import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import {ReviewStackProps} from '../../prop-types';

type Fixture = {
  props: ReviewStackProps;
};

const qcmDrag = AnswerQCMDrag.props;

const fixture: Fixture = {
  props: {
    slides: {
      0: {
        position: 0,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 1',
        answerUI: qcmDrag
      },
      1: {
        position: 1,
        loading: false
      },
      2: {
        position: 2,
        loading: false
      },
      3: {
        position: 3,
        loading: false
      },
      4: {
        position: 4,
        loading: false
      }
    },
    endReview: false,
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: false
    }
  }
};

export default fixture;

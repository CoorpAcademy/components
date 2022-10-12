import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import {Props as CorrectionPopinProps} from '../../../../molecule/review-correction-popin/prop-types';
import {ReviewStackProps} from '../../prop-types';

type Fixture = {
  props: ReviewStackProps;
};

const qcmDrag = AnswerQCMDrag.props;

export const correctionPopinProps: CorrectionPopinProps = {
  klf: {
    label: 'Key learning factor',
    tooltip: 'Some tooltip info.'
  },
  information: {
    label: 'Key learning factor',
    message: 'info msg'
  },
  next: {
    label: 'Next',
    onClick: () => {
      console.log('Load next slide');
    }
  },
  type: 'right',
  resultLabel: 'CORRECT ANSWER'
};

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
    },
    correctionPopinProps
  }
};

export default fixture;

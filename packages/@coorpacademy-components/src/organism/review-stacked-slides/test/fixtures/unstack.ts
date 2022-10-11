import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import {Props as CorrectionPopinProps} from '../../../../molecule/review-correction-popin/prop-types';
import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = AnswerQCMGraphic.props;

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
    endReview: false,
    slides: {
      0: {
        position: -1,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag,
        isCorrect: true,
        showCorrectionPopin: true,
        animateCorrectionPopin: false,
        animationType: 'unstack'
      },
      1: {
        position: 0,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 2',
        answerUI: qcmGraphic
      },
      2: {
        position: 1,
        loading: false
      },
      3: {
        position: 2,
        loading: false
      },
      4: {
        position: 3,
        loading: false
      }
    },
    validateButton: {
      label: 'Validate',
      disabled: true,
      onClick: () => console.log('onValidateClick')
    },
    correctionPopinProps
  }
};

export default fixture;

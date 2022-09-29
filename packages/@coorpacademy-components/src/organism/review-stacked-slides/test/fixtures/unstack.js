import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = AnswerQCMGraphic.props;

export const correctionPopinProps = {
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

export default {
  props: {
    slides: {
      '0': {
        position: -1,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag,
        isCorrect: true,
        endReview: false,
        showCorrectionPopin: true,
        animateCorrectionPopin: false,
        animationType: 'unstack'
      },
      '1': {
        position: 0,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 2',
        answerUI: qcmGraphic
      },
      '2': {
        position: 1,
        loading: false
      },
      '3': {
        position: 2,
        loading: false
      },
      '4': {
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

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
        hidden: false,
        position: 0,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag,
        isCorrect: true,
        endReview: false,
        showCorrectionPopin: true,
        animateCorrectionPopin: false,
        animationType: 'unstack'
      },
      '1': {
        hidden: false,
        position: 1,
        questionText: 'Question 2',
        answerUI: qcmGraphic
      },
      '2': {
        hidden: false,
        position: 2
      },
      '3': {
        hidden: false,
        position: 3
      },
      '4': {
        hidden: false,
        position: 4
      }
    },
    validateButton: {
      label: 'Validate',
      disabled: true,
      onClick: () => console.log('onValidateClick')
    },
    finishedSlides: {
      '0': true
    },
    finishedSlidesSize: 1,
    correctionPopinProps
  }
};

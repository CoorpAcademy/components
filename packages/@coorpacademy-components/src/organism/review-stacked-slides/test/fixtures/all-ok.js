import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';

const qcmDrag = AnswerQCMDrag.props;

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
        hidden: true,
        position: 0,
        questionText: 'Question 1',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '1': {
        hidden: true,
        position: 1,
        questionText: 'Question 2',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '2': {
        hidden: true,
        position: 2,
        questionText: 'Question 3',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '3': {
        hidden: true,
        position: 3,
        questionText: 'Question 4',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '4': {
        hidden: false,
        position: 4,
        questionText: 'Question',
        answerUI: qcmDrag,
        isCorrect: true,
        animateCorrectionPopin: true,
        showCorrectionPopin: true
      }
    },
    endReview: false,
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: true
    },
    finishedSlides: {
      '0': true
    },
    finishedSlidesSize: 1,
    correctionPopinProps
  }
};

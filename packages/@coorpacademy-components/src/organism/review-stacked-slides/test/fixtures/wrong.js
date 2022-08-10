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
  type: 'wrong',
  resultLabel: 'WRONG ANSWER'
};

export default {
  props: {
    uiSlides: {
      '0': {
        hidden: false,
        position: 0,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag,
        isCorrect: false,
        endReview: false,
        showCorrectionPopin: true,
        animateCorrectionPopin: true
      },
      '1': {
        hidden: false,
        position: 1
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
    correctionPopinProps,
    updateSlidesOnNext: () => console.log('updateSlidesOnNext'), // à revoir
    updateStepItemsOnNext: () => console.log('updateStepItemsOnNext'), // à revoir, on devrait avoir un seul onClick dans le next
    updateReviewStatus: () => console.log('updateReviewStatus'),
    updateStepItemsOnValidation: () => console.log('updateStepItemsOnValidation'),
    updateFinishedSlides: () => console.log('updateFinishedSlides')
  }
};

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
    uiSlides: {
      '0': {
        hidden: false,
        position: 0,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag,
        isCorrect: true,
        endReview: true,
        showCorrectionPopin: true
      },
      '1': {
        hidden: true,
        questionText: 'Question 2',
        position: 1,
        endReview: true
      },
      '2': {
        hidden: true,
        questionText: 'Question 3',
        position: 2,
        endReview: true
      },
      '3': {
        hidden: true,
        questionText: 'Question 4',
        position: 3,
        endReview: true
      },
      '4': {
        questionText: 'Question 5',
        hidden: true,
        position: 4,
        endReview: true
      }
    },
    validate: {
      label: 'Validate'
    },
    finishedSlides: {
      // Incohérent pour la fixture qui fait la fin de toutes les slides
      '0': true
    },
    finishedSlidesSize: 1, // Incohérent
    correctionPopinProps,
    validateSlide: () => console.log('onValidateClick'),
    updateSlidesOnNext: () => console.log('updateSlidesOnNext'), // à revoir
    updateStepItemsOnNext: () => console.log('updateStepItemsOnNext'), // à revoir, on devrait avoir un seul onClick dans le next
    updateReviewStatus: () => console.log('updateReviewStatus'),
    updateStepItemsOnValidation: () => console.log('updateStepItemsOnValidation'),
    updateFinishedSlides: () => console.log('updateFinishedSlides')
  }
};

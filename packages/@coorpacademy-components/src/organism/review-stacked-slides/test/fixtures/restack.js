import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';

const markAnswersAsUnselected = answer => set('selected', false, answer);

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = AnswerQCMGraphic.props;
qcmGraphic.model.answers = map(markAnswersAsUnselected, AnswerQCMGraphic.props.model.answers);

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
        questionText: 'Question 1',
        answerUI: qcmDrag,
        isCorrect: false,
        endReview: false,
        showCorrectionPopin: true,
        animateCorrectionPopin: false,
        animationType: 'restack'
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
      onClick: () => console.log('onValidateClick'),
      disabled: true
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

import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';

const markAnswersAsUnselected = answer => set('selected', false, answer);

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = AnswerQCMGraphic.props;
qcmGraphic.model.answers = map(markAnswersAsUnselected, AnswerQCMGraphic.props.model.answers);

export default {
  props: {
    slideIndex: '0',
    uiSlides: {
      '0': {
        hidden: false,
        position: 0,
        questionText: 'Question 1',
        answerUI: qcmGraphic,
        showCorrectionPopin: false
      },
      '1': {
        hidden: false,
        position: 1,
        questionText: 'Question 2', // c'est pas censé d'afficher ça dans la slide derrière ?
        answerUI: qcmDrag
      },
      '2': {
        hidden: false,
        questionText: 'Question 3',
        position: 2
      },
      '3': {
        hidden: false,
        questionText: 'Question 4',
        position: 3
      },
      '4': {
        hidden: false,
        questionText: 'Question 5',
        position: 4
      }
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: true
    },
    finishedSlides: {},
    finishedSlidesSize: 0,
    correctionPopinProps: {},
    updateSlidesOnNext: () => console.log('updateSlidesOnNext'), // à revoir
    updateStepItemsOnNext: () => console.log('updateStepItemsOnNext'), // à revoir, on devrait avoir un seul onClick dans le next
    updateReviewStatus: () => console.log('updateReviewStatus'),
    updateStepItemsOnValidation: () => console.log('updateStepItemsOnValidation'),
    updateFinishedSlides: () => console.log('updateFinishedSlides')
  }
};

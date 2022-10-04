import cloneDeep from 'lodash/fp/cloneDeep';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';

const markAnswersAsUnselected = answer => set('selected', false, answer);

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = cloneDeep(AnswerQCMGraphic.props);
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
    slides: {
      0: {
        position: 4,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 1',
        answerUI: qcmDrag,
        isCorrect: false,
        endReview: false,
        showCorrectionPopin: true,
        animateCorrectionPopin: false,
        animationType: 'restack'
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
      onClick: () => console.log('onValidateClick'),
      disabled: true
    },
    correctionPopinProps
  }
};

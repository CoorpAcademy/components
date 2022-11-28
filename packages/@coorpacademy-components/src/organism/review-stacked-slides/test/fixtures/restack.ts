import cloneDeep from 'lodash/fp/cloneDeep';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import {Answer} from '../../../../molecule/answer/prop-types';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import {ReviewCorrectionPopinProps} from '../../../../molecule/review-correction-popin/prop-types';
import {ReviewStackProps} from '../../prop-types';

type Fixture = {
  props: ReviewStackProps;
};

const markAnswersAsUnselected = (answer: Answer) => set('selected', false, answer);

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = cloneDeep(AnswerQCMGraphic.props);
qcmGraphic.model.answers = map(markAnswersAsUnselected, AnswerQCMGraphic.props.model.answers);

export const correctionPopinProps: ReviewCorrectionPopinProps = {
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
    'aria-label': 'next question button',
    onClick: () => {
      console.log('Load next slide');
    }
  },
  type: 'wrong',
  resultLabel: 'WRONG ANSWER'
};

const fixture: Fixture = {
  props: {
    endReview: false,
    slides: {
      0: {
        position: -1,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 1',
        answerUI: qcmDrag,
        isCorrect: true
      },
      1: {
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 2',
        position: 2,
        answerUI: qcmGraphic,
        isCorrect: false
      },
      2: {
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 3',
        position: 3,
        answerUI: qcmDrag,
        showCorrectionPopin: true,
        animateCorrectionPopin: false,
        animationType: 'restack',
        isCorrect: false
      },
      3: {
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 4',
        answerUI: qcmGraphic,
        position: 0
      },
      4: {
        position: 1,
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

export default fixture;

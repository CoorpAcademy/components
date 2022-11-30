import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import {ReviewCorrectionPopinProps} from '../../../../molecule/review-correction-popin/prop-types';
import {ReviewStackProps} from '../../prop-types';

type Fixture = {
  props: ReviewStackProps;
};

const qcmDrag = AnswerQCMDrag.props;

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
  type: 'right',
  resultLabel: 'CORRECT ANSWER'
};

const fixture: Fixture = {
  props: {
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
        position: -1,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 2',
        answerUI: qcmDrag,
        isCorrect: true
      },
      2: {
        position: -1,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 3',
        answerUI: qcmDrag,
        isCorrect: true
      },
      3: {
        position: -1,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 4',
        answerUI: qcmDrag,
        isCorrect: true
      },
      4: {
        position: 0,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 5',
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
    correctionPopinProps
  }
};

export default fixture;

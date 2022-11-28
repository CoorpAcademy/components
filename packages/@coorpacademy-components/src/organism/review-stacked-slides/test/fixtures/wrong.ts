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
  type: 'wrong',
  resultLabel: 'WRONG ANSWER'
};

const fixture: Fixture = {
  props: {
    endReview: false,
    slides: {
      0: {
        position: 0,
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
        position: 1,
        answerUI: qcmDrag,
        isCorrect: true
      },
      2: {
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 3',
        position: 2,
        answerUI: qcmDrag,
        isCorrect: false,
        showCorrectionPopin: true,
        animateCorrectionPopin: true
      },
      3: {
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 4',
        position: 3
      },
      4: {
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 5',
        position: 4
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

export default fixture;

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
        position: 4,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 1',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '1': {
        hidden: true,
        position: 4,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 2',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '2': {
        hidden: true,
        position: 4,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 3',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '3': {
        hidden: true,
        position: 4,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 4',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '4': {
        hidden: false,
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

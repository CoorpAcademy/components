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
    slides: {
      '0': {
        hidden: true,
        position: 0,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 1',
        answerUI: qcmDrag,
        isCorrect: true
      },
      '1': {
        hidden: true,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 2',
        position: 1,
        answerUI: qcmDrag,
        isCorrect: true
      },
      '2': {
        hidden: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 3',
        position: 2,
        answerUI: qcmDrag,
        isCorrect: false,
        showCorrectionPopin: true,
        animateCorrectionPopin: true
      },
      '3': {
        hidden: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 4',
        position: 3
      },
      '4': {
        hidden: false,
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

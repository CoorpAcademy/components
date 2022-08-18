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
        hidden: false,
        position: 0,
        loading: false,
        parentContentTitle: 'From "Master Design Thinking to become more agile" course',
        questionText: 'Question 1',
        answerUI: qcmDrag
      },
      '1': {
        hidden: false,
        position: 1,
        loading: false
      },
      '2': {
        hidden: false,
        position: 2,
        loading: false
      },
      '3': {
        hidden: false,
        position: 3,
        loading: false
      },
      '4': {
        hidden: false,
        position: 4,
        loading: false
      }
    },
    endReview: false,
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: false
    },
    correctionPopinProps
  }
};

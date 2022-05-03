import headerProps from '../../../../organism/review-header/test/fixtures/no-answered-question';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = AnswerQCMGraphic.props;

const onValidateClick = lastSlide => {
  console.log('onValidateClick');
  return Promise.resolve({
    // validationResult: !lastSlide ? 'success' : 'failure',
    validationResult: 'success',
    nextSlide: {question: 'other question?', answer: qcmGraphic},
    // end: true
    end: false
  });
};

export const correctionPopinProps = {
  klf: {
    label: 'Key learning factor',
    tooltip: 'Some tooltip info.',
    onClick: () => {
      console.log('klf onClick');
    }
  },
  information: {
    label: 'Key learning factor',
    message: 'info msg'
  },
  next: {
    label: 'Next'
  },
  successLabel: 'CORRECT ANSWER',
  failureLabel: 'WRONG ANSWER'
};

export default {
  props: {
    headerProps: headerProps.props,
    reviewBackgroundAriaLabel: 'review BG Aria',
    validate: {
      label: 'Validate',
      onClick: onValidateClick
    },
    firstSlide: {
      question: 'Hey there, ..........suspense......... ready to review some questions?',
      answer: qcmDrag
    },
    correctionPopinProps
  }
};

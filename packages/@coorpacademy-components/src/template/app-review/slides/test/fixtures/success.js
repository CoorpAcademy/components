import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import congratsProps from '../../../../../organism/review-congrats/test/fixtures/default';
import AnswerQCMDrag from '../../../../../molecule/answer/test/fixtures/qcm-drag';

const qcmDrag = AnswerQCMDrag.props;

const onValidateClick = () => {
  console.log('onValidateClick');
  // return Promise.resolve({
  //   validationResult: 'success',
  //   nextSlide: {question: 'other question?', answer: qcmGraphic},
  //   endReview: false
  // });
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
      label: 'Validate'
    },
    validateSlide: onValidateClick,
    slide: {
      questionText: 'Hey there, .....suspense.... ready to select some answers?',
      answerUI: qcmDrag
    },
    correctionPopinProps,
    congratsProps: congratsProps.props
  }
};

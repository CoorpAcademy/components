import headerProps from '../../../../organism/review-header/test/fixtures/no-answered-question';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';

// const qcmDrag = AnswerQCMDrag.props;
// const qcmGraphic = AnswerQCMGraphic.props;

const qcmGraphic = AnswerQCMDrag.props;
const qcmDrag = AnswerQCMGraphic.props;

const onValidateClick = async () => {
  console.log('onValidateClick');
  await new Promise(resolve => setTimeout(resolve, 500));
  return Promise.resolve({
    validationResult: 'success',
    nextSlide: {question: 'other question?', answer: qcmGraphic},
    end: false
  });
};

const onNextSlideClick = () => {
  console.log('onNextSlideClick');
  return;
  // await new Promise(resolve => setTimeout(resolve, 2000));
  // return Promise.resolve({validationResult: 'failure', nextSlide: {}, end: false});
};

export default {
  props: {
    headerProps: headerProps.props,
    reviewBackgroundAriaLabel: 'review BG Aria',
    previousSlide: {
      title: 'previousSlide',
      answer: 'previousSlide'
    },
    actualSlide: {
      title: 'actualSlide',
      answer: 'actualSlide'
    },
    onValidateClick,
    onNextSlideClick,
    firstSlide: {
      question: 'Hey there, ..........suspense......... ready to review some questions?',
      answer: qcmDrag
    }
  }
};

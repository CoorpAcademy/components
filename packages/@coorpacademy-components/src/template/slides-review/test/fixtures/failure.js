import headerProps from '../../../../organism/review-header/test/fixtures/no-answered-question';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import {correctionPopinProps} from './success';

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = AnswerQCMGraphic.props;

const onValidateClick = () => {
  console.log('onValidateClick');
  return Promise.resolve({
    validationResult: 'failure',
    nextSlide: {question: 'Other question?', answer: qcmGraphic},
    end: false
  });
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
      question: 'Hey there! ..........dramatic suspense......... ready to answer?',
      answer: qcmDrag
    },
    correctionPopinProps
  }
};

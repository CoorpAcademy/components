import Template from '../../../../molecule/answer/test/fixtures/template';

import RightCorrectionPopin from '../../../../molecule/review-correction-popin/test/fixtures/right';

const templateProps = Template.props;
const templateContext = Template.mobileContext;

export default {
  mobileContext: templateContext,
  props: {
    slide: {
      hidden: false,
      position: 0,
      loading: false,
      parentContentTitle: 'From "Master Design Thinking to become more agile" course',
      questionText: 'Question 1',
      answerUI: templateProps,
      animateCorrectionPopin: false,
      showCorrectionPopin: true
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: true
    },
    correctionPopinProps: RightCorrectionPopin.props
  }
};

import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import RightCorrectionPopin from '../../../../molecule/review-correction-popin/test/fixtures/right';

const qcmGraphic = AnswerQCMGraphic.props;

export default {
  props: {
    slide: {
      hidden: false,
      position: 0,
      parentContentTitle: 'From "Master Design Thinking to become more agile" course',
      questionText: 'Question 1',
      answerUI: qcmGraphic,
      animateCorrectionPopin: true,
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

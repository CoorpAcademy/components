import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import WrongCorrectionPopin from '../../../../molecule/review-correction-popin/test/fixtures/wrong';

const qcmGraphic = AnswerQCMGraphic.props;

export default {
  props: {
    slide: {
      hidden: false,
      position: 0,
      parentContentTitle: 'From "Master Design Thinking to become more agile" course',
      questionText: 'Question 1',
      answerUI: qcmGraphic,
      animateCorrectionPopin: false,
      showCorrectionPopin: true
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: true
    },
    correctionPopinProps: WrongCorrectionPopin.props
  }
};

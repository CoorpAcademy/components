import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';

const qcmGraphic = AnswerQCMGraphic.props;

export default {
  props: {
    slide: {
      hidden: false,
      position: 0,
      questionText: 'Question 1',
      answerUI: qcmGraphic,
      showCorrectionPopin: false
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: false
    },
    correctionPopinProps: {}
  }
};

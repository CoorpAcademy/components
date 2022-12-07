import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import RightCorrectionPopin from '../../../../molecule/review-correction-popin/test/fixtures/right';
import {Fixture} from '../../prop-types';

const qcmGraphic = AnswerQCMGraphic.props;

const fixture: Fixture = {
  props: {
    slideIndex: '',
    num: 0,
    slide: {
      position: 0,
      loading: false,
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
    correctionPopinProps: RightCorrectionPopin.props
  }
};

export default fixture;

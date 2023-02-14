import answerUIFreetextWithAudio from '../../../../molecule/answer/test/fixtures/audio';
import type {Fixture} from '../../prop-types';

const fixture: Fixture = {
  props: {
    slideIndex: '',
    num: 0,
    slide: {
      position: 0,
      loading: false,
      parentContentTitle: 'From "Master Design Thinking to become more agile" course',
      questionText: 'Question 1',
      answerUI: answerUIFreetextWithAudio.props,
      animateCorrectionPopin: false,
      showCorrectionPopin: false
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: false
    }
  }
};

export default fixture;

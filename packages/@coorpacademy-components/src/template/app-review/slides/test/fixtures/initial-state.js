import omit from 'lodash/fp/omit';
import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import congratsProps from '../../../../../organism/review-congrats/test/fixtures/default';
import AnswerQCMDrag from '../../../../../molecule/answer/test/fixtures/qcm-drag';

const qcmDrag = AnswerQCMDrag.props;

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

export const slideNumbers = [0, 1, 2, 3, 4];

export default {
  props: {
    headerProps: omit('steps', headerProps.props),
    reviewBackgroundAriaLabel: 'review BG Aria',
    validate: {
      label: 'Validate'
    },
    slides: {
      slideNumbers,
      0: {
        hidden: false,
        position: 0,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag
      },
      1: {
        hidden: false,
        position: 1
      },
      2: {
        hidden: false,
        position: 2
      },
      3: {
        hidden: false,
        position: 3
      },
      4: {
        hidden: false,
        position: 4
      }
    },
    finishedSlides: {
      slideNumbers
    },
    stepItems: {
      slideNumbers,
      0: {
        current: true,
        value: '1',
        icon: null
      },
      1: {
        current: false,
        value: '2',
        icon: null
      },
      2: {
        current: false,
        value: '3',
        icon: null
      },
      3: {
        current: false,
        value: '4',
        icon: null
      },
      4: {
        current: false,
        value: '5',
        icon: null
      }
    },
    reviewStatus: 'ongoing',
    correctionPopinProps,
    congratsProps: congratsProps.props,
    progression: null,
    // ---------------
    // Dispatchers
    validateSlide: () => console.log('onValidateClick'),
    updateSlidesOnValidation: () => console.log('updateSlidesOnValidation'),
    updateSlidesOnNext: () => console.log('updateSlidesOnNext'),
    updateReviewStatus: () => console.log('updateReviewStatus'),
    updateStepItemsOnValidation: () => console.log('updateStepItemsOnValidation'),
    updateStepItemsOnNext: () => console.log('updateStepItemsOnNext'),
    updateFinishedSlides: () => console.log('updateFinishedSlides')
  }
};

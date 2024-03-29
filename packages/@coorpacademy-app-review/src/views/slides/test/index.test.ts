import test from 'ava';
import identity from 'lodash/fp/identity';
import omit from 'lodash/fp/omit';
import pick from 'lodash/fp/pick';
import set from 'lodash/fp/set';

import {ReviewCongratsProps} from '@coorpacademy/components/es/organism/review-congrats/prop-types';
import {CongratsCardProps} from '@coorpacademy/components/es/molecule/review-card-congrats/prop-types';

import {
  postProgressionResponse as createMockedProgression,
  progressionSlideWithPendingSlide,
  getChoicesCorrection,
  SKILL_REF_FOR_DEFAULT_SLIDES
} from '@coorpacademy/review-services-mocks';
import {mapStateToSlidesProps} from '..';
import type {StoreState} from '../../../reducers';
import {translate} from '../../../test/utils/translation.mock';
import {incorrectFreeTextPostAnswerResponse, postAnswerResponses} from '../../../test/fixtures';
import {skin} from './fixtures/skin';
import {sliderSlide} from './fixtures/slider';
import {templateSlide} from './fixtures/template';
import {freeTextSlide} from './fixtures/free-text';
import {qcmSlide} from './fixtures/qcm';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

const connectedOptions = {
  translate,
  onQuitClick: identity,
  skin,
  onStartProgression: identity,
  onEndProgression: identity
};
const connectedOptionsForMobile = {
  ...connectedOptions,
  backgroundImage: 1
};

test('should create initial props when fetched slide is not still received', t => {
  // SCENARIO : @@progression/POST_SUCCESS ok and @@slides/FETCH_REQUEST, (the slide is being fetched)
  const state: StoreState = {
    data: {
      progression: createMockedProgression(SKILL_REF_FOR_DEFAULT_SLIDES),
      slides: {
        sli_N1XACJobn: null
      },
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: '',
      navigation: ['loader', 'slides'],
      answers: {},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'no-answer',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false,
    slides: {
      '0': {
        position: 0,
        loading: true
      },
      '1': {
        position: 1,
        loading: true
      },
      '2': {
        position: 2,
        loading: true
      },
      '3': {
        position: 3,
        loading: true
      },
      '4': {
        position: 4,
        loading: true
      }
    }
  });
});

test('should create initial props when fetched slide is not still received for mobile application', t => {
  // SCENARIO : @@progression/POST_SUCCESS ok and @@slides/FETCH_REQUEST, (the slide is being fetched)
  const state: StoreState = {
    data: {
      progression: createMockedProgression(SKILL_REF_FOR_DEFAULT_SLIDES),
      slides: {
        sli_N1XACJobn: null
      },
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: '',
      navigation: ['loader', 'slides'],
      answers: {},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptionsForMobile);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'no-answer',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false,
    slides: {
      '0': {
        position: 0,
        loading: true
      },
      '1': {
        position: 1,
        loading: true
      },
      '2': {
        position: 2,
        loading: true
      },
      '3': {
        position: 3,
        loading: true
      },
      '4': {
        position: 4,
        loading: true
      }
    }
  });
  t.is(props.backgroundImage, connectedOptionsForMobile.backgroundImage);
});

test('should create props when first slide is on the state', t => {
  // SCENARIO : after @@slides/FETCH_SUCCESS
  const state: StoreState = {
    data: {
      progression: createMockedProgression(SKILL_REF_FOR_DEFAULT_SLIDES),
      slides: {
        sli_VJYjJnJhg: freeTextSlide
      },
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'no-answer',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.deepEqual(omit('answerUI', props.stack?.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.is(props.stack?.validateButton.disabled, true);
  t.deepEqual(omit('model.onChange', props.stack?.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: ''
    },
    media: undefined
  });
  t.deepEqual(omit(['0'], props.stack?.slides), {
    '1': {
      position: 1,
      loading: true
    },
    '2': {
      position: 2,
      loading: true
    },
    '3': {
      position: 3,
      loading: true
    },
    '4': {
      position: 4,
      loading: true
    }
  });
});

test('should create props when slide is on the state and user has selected answers', t => {
  // This is the case after EDIT_ANSWER and before POST_ANSWER_REQUEST
  const state: StoreState = {
    data: {
      progression: createMockedProgression(SKILL_REF_FOR_DEFAULT_SLIDES),
      slides: {
        sli_VJYjJnJhg: freeTextSlide
      },
      token: '1234',
      corrections: {},
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: true,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: true
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'no-answer',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.deepEqual(omit('answerUI', props.stack?.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: true,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.is(props.stack?.validateButton.disabled, false);
  t.deepEqual(omit('model.onChange', props.stack?.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    },
    media: undefined
  });
  t.deepEqual(omit(['0'], props.stack?.slides), {
    '1': {
      position: 1,
      loading: true
    },
    '2': {
      position: 2,
      loading: true
    },
    '3': {
      position: 3,
      loading: true
    },
    '4': {
      position: 4,
      loading: true
    }
  });
});

test('should verify props when first slide was answered correctly and next slide is not fetched yet', t => {
  // Scenario: after POST_ANSWER_SUCCESS and during SLIDE_FETCH_REQUEST for the nextContent.ref slide
  const state: StoreState = {
    data: {
      progression: postAnswerResponses.sli_VJYjJnJhg,
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: null
      },
      token: '1234',
      corrections: {},
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'right',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.deepEqual(omit('answerUI', props.stack?.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack?.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    },
    media: undefined
  });
  t.is(props.stack?.validateButton.disabled, true);
  t.deepEqual(omit(['0'], props.stack?.slides), {
    '1': {
      position: 1,
      loading: true
    },
    '2': {
      position: 2,
      loading: true
    },
    '3': {
      position: 3,
      loading: true
    },
    '4': {
      position: 4,
      loading: true
    }
  });
});

test('should verify props when first slide was answered with error and next slide is not fetched yet', t => {
  // Scenario: after POST_ANSWER_SUCCESS and during SLIDE_FETCH_REQUEST for the nextContent.ref slide
  const state: StoreState = {
    data: {
      progression: set(
        ['state', 'allAnswers', 0, 'isCorrect'],
        false,
        postAnswerResponses.sli_VJYjJnJhg
      ),
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: null
      },
      token: '1234',
      corrections: {},
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'wrong',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
});

test('should verify props when first slide was answered, next slide is fetched & correction is fetched', t => {
  // Scenario: after POST_ANSWER_SUCCESS and SLIDE_FETCH_SUCCESS for the nextContent.ref slide and CORRECTION_FETCH_SUCCESS
  const state: StoreState = {
    data: {
      progression: postAnswerResponses.sli_VJYjJnJhg,
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id)
      },
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true,
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'right',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.is(props.stack?.endReview, false);
  t.deepEqual(omit('next.onClick', props.stack?.correctionPopinProps), {
    resultLabel: '__Correct Answer',
    information: {
      label: '__KLF',
      message:
        'To negotiate your salary when being hired, you have to establish a benchmark beforehand. In other words, you should assess the salary to which you aspire by enquiring about the remuneration paid in the same industry, the same region and the same position.'
    },
    klf: undefined,
    next: {
      'aria-label': '__Next Question',
      label: '__Next Question'
    },
    type: 'right'
  });
  t.deepEqual(omit('answerUI', props.stack?.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: true,
    showCorrectionPopin: true,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack?.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    },
    media: undefined
  });
  t.deepEqual(omit('answerUI', props.stack?.slides['1']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 1,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText: 'Quels sont les 4 piliers de l’apprentissage ?'
  });
  t.is(props.stack?.validateButton.disabled, true);
  t.deepEqual(omit(['0', '1'], props.stack?.slides), {
    '2': {
      position: 2,
      loading: true
    },
    '3': {
      position: 3,
      loading: true
    },
    '4': {
      position: 4,
      loading: true
    }
  });
});

test('should verify props when first slide was answered incorrectly, next slide is fetched & correction is fetched', t => {
  // Scenario: after POST_ANSWER_SUCCESS and SLIDE_FETCH_SUCCESS for the nextContent.ref slide and CORRECTION_FETCH_SUCCESS
  const state: StoreState = {
    data: {
      progression: incorrectFreeTextPostAnswerResponse,
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id, true)
      },
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true,
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'wrong',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.is(props.stack?.endReview, false);
  t.deepEqual(omit('next.onClick', props.stack?.correctionPopinProps), {
    resultLabel: '__Wrong Answer',
    information: {
      label: '__Correct Answer',
      message: 'Benchmark'
    },
    klf: {
      label: '__KLF',
      tooltip:
        'To negotiate your salary when being hired, you have to establish a benchmark beforehand. In other words, you should assess the salary to which you aspire by enquiring about the remuneration paid in the same industry, the same region and the same position.'
    },
    next: {
      'aria-label': '__Next Question',
      label: '__Next Question'
    },
    type: 'wrong'
  });
  t.deepEqual(omit('answerUI', props.stack?.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: true,
    showCorrectionPopin: true,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack?.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    },
    media: undefined
  });
  t.deepEqual(omit('answerUI', props.stack?.slides['1']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 1,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText: 'Quels sont les 4 piliers de l’apprentissage ?'
  });
  t.is(props.stack?.validateButton.disabled, true);
  t.deepEqual(omit(['0', '1'], props.stack?.slides), {
    '2': {
      position: 2,
      loading: true
    },
    '3': {
      position: 3,
      loading: true
    },
    '4': {
      position: 4,
      loading: true
    }
  });
});

test('should verify props when currentSlideRef has changed to nextContent of progression after first answered question', t => {
  // state after click on NEXT_SLIDE
  const state: StoreState = {
    data: {
      progression: postAnswerResponses.sli_VJYjJnJhg,
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id)
      },
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: 'sli_VkSQroQnx',
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: []
      },
      positions: [-1, 0, 1, 2, 3],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: true,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: false,
        icon: 'right',
        value: '1'
      },
      {
        current: true,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });

  const propsToCheck = ['loading', 'animateCorrectionPopin', 'animationType', 'position'];
  t.deepEqual(pick(propsToCheck, props.stack?.slides[0]), {
    loading: false,
    animateCorrectionPopin: false,
    animationType: 'unstack',
    position: 0
  });
  t.deepEqual(pick(propsToCheck, props.stack?.slides[1]), {
    loading: false,
    animateCorrectionPopin: false,
    animationType: undefined,
    position: 0
  });
  t.deepEqual(pick(propsToCheck, props.stack?.slides[2]), {
    loading: true,
    position: 1
  });
  t.deepEqual(pick(propsToCheck, props.stack?.slides[3]), {
    loading: true,
    position: 2
  });
  t.deepEqual(pick(propsToCheck, props.stack?.slides[4]), {
    loading: true,
    position: 3
  });
});

test('should verify props when progression is in success, showing last correction popin', t => {
  // state after receive last POST_ANSWER_SUCCESS and before last NEXT_SLIDE
  const state: StoreState = {
    data: {
      progression: postAnswerResponses[templateSlide.universalRef],
      slides: {
        [freeTextSlide.universalRef]: freeTextSlide,
        [qcmGraphicSlide.universalRef]: qcmGraphicSlide,
        [qcmSlide.universalRef]: qcmSlide,
        [sliderSlide.universalRef]: sliderSlide,
        [templateSlide.universalRef]: templateSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id),
        [qcmGraphicSlide.universalRef]: getChoicesCorrection(qcmGraphicSlide._id),
        [qcmSlide.universalRef]: getChoicesCorrection(qcmSlide._id),
        [sliderSlide.universalRef]: getChoicesCorrection(sliderSlide._id),
        [templateSlide.universalRef]: getChoicesCorrection(templateSlide._id)
      },
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: templateSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Faux'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      positions: [-1, -1, -1, -1, 0],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: true
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.is(props.congrats, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: false,
        icon: 'right',
        value: '1'
      },
      {
        current: false,
        icon: 'right',
        value: '2'
      },
      {
        current: false,
        icon: 'right',
        value: '3'
      },
      {
        current: false,
        icon: 'right',
        value: '4'
      },
      {
        current: true,
        icon: 'right',
        value: '5'
      }
    ]
  });

  t.deepEqual(omit(['next.onClick'], props.stack?.correctionPopinProps), {
    information: {
      label: '__KLF',
      message:
        'L’apprenant peut aussi évaluer sa performance grâce à un classement disponible sur la vue leaderboard. Elle compare sa position par rapport à celle des autres apprenants de la plateforme.'
    },
    klf: undefined,
    next: {
      'aria-label': '__Continue',
      label: '__Continue'
    },
    resultLabel: '__Correct Answer',
    type: 'right'
  });
});

test('should verify props showing congrats', t => {
  const state: StoreState = {
    data: {
      progression: postAnswerResponses[templateSlide.universalRef],
      slides: {
        [freeTextSlide.universalRef]: freeTextSlide,
        [qcmGraphicSlide.universalRef]: qcmGraphicSlide,
        [qcmSlide.universalRef]: qcmSlide,
        [sliderSlide.universalRef]: sliderSlide,
        [templateSlide.universalRef]: templateSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id),
        [qcmGraphicSlide.universalRef]: getChoicesCorrection(qcmGraphicSlide._id),
        [qcmSlide.universalRef]: getChoicesCorrection(qcmSlide._id),
        [sliderSlide.universalRef]: getChoicesCorrection(sliderSlide._id),
        [templateSlide.universalRef]: getChoicesCorrection(templateSlide._id)
      },
      rank: {start: 10, end: 9},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: true,
      showQuitPopin: false,
      showButtonRevising: true,
      currentSlideRef: 'successExitNode',
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Faux'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      positions: [-1, -1, -1, -1, 0],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  const congrats = props.congrats as ReviewCongratsProps;
  t.true(props.stack?.endReview);
  t.is(congrats.title, '__Congratulations!');
  t.is(
    congrats.animationLottie.animationSrc,
    'https://static-staging.coorpacademy.com/animations/review/confetti.json'
  );
  const {cardCongratsStar, buttonRevising, buttonRevisingSkill} = congrats;
  const cardCongratsRank = congrats.cardCongratsRank as CongratsCardProps;
  t.deepEqual(
    {
      animationLottie: cardCongratsRank.animationLottie,
      rankSuffix: cardCongratsRank.rankSuffix,
      reviewCardTitle: cardCongratsRank.reviewCardTitle,
      reviewCardValue: cardCongratsRank.reviewCardValue
    },
    {
      animationLottie: {
        animationSrc: 'https://static-staging.coorpacademy.com/animations/review/rank.json',
        'aria-label': '__New rank animation',
        autoplay: true,
        'data-name': 'default-lottie',
        loop: true
      },
      rankSuffix: 'th',
      reviewCardTitle: '__You are now',
      reviewCardValue: '9'
    }
  );
  t.deepEqual(
    {
      animationLottie: cardCongratsStar.animationLottie,
      rankSuffix: cardCongratsStar.rankSuffix,
      reviewCardTitle: cardCongratsStar.reviewCardTitle,
      reviewCardValue: cardCongratsStar.reviewCardValue
    },
    {
      animationLottie: {
        animationSrc: 'https://static-staging.coorpacademy.com/animations/review/star.json',
        'aria-label': '__Acquired stars animation',
        autoplay: undefined,
        className: undefined,
        'data-name': 'default-lottie',
        loop: false,
        rendererSettings: {
          hideOnTransparent: false
        }
      },
      rankSuffix: undefined,
      reviewCardTitle: '__You have won',
      reviewCardValue: '40'
    }
  );

  t.deepEqual(omit(['onClick'], buttonRevising), {
    'aria-label': '__Continue reviewing',
    label: '__Continue reviewing',
    type: 'tertiary'
  });
  t.deepEqual(omit(['onClick'], buttonRevisingSkill), {
    'aria-label': '__Revise another skill',
    label: '__Revise another skill',
    type: 'primary'
  });
});

test('should verify props showing congrats, with only stars card, if user has no earn positions on raking, and without the button "Continue revising", if there are no more slides to review for this skill', t => {
  const state: StoreState = {
    data: {
      progression: postAnswerResponses[templateSlide.universalRef],
      slides: {
        [freeTextSlide.universalRef]: freeTextSlide,
        [qcmGraphicSlide.universalRef]: qcmGraphicSlide,
        [qcmSlide.universalRef]: qcmSlide,
        [sliderSlide.universalRef]: sliderSlide,
        [templateSlide.universalRef]: templateSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id),
        [qcmGraphicSlide.universalRef]: getChoicesCorrection(qcmGraphicSlide._id),
        [qcmSlide.universalRef]: getChoicesCorrection(qcmSlide._id),
        [sliderSlide.universalRef]: getChoicesCorrection(sliderSlide._id),
        [templateSlide.universalRef]: getChoicesCorrection(templateSlide._id)
      },
      rank: {start: 10, end: 10},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: true,
      showQuitPopin: false,
      showButtonRevising: false,
      currentSlideRef: 'successExitNode',
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Faux'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      positions: [-1, -1, -1, -1, 0],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  const congrats = props.congrats as ReviewCongratsProps;
  t.is(congrats.title, '__Congratulations!');
  t.is(
    congrats.animationLottie.animationSrc,
    'https://static-staging.coorpacademy.com/animations/review/confetti.json'
  );
  const {cardCongratsStar, buttonRevising, buttonRevisingSkill} = congrats;
  t.deepEqual(
    {
      animationLottie: cardCongratsStar.animationLottie,
      rankSuffix: cardCongratsStar.rankSuffix,
      reviewCardTitle: cardCongratsStar.reviewCardTitle,
      reviewCardValue: cardCongratsStar.reviewCardValue
    },
    {
      animationLottie: {
        animationSrc: 'https://static-staging.coorpacademy.com/animations/review/star.json',
        'aria-label': '__Acquired stars animation',
        autoplay: undefined,
        className: undefined,
        'data-name': 'default-lottie',
        loop: false,
        rendererSettings: {
          hideOnTransparent: false
        }
      },
      rankSuffix: undefined,
      reviewCardTitle: '__You have won',
      reviewCardValue: '40'
    }
  );
  const cardCongratsRank = congrats.cardCongratsRank;
  t.is(cardCongratsRank, undefined);
  t.is(buttonRevising, undefined);
  t.deepEqual(omit(['onClick'], buttonRevisingSkill), {
    'aria-label': '__Revise another skill',
    label: '__Revise another skill',
    type: 'primary'
  });
});

test('should verify props when progression has answered a current pendingSlide', t => {
  // Scenario, freeTextSlide and qcmSlide are pending slides, freeTextSlide was answered correctly, qcmSlide remains but not yet the currentSlideRef
  const state: StoreState = {
    data: {
      progression: progressionSlideWithPendingSlide(SKILL_REF_FOR_DEFAULT_SLIDES),
      slides: {
        [freeTextSlide.universalRef]: freeTextSlide,
        [qcmGraphicSlide.universalRef]: qcmGraphicSlide,
        [qcmSlide.universalRef]: qcmSlide,
        [sliderSlide.universalRef]: sliderSlide,
        [templateSlide.universalRef]: templateSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id),
        [qcmGraphicSlide.universalRef]: getChoicesCorrection(qcmGraphicSlide._id),
        [qcmSlide.universalRef]: getChoicesCorrection(qcmSlide._id, true),
        [sliderSlide.universalRef]: getChoicesCorrection(sliderSlide._id),
        [templateSlide.universalRef]: getChoicesCorrection(templateSlide._id)
      },
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: freeTextSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Vrai'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      positions: [0, -1, 1, -1, -1],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true,
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'restack',
          pendingAnswerRequest: false
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: true,
        icon: 'right',
        value: '1'
      },
      {
        current: false,
        icon: 'right',
        value: '2'
      },
      {
        current: false,
        icon: 'wrong',
        value: '3'
      },
      {
        current: false,
        icon: 'right',
        value: '4'
      },
      {
        current: false,
        icon: 'right',
        value: '5'
      }
    ]
  });
});

test('should verify props when progression still has a pendingSlide', t => {
  // Scenario, freeTextSlide and qcmSlide are pending slides, freeTextSlide was answered correctly, qcmSlide remains and it is the currentSlideRef
  const state: StoreState = {
    data: {
      progression: progressionSlideWithPendingSlide(SKILL_REF_FOR_DEFAULT_SLIDES),
      slides: {
        [freeTextSlide.universalRef]: freeTextSlide,
        [qcmGraphicSlide.universalRef]: qcmGraphicSlide,
        [qcmSlide.universalRef]: qcmSlide,
        [sliderSlide.universalRef]: sliderSlide,
        [templateSlide.universalRef]: templateSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id),
        [qcmGraphicSlide.universalRef]: getChoicesCorrection(qcmGraphicSlide._id),
        [qcmSlide.universalRef]: getChoicesCorrection(qcmSlide._id, true),
        [sliderSlide.universalRef]: getChoicesCorrection(sliderSlide._id),
        [templateSlide.universalRef]: getChoicesCorrection(templateSlide._id)
      },
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: qcmSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Vrai'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      positions: [-1, -1, 0, -1, -1],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    hiddenSteps: false,
    mode: '__Review Title',
    skillName: 'Digital Awareness',
    steps: [
      {
        current: false,
        icon: 'right',
        value: '1'
      },
      {
        current: false,
        icon: 'right',
        value: '2'
      },
      {
        current: true,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'right',
        value: '4'
      },
      {
        current: false,
        icon: 'right',
        value: '5'
      }
    ]
  });
});

test('should verify that props quitPopin is not undefined when popin is displayed', t => {
  const state: StoreState = {
    data: {
      progression: createMockedProgression(SKILL_REF_FOR_DEFAULT_SLIDES),
      slides: {
        sli_N1XACJobn: null
      },
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: '',
      navigation: ['loader', 'slides'],
      answers: {},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: true,
      showButtonRevising: false
    }
  };
  const props = mapStateToSlidesProps(state, identity, connectedOptions);
  t.not(props.quitPopin, undefined);
});

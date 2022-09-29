import test from 'ava';
import identity from 'lodash/fp/identity';
import omit from 'lodash/fp/omit';
import pick from 'lodash/fp/pick';
import set from 'lodash/fp/set';
import {
  postProgressionResponse as createdProgression,
  postAnswerResponses,
  progressionSlideWithPendingSlide,
  getChoicesCorrection,
  incorrectFreeTextPostAnswerResponse
} from '../../../test/util/services.mock';
import {mapStateToSlidesProps} from '..';
import type {StoreState} from '../../../reducers';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';
import {templateSlide} from './fixtures/template';
import {qcmSlide} from './fixtures/qcm';
import {sliderSlide} from './fixtures/slider';

test('should create initial props when fetched slide is not still received', t => {
  // SCENARIO : @@progression/POST_SUCCESS ok and @@slides/FETCH_REQUEST, (the slide is being fetched)
  const state: StoreState = {
    data: {
      progression: createdProgression,
      skills: [],
      slides: {
        sli_N1XACJobn: null
      },
      token: '1234',
      corrections: {},
      rank: {}
    },
    ui: {
      currentSlideRef: '',
      navigation: ['loader', 'slides'],
      answers: {},
      slide: {
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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

test('should create props when first slide is on the state', t => {
  // SCENARIO : after @@slides/FETCH_SUCCESS
  const state: StoreState = {
    data: {
      progression: createdProgression,
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide
      },
      token: '1234',
      corrections: {},
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {},
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: ''
    }
  });
  t.deepEqual(omit(['0'], props.stack.slides), {
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
      progression: createdProgression,
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide
      },
      token: '1234',
      corrections: {},
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      slide: {
        sli_VJYjJnJhg: {
          validateButton: true,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.is(props.stack.validateButton.disabled, false);
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.deepEqual(omit(['0'], props.stack.slides), {
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
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: null
      },
      token: '1234',
      corrections: {},
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit(['0'], props.stack.slides), {
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
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: null
      },
      token: '1234',
      corrections: {},
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id)
      },
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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
  t.is(props.stack.endReview, false);
  t.deepEqual(omit('next.onClick', props.stack.correctionPopinProps), {
    resultLabel: '_right',
    information: {
      label: '_klf',
      message:
        'To negotiate your salary when being hired, you have to establish a benchmark beforehand. In other words, you should assess the salary to which you aspire by enquiring about the remuneration paid in the same industry, the same region and the same position.'
    },
    klf: undefined,
    next: {
      ariaLabel: '_correctionNextAriaLabel',
      label: '_correctionNextLabel'
    },
    type: 'right'
  });
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: true,
    showCorrectionPopin: true,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.deepEqual(omit('answerUI', props.stack.slides['1']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 1,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText: 'Quels sont les 4 piliers de l’apprentissage ?'
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit(['0', '1'], props.stack.slides), {
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
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id, true)
      },
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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
  t.is(props.stack.endReview, false);
  t.deepEqual(omit('next.onClick', props.stack.correctionPopinProps), {
    resultLabel: '_wrong',
    information: {
      label: '_correctAnswer',
      message: 'Benchmark'
    },
    klf: {
      label: '_klf',
      tooltip:
        'To negotiate your salary when being hired, you have to establish a benchmark beforehand. In other words, you should assess the salary to which you aspire by enquiring about the remuneration paid in the same industry, the same region and the same position.'
    },
    next: {
      ariaLabel: '_correctionNextAriaLabel',
      label: '_correctionNextLabel'
    },
    type: 'wrong'
  });
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: true,
    showCorrectionPopin: true,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.deepEqual(omit('answerUI', props.stack.slides['1']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 1,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText: 'Quels sont les 4 piliers de l’apprentissage ?'
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit(['0', '1'], props.stack.slides), {
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
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id)
      },
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VkSQroQnx',
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: []
      },
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: true,
          animationType: 'unstack',
          position: 5
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          position: 0
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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

  const propsToCheck = ['animateCorrectionPopin', 'animationType', 'position'];
  t.deepEqual(pick(propsToCheck, props.stack.slides[0]), {
    animateCorrectionPopin: false,
    animationType: 'unstack',
    position: 5
  });
  t.deepEqual(pick(propsToCheck, props.stack.slides[1]), {
    animateCorrectionPopin: false,
    animationType: undefined,
    position: 0
  });
  t.deepEqual(pick(propsToCheck, props.stack.slides[2]), {
    animateCorrectionPopin: false,
    animationType: undefined,
    position: 1
  });
  /* t.deepEqual(pick(propsToCheck, props.stack.slides[3]), {
    animateCorrectionPopin: false,
    animationType: undefined,
    position: 2
  });
  t.deepEqual(pick(propsToCheck, props.stack.slides[4]), {
    animateCorrectionPopin: false,
    animationType: undefined,
    position: 3
  }); */
});

test('should verify props when progression is in success', t => {
  // state after receive last POST_ANSWER_SUCCESS and before last NEXT_SLIDE
  const state: StoreState = {
    data: {
      progression: postAnswerResponses[templateSlide.universalRef],
      skills: [],
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
      rank: {}
    },
    ui: {
      currentSlideRef: templateSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Faux'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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

  // TODO update test with props.stack validations when NEXT_SLIDE implemented
});

test('should verify props when progression has answered a current pendingSlide', t => {
  // Scenario, freeTextSlide and qcmSlide are pending slides, freeTextSlide was answered correctly, qcmSlide remains but not yet the currentSlideRef
  const state: StoreState = {
    data: {
      progression: progressionSlideWithPendingSlide,
      skills: [],
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
      rank: {}
    },
    ui: {
      currentSlideRef: freeTextSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Vrai'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'restack'
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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
      progression: progressionSlideWithPendingSlide,
      skills: [],
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
      rank: {}
    },
    ui: {
      currentSlideRef: qcmSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Vrai'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack'
        }
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity, identity);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
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

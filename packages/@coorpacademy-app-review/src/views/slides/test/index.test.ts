import test from 'ava';
import identity from 'lodash/fp/identity';
import omit from 'lodash/fp/omit';
import set from 'lodash/fp/set';
import {
  postProgressionResponse as createdProgression,
  postAnswerResponses,
  progressionSlideWithPendingSlide
} from '../../../test/util/services.mock';
import {mapStateToSlidesProps} from '..';
import {StoreState} from '../../../reducers';
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
      token: '1234'
    },
    ui: {
      currentSlideRef: '',
      navigation: ['loader', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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
        hidden: false,
        position: 0,
        loading: true
      },
      '1': {
        hidden: false,
        position: 1,
        loading: true
      },
      '2': {
        hidden: false,
        position: 2,
        loading: true
      },
      '3': {
        hidden: false,
        position: 3,
        loading: true
      },
      '4': {
        hidden: false,
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
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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
    hidden: false,
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
      hidden: false,
      position: 1,
      loading: true
    },
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
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
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: ['My value'],
      slide: {
        validateButton: true
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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
    hidden: false,
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
      hidden: false,
      position: 1,
      loading: true
    },
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
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
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: ['My value'],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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
    hidden: false,
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
      hidden: false,
      position: 1,
      loading: true
    },
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
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
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: ['My value'],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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

test('should verify props when first slide was answered and next slide is fecthed', t => {
  // Scenario: after POST_ANSWER_SUCCESS and SLIDE_FETCH_SUCCESS for the nextContent.ref slide
  const state: StoreState = {
    data: {
      progression: postAnswerResponses.sli_VJYjJnJhg,
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: ['My value'],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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
    hidden: false,
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
    hidden: false,
    position: 1,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Pour mener une bonne négociation, il ne faut ressentir aucune émotion. Vrai ou faux ?'
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit(['0', '1'], props.stack.slides), {
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
      position: 4,
      loading: true
    }
  });
});

test('should verify props when currentSlideRef has changed to nextContent of progression after first asnwered question', t => {
  // state after click on NEXT_SLIDE
  const state: StoreState = {
    data: {
      progression: postAnswerResponses.sli_VJYjJnJhg,
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VkSQroQnx',
      navigation: ['loader', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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

  // TODO update test with props.stack validations when NEXT_SLIDE implemented
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
      token: '1234'
    },
    ui: {
      currentSlideRef: templateSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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

test('should verify props when progression has answered a current pendingslide', t => {
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
      token: '1234'
    },
    ui: {
      currentSlideRef: freeTextSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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

test('should verify props when progression has still pendingslide', t => {
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
      token: '1234'
    },
    ui: {
      currentSlideRef: qcmSlide.universalRef,
      navigation: ['loader', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
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

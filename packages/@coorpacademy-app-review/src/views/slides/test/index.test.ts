import test from 'ava';
import identity from 'lodash/fp/identity';
import omit from 'lodash/fp/omit';
import {mapStateToSlidesProps} from '..';
import {StoreState} from '../../../reducers';
import {freeTextSlide} from './fixtures/free-text';

test('should create initial props when fetched slide is still not received', t => {
  const state: StoreState = {
    data: {
      progression: {
        _id: '62b1d1087aa12f00253f40ee',
        content: {
          ref: '_skillref',
          type: 'skill'
        },
        engine: {
          ref: 'review'
        },
        state: {
          allAnswers: [],
          isCorrect: true,
          nextContent: {
            ref: 'sli_N1XACJobn',
            type: 'slide'
          },
          pendingSlides: [],
          slides: [],
          step: {
            current: 1
          },
          stars: 0
        }
      },
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

test('should create initial props when the slide is on the state', t => {
  const state: StoreState = {
    data: {
      progression: {
        _id: '62b1d1087aa12f00253f40ee',
        content: {
          ref: '_skillref',
          type: 'skill'
        },
        engine: {
          ref: 'review'
        },
        state: {
          allAnswers: [],
          isCorrect: true,
          nextContent: {
            ref: 'sli_N1XACJobn',
            type: 'slide'
          },
          pendingSlides: [],
          slides: [],
          step: {
            current: 1
          },
          stars: 0
        }
      },
      skills: [],
      slides: {
        sli_N1XACJobn: freeTextSlide
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_N1XACJobn',
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
  t.true(props.stack.validateButton.disabled);
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

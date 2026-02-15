import test from 'ava';
import {mockTranslate} from '@coorpacademy/translate';
import {HIDE_TOURGUIDE, SET_TOURGUIDE_STEP} from '@coorpacademy/player-store';
import createSlideStateToProps from '../slide';
import basicSlide from './fixtures/slides/basic';

test('tourguide callbacks dispatch step change and hide', t => {
  const actions = [];
  const dispatch = action => {
    actions.push(action);
    return action;
  };
  const options = {translate: mockTranslate};
  const state = {
    data: {
      contents: {
        chapter: {
          entities: {
            '1.B2': {_id: '1.B2', isConditional: false}
          }
        },
        slide: {
          entities: {
            [basicSlide._id]: {...basicSlide, chapter_id: '1.B2'}
          }
        }
      },
      progressions: {
        entities: {
          basic: {
            engine: {ref: 'microlearning', version: '1'},
            content: {ref: '1.B2', type: 'chapter'},
            state: {
              nextContent: {ref: basicSlide._id, type: 'slide'},
              step: {current: 1},
              lives: 1,
              livesDisabled: false,
              viewedResources: []
            }
          }
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {basic: 'answer'},
      tourguide: {visible: true, step: 1}
    }
  };

  const props = createSlideStateToProps(options, {dispatch})(state);

  t.truthy(props.tourguide);
  props.tourguide.onStart();
  props.tourguide.onStepChange(2);
  props.tourguide.onFinish();
  props.tourguide.onExit();

  t.is(actions.length, 6);
  t.is(actions[0].type, 'ui/tourguide/track-started');
  t.deepEqual(actions[0].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: 'slide',
    stepNumber: 2,
    totalSteps: 4
  });
  t.is(actions[1].type, 'ui/tourguide/track-step-viewed');
  t.deepEqual(actions[1].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: 'media',
    stepNumber: 3,
    totalSteps: 4
  });
  t.is(actions[2].type, SET_TOURGUIDE_STEP);
  t.deepEqual(actions[2].payload, {step: 2});
  t.is(actions[3].type, 'ui/tourguide/track-completed');
  t.deepEqual(actions[3].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: 'slide',
    stepNumber: 2,
    totalSteps: 4
  });
  t.is(actions[4].type, 'ui/tourguide/track-dismissed');
  t.deepEqual(actions[4].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: 'slide',
    stepNumber: 2,
    totalSteps: 4
  });
  t.is(actions[5].type, HIDE_TOURGUIDE);
});

test('tourguide tracking uses null stepRef when index is out of bounds', t => {
  const actions = [];
  const dispatch = action => {
    actions.push(action);
    return action;
  };
  const options = {translate: mockTranslate};
  const state = {
    data: {
      contents: {
        chapter: {
          entities: {
            '1.B2': {_id: '1.B2', isConditional: false}
          }
        },
        slide: {
          entities: {
            [basicSlide._id]: {...basicSlide, chapter_id: '1.B2'}
          }
        }
      },
      progressions: {
        entities: {
          basic: {
            engine: {ref: 'microlearning', version: '1'},
            content: {ref: '1.B2', type: 'chapter'},
            state: {
              nextContent: {ref: basicSlide._id, type: 'slide'},
              step: {current: 1},
              lives: 1,
              livesDisabled: false,
              viewedResources: []
            }
          }
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {basic: 'answer'},
      tourguide: {visible: true, step: 99}
    }
  };

  const props = createSlideStateToProps(options, {dispatch})(state);

  t.truthy(props.tourguide);
  props.tourguide.onStart();
  props.tourguide.onStepChange(99);
  props.tourguide.onFinish();
  props.tourguide.onExit();

  t.is(actions[0].type, 'ui/tourguide/track-started');
  t.deepEqual(actions[0].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: null,
    stepNumber: null,
    totalSteps: 4
  });
  t.is(actions[1].type, 'ui/tourguide/track-step-viewed');
  t.deepEqual(actions[1].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: null,
    stepNumber: null,
    totalSteps: 4
  });
  t.is(actions[3].type, 'ui/tourguide/track-completed');
  t.deepEqual(actions[3].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: null,
    stepNumber: null,
    totalSteps: 4
  });
  t.is(actions[4].type, 'ui/tourguide/track-dismissed');
  t.deepEqual(actions[4].payload, {
    group: 'app-player-question-tour-guide',
    stepRef: null,
    stepNumber: null,
    totalSteps: 4
  });
});

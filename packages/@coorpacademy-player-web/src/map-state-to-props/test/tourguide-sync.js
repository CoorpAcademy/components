import test from 'ava';
import {SHOW_TOURGUIDE} from '@coorpacademy/player-store';
import createTourguideSync from '../../tourguide-sync';

const noop = () => {};

test('tourguide sync dispatches show only when auto-show conditions are met', t => {
  const state = {
    data: {
      contents: {
        chapter: {
          entities: {
            '1.B2': {_id: '1.B2', isConditional: false, nbSlides: 5}
          }
        },
        slide: {
          entities: {
            sli_1: {chapter_id: '1.B2'}
          }
        }
      },
      progressions: {
        entities: {
          basic: {
            engine: {ref: 'microlearning', version: '1'},
            content: {ref: '1.B2', type: 'chapter'},
            state: {
              nextContent: {ref: 'sli_1', type: 'slide'},
              step: {current: 1},
              lives: 3,
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
      tourguide: {visible: false, step: 0, hasTourGuideBeenShown: false}
    }
  };

  const actions = [];
  const getState = () => state;
  const dispatch = action => {
    actions.push(action);
    return action;
  };
  const subscribe = () => noop;
  const store = {getState, dispatch, subscribe};

  createTourguideSync({mode: 'scorm'}, store);

  t.is(actions.length, 1);
  t.is(actions[0].type, SHOW_TOURGUIDE);
});

test('tourguide sync does not dispatch again when auto-show state is unchanged', t => {
  const state = {
    data: {
      contents: {
        chapter: {
          entities: {
            '1.B2': {_id: '1.B2', isConditional: false, nbSlides: 5}
          }
        },
        slide: {
          entities: {
            sli_1: {chapter_id: '1.B2'}
          }
        }
      },
      progressions: {
        entities: {
          basic: {
            engine: {ref: 'microlearning', version: '1'},
            content: {ref: '1.B2', type: 'chapter'},
            state: {
              nextContent: {ref: 'sli_1', type: 'slide'},
              step: {current: 1},
              lives: 3,
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
      tourguide: {visible: false, step: 0, hasTourGuideBeenShown: false}
    }
  };

  const actions = [];
  const getState = () => state;
  const dispatch = action => {
    actions.push(action);
    return action;
  };
  const subscribe = listener => {
    listener();
    return noop;
  };
  const store = {getState, dispatch, subscribe};

  createTourguideSync({mode: 'scorm'}, store);

  t.is(actions.length, 1);
  t.is(actions[0].type, SHOW_TOURGUIDE);
});

test('tourguide sync uses empty tourguide state when missing', t => {
  const state = {
    data: {
      contents: {
        chapter: {
          entities: {
            '1.B2': {_id: '1.B2', isConditional: false, nbSlides: 5}
          }
        },
        slide: {
          entities: {
            sli_1: {chapter_id: '1.B2'}
          }
        }
      },
      progressions: {
        entities: {
          basic: {
            engine: {ref: 'microlearning', version: '1'},
            content: {ref: '1.B2', type: 'chapter'},
            state: {
              nextContent: {ref: 'sli_1', type: 'slide'},
              step: {current: 1},
              lives: 3,
              livesDisabled: false,
              viewedResources: []
            }
          }
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {basic: 'answer'}
    }
  };

  const actions = [];
  const getState = () => state;
  const dispatch = action => {
    actions.push(action);
    return action;
  };
  const subscribe = () => noop;
  const store = {getState, dispatch, subscribe};

  createTourguideSync({mode: 'scorm'}, store);

  t.is(actions.length, 1);
  t.is(actions[0].type, SHOW_TOURGUIDE);
});

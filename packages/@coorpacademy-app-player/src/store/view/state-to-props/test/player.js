import test from 'ava';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import fromPairs from 'lodash/fp/fromPairs';
import isFunction from 'lodash/fp/isFunction';
import identity from 'lodash/fp/identity';
import {mockTranslate} from '@coorpacademy/translate';
import createPlayer from '../player';
import {UI_SELECT_ROUTE} from '../../../actions/ui/route';
import learnerProgressionStateFixture from '../../test/fixtures/progression-learner';
import basicSlide from './fixtures/slides/basic';
import contextSlide from './fixtures/slides/with-context';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const playerProps = createPlayer(options, store);

const availableSlides = pipe(map(slide => [slide._id, slide]), fromPairs)([
  basicSlide,
  contextSlide
]);

const createProgression = slide => ({
  engine: {
    ref: 'microlearning',
    version: '1'
  },
  content: {
    ref: '1.B2',
    type: 'chapter'
  },
  state: {
    nextContent: {
      ref: slide._id,
      type: 'slide'
    },
    lives: 1,
    livesDisabled: false,
    step: {
      current: 1
    },
    viewedResources: []
  }
});

const data = {
  contents: {
    slide: {
      entities: availableSlides
    }
  },
  progressions: {
    entities: {
      basic: createProgression(basicSlide),
      context: createProgression(contextSlide)
    }
  }
};

test('should create player props for basic question and show coaches', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'},
      coaches: {availableCoaches: 1}
    }
  };

  const props = playerProps(state);

  t.is(
    props.answerType.media,
    '//static.coorpacademy.com/content/ijoinchanel/en/slides/1B2_Q6/1B2-Q6-canap-v1.jpg'
  );
  t.is(props.question, "Écrivez le mot Text dans l'input.\n");
  t.is(props.answerType.model.type, 'freeText');
  t.true(isFunction(props.answerType.model.onChange));
  t.is(props.slideContext, undefined);
  t.is(props.cta.submitValue, '__Validate');
  t.is(props.cta.disabled, true);

  t.is(props.buttons.length, 3);
  t.is(props.buttons[2].title, '__Coach');
  t.is(props.buttons[2].type, 'coach');
});

test('should enable the validate button when there is an answer', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'},
      answers: {basic: {value: ['foo']}}
    }
  };

  const props = playerProps(state);

  t.is(props.cta.disabled, false);
});

test('should disable the validate button when there the text answer has been deleted', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'},
      answers: {basic: {value: ['']}}
    }
  };

  const props = playerProps(state);

  t.is(props.cta.disabled, true);
});

test('should disable the validate button when no answer is provided', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'},
      answers: {}
    }
  };

  const props = playerProps(state);

  t.is(props.cta.disabled, true);
});

test('should disable the validate button when a previous selected answer has been unselected', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'},
      answers: {basic: {value: []}}
    }
  };

  const props = playerProps(state);

  t.is(props.cta.disabled, true);
});

test('should display context tab button if slide context is available', t => {
  t.plan(10);
  const state = {
    data,
    ui: {
      current: {progressionId: 'context'}
    }
  };

  const dispatch = action => {
    t.deepEqual(action, {
      type: UI_SELECT_ROUTE,
      payload: 'context',
      meta: {
        progressionId: 'context'
      }
    });
  };

  const props = createPlayer(options, {dispatch: action => action(dispatch, () => state)})(state);

  t.is(typeof props.slideContext, 'object');
  t.is(props.slideContext.title, 'Some context title');
  t.is(typeof props.slideContext.description, 'string');
  t.is(props.slideContext.description, contextSlide.context.description);
  t.is(props.buttons.length, 4);
  t.is(props.buttons[0].title, '__Context');
  t.is(props.buttons[0].type, 'context');
  t.false(props.buttons[0].selected);
  t.is(typeof props.buttons[0].onClick, 'function');

  props.buttons[0].onClick();
});

test('should display "Back to question" for the cta in the tabs', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'},
      route: {
        basic: 'media'
      }
    }
  };

  t.is(playerProps(state).cta.submitValue, '__Back to question');

  state.ui.route.foo = 'clue';

  t.is(typeof playerProps(state).onClickSeeClue, 'function');
  playerProps(state).onClickSeeClue();

  t.is(playerProps(state).cta.submitValue, '__Back to question');
});

test('should display "Go to question" for the context tab cta', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'},
      route: {
        basic: 'context'
      }
    }
  };

  const props = playerProps(state);
  t.is(props.cta.submitValue, '__Go to question');
});

test('should display new media notification when user has not seen any media for the current slide', t => {
  const progression = createProgression(basicSlide);
  progression.state.viewedResources = [
    {
      resources: ['1234']
    }
  ];
  const state = {
    data: {
      contents: data.contents,
      progressions: {
        entities: {
          basic: progression
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {
        basic: 'answer'
      }
    }
  };

  const props = playerProps(state);
  t.true(props.showNewMedia);
});

test('should display new media notification for the answer/undefined route when user has not seen any media', t => {
  const state = {
    data: {
      contents: data.contents,
      progressions: {
        entities: {
          basic: createProgression(basicSlide)
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {}
    }
  };

  [undefined, 'answer'].forEach(route => {
    const props = playerProps(set('ui.route.basic', route, state));
    t.true(props.showNewMedia);
  });
});

test('should not display new media notification for the other routes when user has not seen any media', t => {
  const state = {
    data: {
      contents: data.contents,
      progressions: {
        entities: {
          basic: createProgression(basicSlide)
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {}
    }
  };

  ['media', 'coach', 'clue', 'foo'].forEach(route => {
    const props = playerProps(set('ui.route.basic', route, state));
    t.false(props.showNewMedia);
  });
});

test('should not display new media notification when user has seen at least one media of the current slide', t => {
  const progression = createProgression(basicSlide);
  progression.state.viewedResources = [
    {
      ...progression.content,
      resources: [basicSlide.lessons[0].ref]
    }
  ];
  const state = {
    data: {
      contents: data.contents,
      progressions: {
        entities: {
          basic: progression
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {
        basic: 'answer'
      }
    }
  };

  const props = playerProps(state);
  t.false(props.showNewMedia);
});

test('should feed step prop in non-adaptive mode', t => {
  const state = set(
    'data.contents.level.entities.1.info.nbSlides',
    12,
    learnerProgressionStateFixture
  );
  const props = playerProps(state);

  t.deepEqual(props.step, {current: 0, total: 12});
});

test('should not feed step prop in adaptive mode', t => {
  const state = pipe(
    set('data.contents.level.entities.1.info.nbSlides', 12),
    set('data.contents.level.entities.1.isConditional', true)
  )(learnerProgressionStateFixture);

  const props = playerProps(state);

  t.falsy(props.step);
});

test('should not send an id prop in resources', t => {
  const props = playerProps(learnerProgressionStateFixture);

  t.is(get('resources.0.id', props), undefined);
});

import test from 'ava';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import fromPairs from 'lodash/fp/fromPairs';
import isFunction from 'lodash/fp/isFunction';
import identity from 'lodash/fp/identity';
import omit from 'lodash/fp/omit';
import {mockTranslate} from '@coorpacademy/translate';
import createPlayer from '../player';
import createHeader from '../header';
import {UI_SELECT_ROUTE} from '../@coorpacademy/player-store/es/actions/ui/route';
import learnerProgressionStateFixture from '../../test/fixtures/progression-learner';
import basicSlide from './fixtures/slides/basic';
import contextSlide from './fixtures/slides/with-context';
import templateSlide from './fixtures/slides/template';
import qcmSlide from './fixtures/slides/qcm';
import qcmDragSlide from './fixtures/slides/qcmDrag';
import qcmGraphicSlide from './fixtures/slides/qcm-graphic';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const createPlayerProps = createPlayer(options, store);
const createHeaderProps = createHeader(options, store);

const availableSlides = pipe(map(slide => [slide._id, slide]), fromPairs)([
  basicSlide,
  qcmSlide,
  qcmDragSlide,
  qcmGraphicSlide,
  contextSlide
]);

const createProgression = (slide, contentRef) => ({
  engine: {
    ref: 'microlearning',
    version: '1'
  },
  content: {
    ref: contentRef,
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
    chapter: {
      entities: {
        nonAdaptiveContent: {
          _id: 'nonAdaptiveContent',
          isConditional: false
        },
        adaptiveContent: {
          _id: 'adaptiveContent',
          isConditional: true
        }
      }
    },
    slide: {
      entities: availableSlides
    }
  },
  progressions: {
    entities: {
      basic: createProgression(basicSlide, 'nonAdaptiveContent'),
      qcm: createProgression(qcmSlide, 'nonAdaptiveContent'),
      qcmDrag: createProgression(qcmDragSlide, 'nonAdaptiveContent'),
      qcmGraphic: createProgression(qcmGraphicSlide, 'nonAdaptiveContent'),
      template: createProgression(templateSlide, 'nonAdaptiveContent'),
      context: createProgression(contextSlide, 'nonAdaptiveContent'),
      adaptiveBasic: createProgression(basicSlide, 'adaptiveContent'),
      adaptiveQcm: createProgression(qcmSlide, 'adaptiveContent'),
      adaptiveQcmDrag: createProgression(qcmDragSlide, 'adaptiveContent'),
      adaptiveQcmGraphic: createProgression(qcmGraphicSlide, 'adaptiveContent'),
      adaptiveContext: createProgression(contextSlide, 'adaptiveContent'),
      adaptiveTemplate: createProgression(templateSlide, 'adaptiveContent')
    }
  }
};

const isDisabledFor = (slide, isConditional, answer) => {
  const progressionId = 'progression';
  const chapterId = 'chapter';
  return createPlayerProps({
    data: {
      contents: {
        slide: {
          entities: {
            [slide._id]: {...slide, chapter_id: chapterId}
          }
        },
        chapter: {
          entities: {
            [chapterId]: {
              _id: chapterId,
              isConditional
            }
          }
        }
      },
      progressions: {
        entities: {
          [progressionId]: createProgression(slide, chapterId)
        }
      }
    },
    ui: {
      route: {[progressionId]: 'answer'},
      current: {progressionId},
      answers: {[progressionId]: {value: answer}}
    }
  }).cta.disabled;
};

test('should create player props for basic question and show coaches', t => {
  const state = {
    data,
    ui: {
      route: {basic: 'answer'},
      current: {progressionId: 'basic'},
      coaches: {availableCoaches: 1}
    }
  };

  const props = createPlayerProps(state);
  const headerProps = createHeaderProps(state);

  t.deepEqual(props.answerType.media, {
    type: 'img',
    url: '//static.coorpacademy.com/content/ijoinchanel/en/slides/1B2_Q6/1B2-Q6-canap-v1.jpg'
  });
  t.is(props.typeClue, 'answer');
  t.is(props.question, "Écrivez le mot Text dans l'input.\n");
  t.is(props.answerType.model.type, 'freeText');
  t.true(isFunction(props.answerType.model.onChange));
  t.is(props.slideContext, undefined);
  t.is(props.cta.submitValue, '__Validate');
  t.true(props.cta.disabled);

  t.is(props.buttons.length, 4);
  t.is(props.buttons[3].title, '__Coach');
  t.is(props.buttons[3].type, 'coach');
  t.deepEqual(omit('content.onClick', props.header), omit('content.onClick', headerProps));
  t.true(isFunction(props.header.content.onClick));
});
test('should enable the validate button when there is an answer', t => {
  t.true(isDisabledFor(basicSlide, false, []));
  t.false(isDisabledFor(basicSlide, false, ['foo']));
});

test('should enable the validate button when there are two answers in an non-adaptive content for all questions', t => {
  const answers = ['foo', 'bar'];

  t.false(isDisabledFor(basicSlide, false, answers));
  t.false(isDisabledFor(qcmSlide, false, answers));
  t.false(isDisabledFor(qcmGraphicSlide, false, answers));
  t.false(isDisabledFor(qcmDragSlide, false, answers));
  t.false(isDisabledFor(contextSlide, false, answers));
  t.false(isDisabledFor(templateSlide, false, answers));
});

test('should disable the validate button when there are several answers in an adaptive content for qcm questions', t => {
  t.false(isDisabledFor(basicSlide, true, ['foo', 'bar']));
  t.true(isDisabledFor(qcmSlide, true, ['foo', 'bar']));
  t.true(isDisabledFor(qcmGraphicSlide, true, ['foo', 'bar']));
  t.false(isDisabledFor(qcmDragSlide, true, ['foo', 'bar']));
  t.false(isDisabledFor(contextSlide, true, ['foo', 'bar']));
  t.false(isDisabledFor(templateSlide, true, ['foo', 'bar']));

  t.false(isDisabledFor(basicSlide, true, ['foo', 'bar', 'baz']));
  t.true(isDisabledFor(qcmSlide, true, ['foo', 'bar', 'baz']));
  t.true(isDisabledFor(qcmGraphicSlide, true, ['foo', 'bar', 'baz']));
  t.false(isDisabledFor(qcmDragSlide, true, ['foo', 'bar', 'baz']));
  t.false(isDisabledFor(contextSlide, true, ['foo', 'bar', 'baz']));
  t.false(isDisabledFor(templateSlide, true, ['foo', 'bar', 'baz']));
});

test('should disable the validate button when there the text answer has been deleted', t => {
  const state = {
    data,
    ui: {
      route: {basic: 'answer'},
      current: {progressionId: 'basic'},
      answers: {basic: {value: ['']}}
    }
  };

  const props = createPlayerProps(state);

  t.true(props.cta.disabled);
});

test('should disable the validate button when no answer is provided', t => {
  const state = {
    data,
    ui: {
      route: {basic: 'answer'},
      current: {progressionId: 'basic'},
      answers: {}
    }
  };

  const props = createPlayerProps(state);

  t.true(props.cta.disabled);
});

test('should disable the validate button when a previous selected answer has been unselected', t => {
  const state = {
    data,
    ui: {
      route: {basic: 'answer'},
      current: {progressionId: 'basic'},
      answers: {basic: {value: []}}
    }
  };

  const props = createPlayerProps(state);

  t.true(props.cta.disabled);
});

test('should disable the validate button when some answer fields are empty', t => {
  const state = {
    data,
    ui: {
      route: {template: 'answer'},
      current: {progressionId: 'template'},
      answers: {template: {value: ['', 'Test']}}
    }
  };

  const props = createPlayerProps(state);

  t.true(props.cta.disabled);
});

test('should disable the validate button when no answer has been selected by user on template question', t => {
  const state = {
    data,
    ui: {
      route: {template: 'answer'},
      current: {progressionId: 'template'}
    }
  };

  const props = createPlayerProps(state);

  t.true(props.cta.disabled);
});

test('should display context tab button if slide context is available', t => {
  t.plan(10);
  const state = {
    data,
    ui: {
      route: {context: 'answer'},
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
  t.is(props.buttons.length, 5);
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

  const props = createPlayerProps(state);

  t.is(props.cta.submitValue, '__Back to question');

  state.ui.route.foo = 'clue';

  t.is(typeof props.onClickSeeClue, 'function');
  props.onClickSeeClue();

  t.is(props.cta.submitValue, '__Back to question');
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

  const props = createPlayerProps(state);
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

  const props = createPlayerProps(state);
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

  [undefined].forEach(route => {
    const props = createPlayerProps(set('ui.route.basic', route, state));
    t.true(isEmpty(props));
  });

  ['media', 'clue', 'context', 'answer'].forEach(route => {
    const props = createPlayerProps(set('ui.route.basic', route, state));
    t.false(isEmpty(props));
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

  ['media', 'clue'].forEach(route => {
    const props = createPlayerProps(set('ui.route.basic', route, state));
    t.false(props.showNewMedia);
  });
});

test('should not display new media notification when user has seen at least one media of the current slide', t => {
  const progression = createProgression(basicSlide);
  progression.state.viewedResources = [
    {
      type: 'chapter',
      ref: basicSlide.chapter_id,
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

  const props = createPlayerProps(state);
  t.false(props.showNewMedia);
});

test('should feed step prop in non-adaptive mode', t => {
  const state = set(
    'data.contents.level.entities.1.info.nbSlides',
    12,
    learnerProgressionStateFixture
  );
  const props = createPlayerProps(state);

  t.deepEqual(props.step, {current: 0, total: 12});
});

test('should not feed step prop in adaptive mode', t => {
  const state = pipe(
    set('data.contents.level.entities.1.info.nbSlides', 12),
    set('data.contents.chapter.entities.chapter2.isConditional', true)
  )(learnerProgressionStateFixture);

  const props = createPlayerProps(state);

  t.falsy(props.step);
});

test('should not send an id prop in resources', t => {
  const props = createPlayerProps(learnerProgressionStateFixture);

  t.is(get('resources.0.id', props), undefined);
});

const createLearnerProgression = (slide, contentRef) => ({
  engine: {
    ref: 'learner',
    version: '1'
  },
  content: {
    ref: contentRef,
    type: 'level'
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

test('should allow multi answers on adaptive level if the current chapter is not adaptive', t => {
  const check = (slide, answer) => {
    const progressionId = 'progression';
    const levelId = 'level';
    const chapterId = 'chapter';
    return createPlayerProps({
      data: {
        contents: {
          slide: {
            entities: {
              [slide._id]: {...slide, chapter_id: chapterId}
            }
          },
          level: {
            entities: {
              [levelId]: {
                ref: levelId,
                chapterIds: [chapterId],
                isConditional: true
              }
            }
          },
          chapter: {
            entities: {
              [chapterId]: {
                _id: chapterId,
                isConditional: false
              }
            }
          }
        },
        progressions: {
          entities: {
            [progressionId]: createLearnerProgression(slide, levelId)
          }
        }
      },
      ui: {
        route: {[progressionId]: 'answer'},
        current: {progressionId},
        answers: {[progressionId]: {value: answer}}
      }
    }).cta.disabled;
  };

  t.true(check(basicSlide, []));
  t.true(check(qcmSlide, []));
  t.true(check(qcmGraphicSlide, []));
  t.true(check(qcmDragSlide, []));
  t.true(check(contextSlide, []));
  t.true(check(templateSlide, []));

  t.false(check(basicSlide, ['foo']));
  t.false(check(qcmSlide, ['foo']));
  t.false(check(qcmGraphicSlide, ['foo']));
  t.false(check(qcmDragSlide, ['foo']));
  t.false(check(contextSlide, ['foo']));
  t.false(check(templateSlide, ['foo']));

  t.false(check(basicSlide, ['foo', 'bar']));
  t.false(check(qcmSlide, ['foo', 'bar']));
  t.false(check(qcmGraphicSlide, ['foo', 'bar']));
  t.false(check(qcmDragSlide, ['foo', 'bar']));
  t.false(check(contextSlide, ['foo', 'bar']));
  t.false(check(templateSlide, ['foo', 'bar']));
});

import test from 'ava';
import {set, pipe, sortBy, map, omit, update, random} from 'lodash/fp';
import {
  getAnswers,
  getAnswerValues,
  isQuestionCtaDisabled,
  extractClue,
  getChoices,
  getCurrentClue,
  getCorrection,
  getCurrentContent,
  getCurrentCorrection,
  getCurrentEngine,
  isCommentSent,
  getContentInfo,
  isCurrentEngineLearner,
  isCurrentEngineMicrolearning,
  getCurrentChapter,
  getCurrentChapterId,
  getCurrentExitNode,
  getCurrentProgression,
  getCurrentProgressionId,
  getCurrentSlide,
  getDiscipline,
  getEngine,
  getEngineConfig,
  getEngineOptions,
  getLevel,
  getLives,
  getProgressionSteps,
  getPreviousSlide,
  getPrevStepContent,
  getQuestionType,
  getStartRank,
  getStepContent,
  getEndRank,
  getBestScore,
  getResourceToPlay,
  getNbSlides,
  getNextContent,
  getVideoUri,
  getRecommendations,
  getRoute,
  hasViewedAResourceAtThisStep,
  hasSeenLesson,
  getQuestionMedia,
  getContextMedia,
  isContentAdaptive,
  getVideoTracks,
  getPrevAnswer,
  getRedirectURLAfterEnd,
} from '../state-extract';

import tracksFixture from '../../fixtures/tracks';
import slideFixture from './slide';

const getStateWithContent = (
  isConditional,
  progressionState,
  nextContent = {ref: '42', type: 'slide'},
  slides = ['42']
) => {
  const nextSlide = {_id: '42', chapter_id: '1337'};
  const currentSlide = {_id: '41', chapter_id: '1337'};
  const content = {ref: '41', type: 'slide'};
  const progression = {state: {...progressionState, nextContent, content, slides}};
  const chapter = {_id: '1337', isConditional};

  return pipe(
    set('ui.current.progressionId', '12'),
    set('data.progressions.entities', {'12': progression}),
    set('data.contents.chapter.entities', {'1337': chapter}),
    set('data.contents.slide.entities', {'42': nextSlide, '41': currentSlide})
  )({});
};

test('getChoices should return undefined when no content.choices', (t) => {
  const slide = {
    _id: 'sli_00001',
    question: {
      content: {
        defaultValue: 500,
      },
    },
  };
  t.is(getChoices()(slide), undefined);
});

test('getChoices with progression not found should return choices for qcm slide', (t) => {
  const state = {
    data: {
      configs: {
        entities: {
          'learner@2': {version: '2', shuffleChoices: false},
        },
      },
      progressions: {
        entities: {},
      },
    },
    ui: {
      current: {progressionId: '1234'},
    },
  };
  const choices = [{foo: 1}, {bar: 2}];
  const slide = {
    _id: `sli_00001${random(0, 100000)}`,
    question: {
      type: 'qcm',
      content: {
        choices,
      },
    },
  };
  t.deepEqual(getChoices()(slide, state), choices);
});

function macroDoNothing(t, type, shuffleChoices = true) {
  const state = {
    data: {
      configs: {
        entities: {
          'learner@2': {version: '2', shuffleChoices},
        },
      },
      progressions: {
        entities: {
          '1234': {
            engine: {ref: 'learner', version: '2'},
          },
        },
      },
    },
    ui: {
      current: {progressionId: '1234'},
    },
  };
  const choices = [{foo: 1}, {bar: 2}];
  const slide = {
    _id: `sli_00001${random(0, 100000)}`,
    question: {
      type,
      content: {
        choices,
      },
    },
  };
  t.deepEqual(getChoices()(slide, state), choices);
}

function macroDoNothingWithShuffleChoicesEnabledOnConfig(t, type, shuffleChoices = true) {
  const state = {
    data: {
      configs: {
        entities: {
          'learner@2': {version: '2', shuffleChoices: true},
        },
      },
      progressions: {
        entities: {
          '1234': {
            engine: {ref: 'learner', version: '2'},
            engineOptions: {shuffleChoices},
          },
        },
      },
    },
    ui: {
      current: {progressionId: '1234'},
    },
  };
  const choices = [{foo: 1}, {bar: 2}];
  const slide = {
    _id: `sli_00001${random(0, 100000)}`,
    question: {
      type,
      content: {
        choices,
      },
    },
  };
  t.deepEqual(getChoices()(slide, state), choices);
}

function macroQCM(t, type) {
  const state = {
    data: {
      configs: {
        entities: {
          'learner@2': {version: '2', shuffleChoices: true},
        },
      },
      progressions: {
        entities: {
          '1234': {
            engine: {ref: 'learner', version: '2'},
            engineOptions: {},
          },
        },
      },
    },
    ui: {
      current: {progressionId: '1234'},
    },
  };
  const choices = [
    {_id: 1, foo: 1},
    {_id: 2, bar: 2},
  ];
  const slide = {
    _id: `sli_00001${random(0, 100000)}`,
    question: {
      type,
      content: {
        choices,
      },
    },
  };
  const getChoices_ = getChoices();
  const resFirstCall = getChoices_(slide, state);
  const resSecondCall = getChoices_(slide, state);
  const resThirdCall = getChoices_(slide, state);

  t.deepEqual(sortBy('_id', resFirstCall), sortBy('_id', choices));
  t.deepEqual(sortBy('_id', resSecondCall), sortBy('_id', choices));
  t.deepEqual(sortBy('_id', resThirdCall), sortBy('_id', choices));
  t.deepEqual(resFirstCall, resSecondCall);
  t.deepEqual(resFirstCall, resThirdCall);
}

function macroQCMWithShuffleChoicesEnabledOnEngineOptionsAndDisabledOnConfig(t, type) {
  const state = {
    data: {
      configs: {
        entities: {
          'learner@2': {version: '2', shuffleChoices: false},
        },
      },
      progressions: {
        entities: {
          '1234': {
            engine: {ref: 'learner', version: '2'},
            engineOptions: {shuffleChoices: true},
          },
        },
      },
    },
    ui: {
      current: {progressionId: '1234'},
    },
  };
  const choices = [
    {_id: 1, foo: 1},
    {_id: 2, bar: 2},
  ];
  const slide = {
    _id: `sli_00001${random(0, 100000)}`,
    question: {
      type,
      content: {
        choices,
      },
    },
  };
  const getChoices_ = getChoices();
  const resFirstCall = getChoices_(slide, state);
  const resSecondCall = getChoices_(slide, state);
  const resThirdCall = getChoices_(slide, state);

  t.deepEqual(sortBy('_id', resFirstCall), sortBy('_id', choices));
  t.deepEqual(sortBy('_id', resSecondCall), sortBy('_id', choices));
  t.deepEqual(sortBy('_id', resThirdCall), sortBy('_id', choices));
  t.deepEqual(resFirstCall, resSecondCall);
  t.deepEqual(resFirstCall, resThirdCall);
}
test(
  'getChoices with shuffle enabled should return choices for basic slide',
  macroDoNothing,
  'basic'
);
test(
  'getChoices with shuffle enabled should return choices for slider slide',
  macroDoNothing,
  'slider'
);
test(
  'getChoices with shuffle enabled in (config and engineOptions) should return choices for basic slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'basic'
);
test(
  'getChoices with shuffle enabled in (config and engineOptions) should return choices for slider slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'slider'
);
test(
  'getChoices with shuffle enabled should return shuffle choices for qcm slide',
  macroQCM,
  'qcm'
);
test(
  'getChoices with shuffle enabled should return shuffle choices for qcmGraphic slide',
  macroQCM,
  'qcmGraphic'
);
test(
  'getChoices with shuffle enabled should return shuffle choices for qcmDrag slide',
  macroQCM,
  'qcmDrag'
);

test(
  'getChoices with shuffle enabled on EngineOptions and disabled on Config should return shuffle choices for qcm slide',
  macroQCMWithShuffleChoicesEnabledOnEngineOptionsAndDisabledOnConfig,
  'qcm'
);
test(
  'getChoices with shuffle enabled on EngineOptions and disabled on Config should return shuffle choices for qcmGraphic slide',
  macroQCMWithShuffleChoicesEnabledOnEngineOptionsAndDisabledOnConfig,
  'qcmGraphic'
);
test(
  'getChoices with shuffle enabled on EngineOptions and disabled on Config should return shuffle choices for qcmDrag slide',
  macroQCMWithShuffleChoicesEnabledOnEngineOptionsAndDisabledOnConfig,
  'qcmDrag'
);

test(
  'getChoices with shuffle disabled should return choices for basic slide',
  macroDoNothing,
  'basic',
  false
);
test(
  'getChoices with shuffle disabled should return choices for slider slide',
  macroDoNothing,
  'slider',
  false
);
test(
  'getChoices with shuffle disabled should return choices for qcm slide',
  macroDoNothing,
  'qcm',
  false
);
test(
  'getChoices with shuffle disabled should return choices for qcmGraphic slide',
  macroDoNothing,
  'qcmGraphic',
  false
);
test(
  'getChoices with shuffle disabled should return choices for qcmDrag slide',
  macroDoNothing,
  'qcmDrag',
  false
);
test(
  'getChoices with shuffle disabled should return choices for template slide',
  macroDoNothing,
  'template',
  false
);

test(
  'getChoices with shuffle disabled in engineOptions and enabled in config should return choices for basic slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'basic',
  false
);
test(
  'getChoices with shuffle disabled in engineOptions and enabled in config should return choices for slider slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'slider',
  false
);
test(
  'getChoices with shuffle disabled in engineOptions and enabled in config should return choices for qcm slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'qcm',
  false
);
test(
  'getChoices with shuffle disabled in engineOptions and enabled in config should return choices for qcmGraphic slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'qcmGraphic',
  false
);
test(
  'getChoices with shuffle disabled in engineOptions and enabled in config should return choices for qcmDrag slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'qcmDrag',
  false
);
test(
  'getChoices with shuffle disabled in engineOptions and enabled in config should return choices for template slide',
  macroDoNothingWithShuffleChoicesEnabledOnConfig,
  'template',
  false
);

test('getChoices with shuffle enabled should return shuffle choices for template slide', (t) => {
  const state = {
    data: {
      configs: {
        entities: {
          'learner@2': {version: '2', shuffleChoices: true},
        },
      },
      progressions: {
        entities: {
          '1234': {
            engine: {ref: 'learner', version: '2'},
            engineOptions: {},
          },
        },
      },
    },
    ui: {
      current: {progressionId: '1234'},
    },
  };
  const itemsForFirstChoice = [
    {_id: 1, text: 'imaginative'},
    {_id: 2, text: 'iterative'},
    {_id: 3, text: 'agile'},
  ];
  const itemsForSecondChoice = [
    {_id: 1, text: 'iterative'},
    {_id: 2, text: 'imaginative'},
    {_id: 3, text: 'agile'},
  ];
  const choices = [
    {_id: 1, items: itemsForFirstChoice},
    {_id: 2, items: itemsForSecondChoice},
  ];
  const slide = {
    _id: 'sli_00002',
    question: {
      type: 'template',
      content: {
        choices,
      },
    },
  };

  const getChoices_ = getChoices();
  const resFirstCall = getChoices_(slide, state);
  const resSecondCall = getChoices_(slide, state);
  const resThirdCall = getChoices_(slide, state);

  t.deepEqual(map(omit('items'), resFirstCall), map(omit('items'), choices));
  t.deepEqual(map(omit('items'), resSecondCall), map(omit('items'), choices));
  t.deepEqual(map(omit('items'), resThirdCall), map(omit('items'), choices));

  t.deepEqual(
    map(update('items', sortBy('_id')), resFirstCall),
    map(update('items', sortBy('_id')), choices)
  );
  t.deepEqual(
    map(update('items', sortBy('_id')), resSecondCall),
    map(update('items', sortBy('_id')), choices)
  );
  t.deepEqual(
    map(update('items', sortBy('_id')), resThirdCall),
    map(update('items', sortBy('_id')), choices)
  );
  t.deepEqual(resFirstCall, resSecondCall);
  t.deepEqual(resFirstCall, resThirdCall);
});

test("getCurrentProgressionId should get current progression's id from state", (t) => {
  const progressionId = '1234';
  const plop = set('ui.current.progressionId', progressionId, {});
  t.is(getCurrentProgressionId(plop), progressionId);
});

test("getCurrentEngine should get current progression's engine from state", (t) => {
  const engine = {ref: 'microlearning'};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {engine}})
  )({});

  t.deepEqual(getCurrentEngine(state), engine);
});

test('getCurrentEngine should return undefined if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getCurrentEngine(state), undefined);
});

test('getCurrentChapterId should return undefined if no slide is found', (t) => {
  const progressionId = '1234';
  const state = set('ui.current.progressionId', progressionId, {});
  t.is(getCurrentChapterId(state), undefined);
});

test('getCurrentChapter should return undefined if no chapterId is found', (t) => {
  const progressionId = '1234';
  const state = set('ui.current.progressionId', progressionId, {});
  t.is(getCurrentChapter(state), undefined);
});

test("isCurrentEngineLearner should return true for engine.ref='learner'", (t) => {
  const engine = {ref: 'learner'};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {engine}})
  )({});

  t.is(isCurrentEngineLearner(state), true);
});

test('isCurrentEngineLearner should return false if no engine is found', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {}})
  )({});

  t.is(isCurrentEngineLearner(state), false);
});

test("isCurrentEngineMicrolearning should return true for engine.ref='learner'", (t) => {
  const engine = {ref: 'microlearning'};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {engine}})
  )({});

  t.is(isCurrentEngineMicrolearning(state), true);
});

test('isCurrentEngineMicrolearning should return false if no engine is found', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {}})
  )({});

  t.is(isCurrentEngineMicrolearning(state), false);
});

test('getEngineConfig should return proper engine string', (t) => {
  const engine = {ref: 'microlearning', version: '1.0.0'};
  const tag = `${engine.ref}@${engine.version}`;

  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {engine}}),
    set('data.configs.entities', {[tag]: {bar: 'plop'}})
  )({});

  t.deepEqual(getEngineConfig(state), {bar: 'plop'});
});

test('getEngineOptions should return undefined with progression not found', (t) => {
  const state = {
    ui: {
      current: {
        progressionId: '0',
      },
    },
  };

  t.is(getEngineOptions(state), undefined);
});
test('getEngineOptions should return engineOptions of current progression', (t) => {
  const engineOptions = {plop: true};

  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {engineOptions}})
  )({});

  t.deepEqual(getEngineOptions(state), engineOptions);
});

test('getEngineConfig should return extended config with engineOptions and proper engine string', (t) => {
  const engine = {ref: 'microlearning', version: '1.0.0'};
  const engineOptions = {bar: 'plip', foo: 'flop'};
  const tag = `${engine.ref}@${engine.version}`;

  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {engine, engineOptions}}),
    set('data.configs.entities', {[tag]: {bar: 'plop', plip: true}})
  )({});

  t.deepEqual(getEngineConfig(state), {bar: 'plip', foo: 'flop', plip: true});
});

test('getEngineConfig should return undefined if no engine is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getEngineConfig(state), undefined);
});

test('getLevel', (t) => {
  const state = set('data.contents.level.entities.foo', 'plop', {});
  t.is(getLevel('foo')(state), 'plop');
});

test('getDiscipline', (t) => {
  const state = set('data.contents.discipline.entities.foo', 'plop', {});
  t.is(getDiscipline('foo')(state), 'plop');
});

test('isCommentSent should return comment status for current progression', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {}}),
    set('data.comments.entities.0.isSent', 'plop')
  )({});

  t.is(isCommentSent(state), 'plop');
});

test('getRoute should return current route for current progression', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {}}),
    set('ui.route.0', 'plop')
  )({});
  t.is(getRoute(state), 'plop');
});

test('getRecommendations should return recommendations for current progression', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {}}),
    set('data.recommendations.entities.0', 'plop')
  )({});

  t.is(getRecommendations(state), 'plop');
});

test('getCurrentProgression should get current progression from state', (t) => {
  const progression = {foo: 'bar'};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentProgression(state), progression);
});

test('getAnswers should get answers from state', (t) => {
  const answers = {value: ['foo']};
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0', answers))({});

  t.is(getAnswers(state), answers);
});

test("getAnswerValues should get answer's values from state", (t) => {
  const slide = {
    question: {
      content: {
        defaultValue: 500,
      },
    },
  };
  const answers = ['foo'];
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0.value', answers))({});

  t.is(getAnswerValues(slide, state), answers);
});

test('getAnswerValues should return defaultValue from slide if available and answers are not in state', (t) => {
  const slide = {
    question: {
      content: {
        defaultValue: 500,
      },
    },
  };
  const state = set('ui.current.progressionId', '0', {});

  t.deepEqual(getAnswerValues(slide, state), ['500']);
});

test('getAnswerValues should return undefined if answers are not in state and there is no default value for the slide', (t) => {
  const slide = {};
  const state = set('ui.current.progressionId', '0', {});

  t.is(getAnswerValues(slide, state), undefined);
});

test('getAnswerValues should not use defaultValue from slide if answers is an empty array', (t) => {
  const slide = {
    question: {
      content: {
        defaultValue: 500,
      },
    },
  };
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0.value', []))({});

  t.deepEqual(getAnswerValues(slide, state), []);
});

test('isQuestionCtaDisabled should return true in case of empty answers', (t) => {
  const state = pipe(
    set('data.contents.slide.entities.42.question.type', 'qcm'),
    set('ui.answers.12.value', [])
  )(getStateWithContent(false));
  const result = isQuestionCtaDisabled(state);

  t.true(result);
});

test('isQuestionCtaDisabled should return true in case of empty slide', (t) => {
  const state = pipe(
    set('data.contents.slide.entities.42', null),
    set('ui.answers.12.value', [])
  )(getStateWithContent(false));
  const result = isQuestionCtaDisabled(state);

  t.true(result);
});

test('isQuestionCtaDisabled should return false in case of answers', (t) => {
  const answers = {value: ['foo']};
  const state = pipe(
    set('data.contents.slide.entities.42.question.type', 'qcm'),
    set('ui.answers.12.value', [answers])
  )(getStateWithContent(false));
  const result = isQuestionCtaDisabled(state);

  t.false(result);
});

test('isQuestionCtaDisabled should return false in case of adaptive with 1 answer on qcm', (t) => {
  const answers = {value: ['foo']};
  const state = pipe(
    set('data.contents.slide.entities.42.question.type', 'qcm'),
    set('ui.answers.12.value', [answers])
  )(getStateWithContent(true));
  const result = isQuestionCtaDisabled(state);

  t.false(result);
});

test('isQuestionCtaDisabled should return false in case of adaptive with 1 answer on qcmGraphic', (t) => {
  const answers = {value: ['foo']};
  const state = pipe(
    set('data.contents.slide.entities.42.question.type', 'qcmGraphic'),
    set('ui.answers.12.value', [answers])
  )(getStateWithContent(true));
  const result = isQuestionCtaDisabled(state);

  t.false(result);
});

test('isQuestionCtaDisabled should return true in case of adaptive with more than 1 answer on qcm', (t) => {
  const answers = {value: ['foo']};
  const state = pipe(
    set('data.contents.slide.entities.42.question.type', 'qcm'),
    set('ui.answers.12.value', [answers, answers])
  )(getStateWithContent(true));
  const result = isQuestionCtaDisabled(state);

  t.true(result);
});

test('isQuestionCtaDisabled should return true in case of adaptive with more than 1 answer on qcmGraphic', (t) => {
  const answers = {value: ['foo']};
  const state = pipe(
    set('data.contents.slide.entities.42.question.type', 'qcmGraphic'),
    set('ui.answers.12.value', [answers, answers])
  )(getStateWithContent(true));
  const result = isQuestionCtaDisabled(state);

  t.true(result);
});

test('isQuestionCtaDisabled should return false in case of adaptive with more than 1 answer on other question types', (t) => {
  const answers = {value: ['foo']};
  const state = pipe(
    set('data.contents.slide.entities.42.question.type', 'bar'),
    set('ui.answers.12.value', [answers, answers])
  )(getStateWithContent(true));
  const result = isQuestionCtaDisabled(state);

  t.false(result);
});

test("getQuestionType should get question's type from state", (t) => {
  const type = 'foo';
  const plop = set('question.type', type, {});
  t.is(getQuestionType(plop), type);
});

test('getCurrentSlide should get current slide from state', (t) => {
  const slide = {_id: '0'};
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.is(getCurrentSlide(state), slide);
});

test('getCurrentSlide should return undefined if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getCurrentSlide(state), undefined);
});

test('getCurrentSlide should return undefined if no progression.state is found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentSlide(state), undefined);
});

test('getCurrentExitNode should get current exit node from state', (t) => {
  const exitNode = {ref: 'successExitNode'};
  const progression = {state: {nextContent: {ref: 'successExitNode'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.exitNodes.entities', {successExitNode: exitNode})
  )({});

  t.is(getCurrentExitNode(state), exitNode);
});

test('getCurrentExitNode should return undefined if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getCurrentExitNode(state), undefined);
});

test('getCurrentExitNode should return undefined if no progression.state is found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentExitNode(state), undefined);
});

test('getPreviousSlide should get previous slide from state', (t) => {
  const slide = {_id: '0'};
  const progression = {state: {content: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0', progression),
    set('data.contents.slide.entities.0', slide)
  )({});
  t.is(getPreviousSlide(state), slide);
});

test('getPreviousSlide should return undefined if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getPreviousSlide(state), undefined);
});

test('getPreviousSlide should return undefined if no progression.state is found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getPreviousSlide(state), undefined);
});

test('getPreviousSlide should return undefined if no progression.state.content is found', (t) => {
  const progression = {state: {}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getPreviousSlide(state), undefined);
});

test('getCurrentContent should get current content from state', (t) => {
  const content = {ref: '0', type: 'slide'};
  const progression = {content};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.contents.slide.entities.0', 'bar'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentContent(state), 'bar');
});

test('getCurrentContent should return undefined if no content is found', (t) => {
  const progression = {state: {}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentContent(state), undefined);
});

test('getStepContent should get progression.state.nextContent', (t) => {
  const content = {ref: '0', type: 'slide'};
  const progression = {state: {nextContent: content}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getStepContent(state), content);
});

test('getStepContent should return undefined if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getStepContent(state), undefined);
});

test('getStepContent should return undefined if no progression.state is found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getStepContent(state), undefined);
});

test('getPrevStepContent should return undefined if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getPrevStepContent(state), undefined);
});

test('getPrevStepContent should return undefined if no progression.state is found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getPrevStepContent(state), undefined);
});

test('hasViewedAResourceAtThisStep should get progression.state.hasViewedAResourceAtThisStep', (t) => {
  const progression = {state: {hasViewedAResourceAtThisStep: 'foo'}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(hasViewedAResourceAtThisStep(state), 'foo');
});

test('hasViewedAResourceAtThisStep should return false if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(hasViewedAResourceAtThisStep(state), false);
});

test('hasViewedAResourceAtThisStep should return false if no progression.state is found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(hasViewedAResourceAtThisStep(state), false);
});

test('getCorrection should get correction from state', (t) => {
  const correction = ['Bonne réponse'];
  const state = set('data.answers.entities.foo.bar', correction)({});

  t.is(getCorrection('foo', 'bar')(state), correction);
});

test('getCorrection should not get correction from state', (t) => {
  const state = {};

  t.is(getCorrection('foo', 'bar')(state), undefined);
});

test('getCurrentCorrection should get current correction from state', (t) => {
  const progression = pipe(set('_id', 'foo'), set('state.content.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const correction = ['Bonne réponse'];
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.contents.slide.entities.${slide._id}`, slide),
    set(`data.answers.entities.${progression._id}.${slide._id}`, correction),
    set('ui.current.progressionId', 'foo')
  )({});

  t.is(getCurrentCorrection(state), correction);
});

test('getCurrentCorrection should return default correction if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.deepEqual(getCurrentCorrection(state), {
    correctAnswer: [],
    corrections: [],
  });
});

test('getCurrentCorrection should return default correction if progression is not well formed', (t) => {
  const progression = pipe(set('_id', 'foo'), set('state.content.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const correction = ['Bonne réponse'];
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.contents.slide.entities.${slide._id}`, slide),
    set(`data.answers.entities.${progression._id}.${slide._id}`, correction),
    set('ui.current.progressionId', 'foo')
  )({});

  delete state.data.progressions.entities[progression._id]._id;
  t.deepEqual(getCurrentCorrection(state), {
    correctAnswer: [],
    corrections: [],
  });
});

test('getCurrentCorrection should return default correction if no slide is found', (t) => {
  const progression = pipe(set('_id', 'foo'), set('state.content.ref', 'bar'))({});
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set('ui.current.progressionId', 'foo')
  )({});

  t.deepEqual(getCurrentCorrection(state), {
    correctAnswer: [],
    corrections: [],
  });
});

test('getCurrentCorrection should return default correction if correction is not found', (t) => {
  const progression = pipe(set('_id', 'foo'), set('state.content.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.contents.slide.entities.${slide._id}`, slide),
    set('ui.current.progressionId', 'foo')
  )({});

  t.deepEqual(getCurrentCorrection(state), {
    correctAnswer: [],
    corrections: [],
  });
});

test('extractClue should get clue from state', (t) => {
  const clue = 'Indice';
  const state = set('data.clues.entities.foo.bar', clue)({});

  t.is(extractClue('foo', 'bar')(state), clue);
});

test('getStartRank should get rank.start from state', (t) => {
  const rank = 'foo';
  const state = set('data.rank.start', rank)({});
  t.is(getStartRank(state), rank);
});

test('getEndRank should get rank.end from state', (t) => {
  const rank = 'foo';
  const state = set('data.rank.end', rank)({});
  t.is(getEndRank(state), rank);
});

test('getBestScore should get bestScore from current content', (t) => {
  const bestScore = 'foo';
  const progression = {content: {ref: 'bar', type: 'chapter'}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.chapter.entities.bar', {bestScore})
  )({});
  t.is(getBestScore(state), bestScore);
});

test('getBestScore should return undefined if no content is a SLIDE', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {
      '0': {
        content: {
          type: 'slide',
        },
      },
    })
  )({});

  const bestScore = getBestScore(state);
  return t.is(bestScore, undefined);
});

test('getBestScore should return undefined if progression.content is not found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});
  t.is(getBestScore(state), undefined);
});

test('getBestScore should return undefined if content is not found', (t) => {
  const progression = {content: {ref: 'bar', type: 'chapter'}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});
  t.is(getBestScore(state), undefined);
});

test('getCurrentClue should get current clue from state', (t) => {
  const progression = pipe(set('_id', 'foo'), set('state.nextContent.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const clue = 'Indice';
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.contents.slide.entities.${slide._id}`, slide),
    set(`data.clues.entities.${progression._id}.${slide._id}`, clue),
    set('ui.current.progressionId', 'foo')
  )({});

  t.is(getCurrentClue(state), clue);
});

test('getCurrentClue should return "" if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getCurrentClue(state), '');
});

test('getCurrentClue should return "" if no progression not well formed', (t) => {
  const state = pipe(
    set('ui.current.progressionId', 'foo'),
    set(`data.progressions.entities.foo`, {})
  )({});

  t.is(getCurrentClue(state), '');
});

test('getCurrentClue should return "" if no slide is found', (t) => {
  const progression = pipe(set('_id', 'foo'), set('state.nextContent.ref', 'bar'))({});
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set('ui.current.progressionId', 'foo')
  )({});

  t.is(getCurrentClue(state), '');
});

test('getResourceToPlay should get resources to play from state', (t) => {
  const state = set('ui.corrections.playResource', true, {});

  t.true(getResourceToPlay(state));
});

test('getEngine should extract engine from state', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0.engine', 42)
  )({});

  t.is(getEngine(state), 42);
});

test('getEngine should return undefined if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(getEngine(state), undefined);
});

test('getLives should get lives from state', (t) => {
  const state = getStateWithContent(false, {lives: 100, livesDisabled: false});
  t.deepEqual(getLives(state), {
    hide: false,
    count: 100,
  });
});

test('getLives should return null if lives are disabled for the current progression', (t) => {
  const state = getStateWithContent(false, {lives: 111, livesDisabled: true});
  t.deepEqual(getLives(state), {
    hide: true,
    count: 111,
  });
});

test('getLives should throw error if progression.state is not defined', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getLives(state).count, 0);
});

test('getProgressionSteps should get current step and total steps from state', (t) => {
  const current = 50;
  const nbSlides = 100;
  const state = pipe(
    set('data.progressions.entities.12.content', {ref: '1337', type: 'chapter'}),
    set('data.contents.chapter.entities.1337.info', {nbSlides})
  )(getStateWithContent(false, {step: {current}}));

  t.deepEqual(getProgressionSteps(state), {current, total: nbSlides});
});

test('getProgressionSteps should return 0 if current progression step is undefined', (t) => {
  const nbSlides = 100;
  const state = pipe(
    set('data.progressions.entities.12.content', {ref: '1337', type: 'chapter'}),
    set('data.contents.chapter.entities.1337.info', {nbSlides})
  )(getStateWithContent());

  t.deepEqual(getProgressionSteps(state), {current: 0, total: nbSlides});
});

test('getProgressionSteps should return null if chapter is undefined', (t) => {
  const current = 50;
  const state = pipe(
    set('data.progressions.entities.12.content', {ref: '1337', type: 'chapter'}),
    set('data.contents.chapter.entities', {})
  )(getStateWithContent(false, {step: {current}}));

  t.is(getProgressionSteps(state), null);
});

test('getProgressionSteps should return null if chapter is adaptive', (t) => {
  const current = 50;
  const nbSlides = 100;
  const state = pipe(
    set('data.progressions.entities.12.content', {ref: '1337', type: 'chapter'}),
    set('data.contents.chapter.entities.1337.info', {nbSlides})
  )(getStateWithContent(true, {step: {current}}));

  t.is(getProgressionSteps(state), null);
});

test('getNextContent should return nextChapter if microlearning progression', (t) => {
  const progression = {
    content: {ref: '1.B1', type: 'chapter'},
    state: {lives: 100, livesDisabled: true},
  };
  const state = pipe(
    set('ui.current.progressionId', 'id'),
    set('data.progressions.entities.id', progression),
    set('data.nextContent.entities.id', {ref: '1.B2'})
  )({});

  t.deepEqual(getNextContent(state), {ref: '1.B2'});
});

test('getNextContent should return nextChapter if learner progression', (t) => {
  const progression = {
    content: {ref: '1.B', type: 'level'},
    state: {lives: 100, livesDisabled: true},
  };
  const state = pipe(
    set('ui.current.progressionId', 'id'),
    set('data.progressions.entities.id', progression),
    set('data.nextContent.entities.id', {ref: '1.A'})
  )({});

  t.deepEqual(getNextContent(state), {ref: '1.A'});
});

test('getQuestionMedia should return undefined if no slide is found', (t) => {
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getQuestionMedia(state), undefined);
});

test('getQuestionMedia should return nothing if media is not provided', (t) => {
  const slide = {
    _id: '0',
    question: {},
  };
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.is(getQuestionMedia(state), undefined);
});

test('getQuestionMedia should return image media from state', (t) => {
  const slide = {
    _id: '0',
    question: {
      medias: [
        {
          type: 'img',
          src: [
            {
              url: 'http://monimage.jpg',
            },
          ],
        },
      ],
    },
  };
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.deepEqual(getQuestionMedia(state), {type: 'img', url: 'http://monimage.jpg'});
});

test('getQuestionMedia should return video media from state', (t) => {
  const slide = {
    _id: '0',
    question: {
      medias: [
        {
          type: 'video',
          src: [
            {
              mimeType: 'application/vimeo',
              videoId: '231095700',
            },
          ],
        },
      ],
    },
  };
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.deepEqual(getQuestionMedia(state), {
    type: 'video',
    mimeType: 'application/vimeo',
    videoId: '231095700',
  });
});

test('getContextMedia should return undefined if no slide is found', (t) => {
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getContextMedia(state), undefined);
});

test('getContextMedia should return nothing if media is not provided', (t) => {
  const slide = {
    _id: '0',
    context: {},
  };
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.is(getContextMedia(state), undefined);
});

test('getContextMedia should return image media from state', (t) => {
  const slide = {
    _id: '0',
    context: {
      media: {
        type: 'img',
        src: [
          {
            url: 'http://monimage.jpg',
          },
        ],
      },
    },
  };
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.deepEqual(getContextMedia(state), {type: 'img', url: 'http://monimage.jpg'});
});

test('getContextMedia should return video media from state', (t) => {
  const slide = {
    _id: '0',
    context: {
      media: {
        type: 'video',
        src: [
          {
            mimeType: 'application/vimeo',
            videoId: '231095700',
          },
        ],
      },
    },
  };
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.deepEqual(getContextMedia(state), {
    type: 'video',
    mimeType: 'application/vimeo',
    videoId: '231095700',
  });
});

test('isContentAdaptive should return if content is adaptive or not with slide in nextContent', (t) => {
  t.true(isContentAdaptive(getStateWithContent(true)));
  t.false(isContentAdaptive(getStateWithContent(false)));
});
test('isContentAdaptive should return if content is adaptive or not with unknown slide in nextContent', (t) => {
  t.false(isContentAdaptive(getStateWithContent(true, {}, {ref: 'unknownSlide', type: 'slide'})));
  t.false(isContentAdaptive(getStateWithContent(false, {}, {ref: 'unknownSlide', type: 'slide'})));
});
test('isContentAdaptive should return if content is adaptive or not with failure exitNode in nextContent', (t) => {
  t.true(
    isContentAdaptive(getStateWithContent(true, {}, {ref: 'failureExitNode', type: 'failure'}))
  );
  t.false(
    isContentAdaptive(getStateWithContent(false, {}, {ref: 'failureExitNode', type: 'failure'}))
  );
});
test('isContentAdaptive should return if content is adaptive or not with success exitNode in nextContent', (t) => {
  t.true(
    isContentAdaptive(getStateWithContent(true, {}, {ref: 'successExitNode', type: 'success'}))
  );
  t.false(
    isContentAdaptive(getStateWithContent(false, {}, {ref: 'successExitNode', type: 'success'}))
  );
});
test('isContentAdaptive should return if content is adaptive or not with extralife node  in nextContent', (t) => {
  t.true(isContentAdaptive(getStateWithContent(true, {}, {ref: 'extralife', type: 'node'})));
  t.false(isContentAdaptive(getStateWithContent(false, {}, {ref: 'extralife', type: 'node'})));
});

test('isContentAdaptive should return false if no chapterId is found', (t) => {
  const progressionId = '1234';
  const state = set('ui.current.progressionId', progressionId, {});
  t.is(isContentAdaptive(state), false);
});

test('isContentAdaptive should return if content is adaptive or not with extralife node  in nextContent and no slideList ', (t) => {
  t.false(isContentAdaptive(getStateWithContent(true, {}, {ref: 'extralife', type: 'node'}, null)));
  t.false(
    isContentAdaptive(getStateWithContent(false, {}, {ref: 'extralife', type: 'node'}, null))
  );
  t.false(isContentAdaptive(getStateWithContent(true, {}, {ref: 'extralife', type: 'node'}, [])));
  t.false(isContentAdaptive(getStateWithContent(false, {}, {ref: 'extralife', type: 'node'}, [])));
});

const setViewedResources = (lessonId, chapterId) => (state) =>
  set(
    ['data', 'progressions', 'entities', 0, 'state', 'viewedResources'],
    [
      {
        type: 'chapter',
        ref: chapterId,
        resources: [lessonId],
      },
    ],
    state
  );

test('should return false if no lesson has been seen', (t) => {
  const state = Object.freeze(slideFixture);
  const result = hasSeenLesson(state);

  return t.is(result, false);
});

test('hasSeenLesson should return false if no progression is found', (t) => {
  const state = set('ui.current.progressionId', '0')({});
  t.is(hasSeenLesson(state), false);
});

test('hasSeenLesson should return false if no progression.state is found', (t) => {
  const progression = {};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(hasSeenLesson(state), false);
});

test('should return true if slide lessons is undefined', (t) => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenLesson(
    set(['data', 'contents', 'slide', 'entities', slide._id, 'lessons'], undefined, state)
  );

  return t.is(result, true);
});

test('should return false if slide is not found', (t) => {
  const state = set('data.contents.slide', {}, Object.freeze(slideFixture));
  const result = hasSeenLesson(state);
  return t.is(result, false);
});

test('should return true if slide lessons is an empty array', (t) => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenLesson(
    set(['data', 'contents', 'slide', 'entities', slide._id, 'lessons'], [], state)
  );

  return t.is(result, true);
});

test('should return true if at least one lesson has been seen', (t) => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenLesson(setViewedResources(slide.lessons[0].ref, slide.chapter_id)(state));

  return t.is(result, true);
});

test('getNbSlides should return 0 if no contentInfo is found', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {}})
  )({});

  return t.is(getNbSlides(state), 0);
});

test('getVideoUri should return the video uri', (t) => {
  const id = 'DE3942dz9ke';
  const uri = 'www.reallyfancy.com/DE3942dz9ke.mp4';

  const state = set(
    'data.videos.entities',
    {
      [id]: {uri},
    },
    {}
  );

  const result = getVideoUri(id)(state);
  const expected = uri;

  return t.is(result, expected);
});

test('getVideoTracks should return the video tracks', (t) => {
  const id = 'DE3942dz9ke';

  const state = set(
    'data.videos.entities',
    {
      [id]: {tracks: tracksFixture},
    },
    {}
  );

  const result = getVideoTracks(id)(state);

  return t.is(result, tracksFixture);
});

test('getNbSlides should return the proper amount', (t) => {
  const content = {ref: 42, type: 'chapter', info: {nbSlides: 111}};
  const progression = {content};

  const state = pipe(
    set('ui.current.progressionId', 12),
    set('data.progressions.entities', {12: progression}),
    set('data.contents.chapter.entities', {42: content})
  )({});

  return t.is(getNbSlides(state), 111);
});

test('getContentInfo should return undefined if no content is found', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': {}})
  )({});

  const info = getContentInfo(state);
  return t.is(info, undefined);
});

test('getContentInfo should return undefined if content is a SLIDE', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {
      '0': {
        content: {
          type: 'slide',
        },
      },
    })
  )({});

  const info = getContentInfo(state);
  return t.is(info, undefined);
});

test('getContentInfo should return undefined if content is unknown', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {
      '0': {
        content: {
          type: 'foo',
        },
      },
    })
  )({});

  const info = getContentInfo(state);
  return t.is(info, undefined);
});

test('getContentInfo should return chapter.info', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {
      '0': {
        content: {
          ref: 'chap1',
          type: 'chapter',
        },
      },
    }),
    set('data.contents.chapter.entities', {
      chap1: {
        info: {
          nbSlides: 888,
        },
      },
    })
  )({});

  const info = getContentInfo(state);
  return t.deepEqual(info, {
    nbSlides: 888,
  });
});

test('should return true if slide is at previous step and at least one lesson has been seen', (t) => {
  const state = Object.freeze(slideFixture);
  const slide = getCurrentSlide(state);
  const result = hasSeenLesson(
    pipe(
      set(['data', 'progressions', 'entities', 0, 'state', 'nextContent'], {type: 'node', ref: 0}),
      set(['data', 'progressions', 'entities', 0, 'state', 'content'], {
        type: 'slide',
        ref: slide._id,
      }),
      setViewedResources(slide.lessons[0].ref, slide.chapter_id)
    )(state),
    true
  );

  return t.is(result, true);
});

test('getPrevAnswer should return the given answer of the last answered slide', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {
      '0': {
        state: {
          content: {
            ref: 'sli_1',
            type: 'slide',
          },
          allAnswers: [
            {
              slideRef: 'sli_1',
              answer: ['bar', 'foo'],
              isCorrect: false,
            },
            {
              slideRef: 'sli_1',
              answer: ['foo', 'bar'],
              isCorrect: true,
            },
          ],
        },
      },
    })
  )({});

  const result = getPrevAnswer(state);

  return t.deepEqual(result, ['foo', 'bar']);
});

test('getPrevAnswer should return empty answer if there are not an previous slide', (t) => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {
      '0': {
        state: {
          nextContent: {
            ref: 'sli_1',
            type: 'slide',
          },
          allAnswers: [],
        },
      },
    })
  )({});

  const result = getPrevAnswer(state);

  return t.deepEqual(result, []);
});

test('getRedirectURLAfterEnd should return ui.location.redirectURLAfterEnd value on state', (t) => {
  const state = set('ui.location.redirectURLAfterEnd', 'http://www.google.com', {});
  const result = getRedirectURLAfterEnd(state);

  return t.is(result, 'http://www.google.com');
});

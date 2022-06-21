// @flow
import test from 'ava';
import {omit, filter} from 'lodash/fp';

import {getConfig} from '../../config';
import type {AvailableContent, Config, State} from '../../types';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';

const config: Config = getConfig({ref: 'learner', version: '1'});
const partialAction = (state: State): PartialAnswerAction => ({
  type: 'answer',
  payload: {
    answer: [],
    content: state.nextContent,
    godMode: true
  }
});
const rulesFor1A1 = [
  {
    source: {
      type: 'slide',
      ref: 'i do not exist'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.3'
    },
    instructions: [{field: 'foo', type: 'set', value: 'highest_priority'}],
    conditions: [],
    priority: 0
  },
  {
    source: {
      type: 'slide',
      ref: '1.A1.2'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.3'
    },
    instructions: [{field: 'foo', type: 'set', value: 'higher_priority'}],
    conditions: [],
    priority: 5
  },
  {
    source: {
      type: 'slide',
      ref: '1.A1.2'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.3'
    },
    instructions: [{field: 'foo', type: 'set', value: 'lower_priority'}],
    conditions: [],
    priority: 10
  },
  {
    source: {
      type: 'slide',
      ref: '1.A1.3'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.4'
    },
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [2]
      }
    ],
    priority: 10
  },
  {
    source: {
      type: 'slide',
      ref: '1.A1.3'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.5'
    },
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [1]
      }
    ],
    priority: 20
  },
  {
    source: {
      type: 'slide',
      ref: '1.A1.5'
    },
    destination: {
      type: 'chapter',
      ref: '2.A1'
    },
    instructions: [{field: 'bar', type: 'set', value: 'chapter_change'}],
    conditions: [],
    priority: 5
  },
  {
    source: {
      type: 'slide',
      ref: '1.A1.7'
    },
    destination: {
      type: 'chapter',
      ref: '2.A1'
    },
    instructions: [{field: 'bar', type: 'set', value: 'I was in 1.A1.7'}],
    conditions: [],
    priority: 10
  },
  {
    source: {
      type: 'slide',
      ref: '*'
    },
    destination: {
      type: 'slide',
      ref: 'slide-matching-star-source'
    },
    instructions: [],
    conditions: [],
    priority: 100
  }
];
const rulesFor2A1 = [
  {
    source: {
      type: 'slide',
      ref: ''
    },
    destination: {
      type: 'slide',
      ref: '2.A1.2'
    },
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'bar'
        },
        operator: 'EQUALS',
        values: ['I was in 1.A1.7']
      }
    ],
    priority: 5
  },
  {
    source: {
      type: 'slide',
      ref: ''
    },
    destination: {
      type: 'slide',
      ref: '2.A1.1'
    },
    instructions: [{field: 'baz', type: 'set', value: 'some value'}],
    conditions: [],
    priority: 10
  },
  {
    source: {
      type: 'slide',
      ref: '2.A1.1'
    },
    destination: {
      type: 'slide',
      ref: '2.A1.2'
    },
    instructions: [],
    conditions: [],
    priority: 10
  }
];
const rulesFor1A2 = [
  {
    source: {
      type: 'slide',
      ref: '1.A1.2'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.3'
    },
    instructions: [
      {
        value: 4,
        type: 'add',
        field: 'stars'
      }
    ],
    conditions: [
      {
        target: {
          scope: 'slide',
          ref: '1.A1.2',
          field: 'isCorrect'
        },
        operator: 'EQUALS',
        values: [true]
      }
    ],
    priority: 5
  },
  {
    source: {
      type: 'slide',
      ref: '1.A1.2'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.4'
    },
    instructions: [
      {
        value: 0,
        type: 'add',
        field: 'stars'
      }
    ],
    conditions: [
      {
        target: {
          scope: 'slide',
          ref: '1.A1.2',
          field: 'isCorrect'
        },
        operator: 'EQUALS',
        values: [false]
      }
    ],
    priority: 5
  }
];

const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: rulesFor1A1
  },
  {
    ref: '2.A1',
    slides: filter({chapter_id: '2.A1'}, allSlides),
    rules: rulesFor2A1
  }
];

const adaptiveState: State = {
  content: {
    ref: '1.A1.1',
    type: 'slide'
  },
  nextContent: {
    ref: '1.A1.2',
    type: 'slide'
  },
  lives: 1,
  livesDisabled: false,
  stars: 0,
  slides: ['1.A1.1'],
  requestedClues: [],
  viewedResources: [],
  isCorrect: true,
  step: {
    current: 1
  },
  remainingLifeRequests: 1,
  hasViewedAResourceAtThisStep: false,
  allAnswers: [],
  variables: {},
  pendingSlides: []
};

test('should return a slide from the list of slides if the current chapter has no rules', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {type: 'slide', ref: '2.A1.1'}
  });
  const currentSlide = getSlide(allSlides, state.nextContent);
  const availableContentWithSlides: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: rulesFor1A1
    },
    {
      ref: '2.A1',
      slides: filter({chapter_id: '2.A1'}, allSlides),
      rules: null
    }
  ];

  const resultAction = computeNextStepAfterAnswer(
    config,
    state,
    availableContentWithSlides,
    currentSlide,
    partialAction(state)
  );
  if (!resultAction) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(omit(['payload.nextContent.ref'], resultAction), {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide'},
      instructions: null,
      isCorrect: true
    }
  });
  t.regex(resultAction.payload.nextContent.ref, /^2\.A1\.[2-9]+$/);
});

test('should return the slide from the chapter rules matching the source with the lowest priority value first', t => {
  const state: State = Object.freeze(adaptiveState);
  const currentSlide = getSlide(allSlides, state.nextContent);

  const resultAction = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(resultAction, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: '1.A1.3'},
      instructions: [{field: 'foo', type: 'set', value: 'higher_priority'}],
      isCorrect: null
    }
  });
});

test('should match the rule with "*" source whatever state.nextContent may be', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {
      type: 'slide',
      ref: '1.A1.6'
    }
  });
  const currentSlide = getSlide(allSlides, state.nextContent);

  const resultAction = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(resultAction, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: 'slide-matching-star-source'},
      instructions: [],
      isCorrect: null
    }
  });
});

test("should only select a rule if it matches the rules's conditions", t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {type: 'slide', ref: '1.A1.3'}
  });
  const currentSlide = getSlide(allSlides, state.nextContent);

  const resultAction = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(resultAction, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: '1.A1.5'},
      instructions: [],
      isCorrect: null
    }
  });
});

test('should return the slide of a new chapter when a rule requests to change to a different chapter that does not have rules', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {type: 'slide', ref: '1.A1.5'}
  });
  const currentSlide = getSlide(allSlides, state.nextContent);
  const availableContentWithSlides: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: rulesFor1A1
    },
    {
      ref: '2.A1',
      slides: filter({chapter_id: '2.A1'}, allSlides),
      rules: null
    }
  ];

  const resultAction = computeNextStepAfterAnswer(
    config,
    state,
    availableContentWithSlides,
    currentSlide,
    partialAction(state)
  );
  if (!resultAction) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(omit(['payload.nextContent.ref'], resultAction), {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide'},
      instructions: [{field: 'bar', type: 'set', value: 'chapter_change'}],
      isCorrect: null
    }
  });
  t.regex(resultAction.payload.nextContent.ref, /^2\.A1\.[1-9]+$/);
});

test('should concatenate the instructions from all intermediary rules when switching chapters', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {type: 'slide', ref: '1.A1.5'}
  });
  const currentSlide = getSlide(allSlides, state.nextContent);

  const resultAction = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(resultAction, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: '2.A1.1'},
      instructions: [
        {field: 'bar', type: 'set', value: 'chapter_change'},
        {field: 'baz', type: 'set', value: 'some value'}
      ],
      isCorrect: null
    }
  });
});

test("should apply the instructions from last chapter's rule before selecting a new rule from the next chapter when switching chapters", t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {type: 'slide', ref: '1.A1.7'}
  });
  const currentSlide = getSlide(allSlides, state.nextContent);

  const resultAction = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(resultAction, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: '2.A1.2'},
      instructions: [{field: 'bar', type: 'set', value: 'I was in 1.A1.7'}],
      isCorrect: null
    }
  });
});

test('should be able to switch from a non-adaptive chapter to an adaptive chapter', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {
      type: 'slide',
      ref: '1.A1.4'
    },
    slides: ['1.A1.1', '1.A1.2', '1.A1.3']
  });
  const availableContentWithNoRulesInFirstChapter: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: null
    },
    {
      ref: '2.A1',
      slides: filter({chapter_id: '2.A1'}, allSlides),
      rules: rulesFor2A1
    }
  ];

  const currentSlide = getSlide(allSlides, state.nextContent);
  const result = computeNextStepAfterAnswer(
    config,
    state,
    availableContentWithNoRulesInFirstChapter,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: '2.A1.1'},
      instructions: [{field: 'baz', type: 'set', value: 'some value'}],
      isCorrect: true
    }
  });
});

test('should use slide scoped instructions to select right rule', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {type: 'slide', ref: '1.A1.2'}
  });
  const availableContentWithSlideScopedRules: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: rulesFor1A2
    },
    {
      ref: '2.A1',
      slides: filter({chapter_id: '2.A1'}, allSlides),
      rules: rulesFor2A1
    }
  ];

  const currentSlide = getSlide(allSlides, state.nextContent);
  const result = computeNextStepAfterAnswer(
    config,
    state,
    availableContentWithSlideScopedRules,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: '1.A1.3'},
      instructions: [{field: 'stars', type: 'add', value: 4}],
      isCorrect: true
    }
  });
});

test('should always use rules to select nextContent, even if the number of answered slides is > config.slidesToComplete', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {
      type: 'slide',
      ref: '1.A1.2'
    },
    slides: ['1.A1.1', '1.A1.3', '1.A1.4', '1.A1.5', '1.A1.6']
  });
  const availableContentWithSlideScopedRules: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: rulesFor1A2
    }
  ];

  const currentSlide = getSlide(allSlides, state.nextContent);
  const result = computeNextStepAfterAnswer(
    config,
    state,
    availableContentWithSlideScopedRules,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: '1.A1.3'},
      instructions: [{field: 'stars', type: 'add', value: 4}],
      isCorrect: true
    }
  });
});

test('should return null when switching to new chapter but no content could be found for the chapter', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {
      type: 'slide',
      ref: '1.A1.4'
    },
    slides: ['1.A1.1', '1.A1.2', '1.A1.3']
  });
  const availableContentWithNoContentInSecondChapter: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: null
    },
    {
      ref: '2.A1',
      slides: [],
      rules: null
    }
  ];

  const currentSlide = getSlide(allSlides, state.nextContent);
  const result = computeNextStepAfterAnswer(
    config,
    state,
    availableContentWithNoContentInSecondChapter,
    currentSlide,
    partialAction(state)
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'success', ref: 'successExitNode'},
      instructions: null,
      isCorrect: true
    }
  });
});

test("should return null when there are no rules matching the progression's conditions", t => {
  const state: State = Object.freeze(adaptiveState);
  const availableContentWithNoContentInSecondChapter: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: [
        {
          source: {
            type: 'slide',
            ref: 'i do not exist'
          },
          destination: {
            type: 'slide',
            ref: '1.A1.3'
          },
          instructions: [{field: 'foo', type: 'set', value: 'highest_priority'}],
          conditions: [],
          priority: 0
        },
        {
          source: {
            type: 'slide',
            ref: '1.A1.1'
          },
          destination: {
            type: 'slide',
            ref: '1.A1.3'
          },
          instructions: [{field: 'foo', type: 'set', value: 'higher_priority'}],
          conditions: [
            {
              target: {
                scope: 'variable',
                field: 'unknown variable'
              },
              operator: 'EQUALS',
              values: [2]
            }
          ],
          priority: 5
        }
      ]
    }
  ];

  const currentSlide = getSlide(allSlides, state.nextContent);
  t.is(
    computeNextStepAfterAnswer(
      config,
      state,
      availableContentWithNoContentInSecondChapter,
      currentSlide,
      partialAction(state)
    ),
    null
  );
});

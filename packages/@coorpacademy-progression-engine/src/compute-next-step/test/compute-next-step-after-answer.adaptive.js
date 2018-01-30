// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import type {AvailableContent, Engine, EngineOptions, State} from '../../types';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';

const engine: Engine = {ref: 'learner', version: '1'};
const engineOptions: EngineOptions = {};
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

const availableContent: AvailableContent = [
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
  variables: {}
};

test('should return a slide from slide pools if chapter rules is null or empty for that given chapter', t => {
  const state: State = Object.freeze({
    ...adaptiveState,
    nextContent: {type: 'slide', ref: '2.A1.1'}
  });
  const currentSlide = getSlide(allSlides, state.nextContent);

  const resultAction = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction(state)
  );
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
    engine,
    engineOptions,
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
      ref: '1.A1.5'
    }
  });
  const currentSlide = getSlide(allSlides, state.nextContent);

  const resultAction = computeNextStepAfterAnswer(
    engine,
    engineOptions,
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
    engine,
    engineOptions,
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

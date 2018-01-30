// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';
import assign from 'lodash/fp/assign';
import filter from 'lodash/fp/filter';
import type {AvailableContent, Engine, EngineOptions, State, Slide} from '../../types';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';
import {firstState, stateBeforeGettingNextContent, oneLifeLeftState} from './fixtures/states';

const engine: Engine = {ref: 'learner', version: '1'};
const engineOptions: EngineOptions = {};
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  }
];

const merge = arr2 => (arr: Array<Slide>): Array<Slide> => {
  return arr.map((v, i): Slide => {
    return assign(v, arr2[i]);
  });
};

test('should return the slide with the highest position if any slides have a position', t => {
  const state: State = Object.freeze(firstState);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const prioritySlides: Array<Slide> = pipe(
    filter({chapter_id: '1.A1'}),
    merge([
      {position: 0},
      {position: 0},
      {position: 0},
      {_id: 'highest_position', position: 1},
      {position: 0}
    ])
  )(allSlides);
  const _availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: prioritySlides,
      rules: null
    }
  ];
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true
    }
  };

  const result1 = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    _availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(result1, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide', ref: 'highest_position'},
      instructions: null,
      isCorrect: true
    }
  });

  const stateWithAdditionalSlide: State = {
    ...firstState,
    content: firstState.nextContent,
    nextContent: result1.payload.nextContent,
    slides: [...firstState.slides, result1.payload.nextContent.ref]
  };

  const result2 = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    stateWithAdditionalSlide,
    _availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(omit(['payload.nextContent.ref'], result2), {
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
});

test('should return a new slide when user is still alive', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true
    }
  };

  const resultAction = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
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
  t.regex(resultAction.payload.nextContent.ref, /^1\.A1\.[2-9]+$/);
});

test("should return the fail endpoint when user has no more lives and can't request more lives", t => {
  const state: State = Object.freeze(oneLifeLeftState);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false
    }
  };

  const result = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false,
      nextContent: {ref: 'failExitNode', type: 'failure'},
      instructions: null,
      isCorrect: false
    }
  });
});

test('should return the extraLife when user has no more lives but can request lives', t => {
  const state: State = Object.freeze({...oneLifeLeftState, remainingLifeRequests: 1});
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false
    }
  };

  const result = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false,
      nextContent: {ref: 'extraLife', type: 'node'},
      instructions: null,
      isCorrect: false
    }
  });
});

test('should return a new slide, when user has no more lives but lives are disabled', t => {
  const state: State = Object.freeze(oneLifeLeftState);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const livesDisabledEngine = {ref: 'learner', version: 'livesDisabled'};
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false
    }
  };

  const resultForEngine = computeNextStepAfterAnswer(
    livesDisabledEngine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(omit(['payload.nextContent.ref'], resultForEngine), {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false,
      nextContent: {type: 'slide'},
      instructions: null,
      isCorrect: false
    }
  });
  t.regex(
    resultForEngine.payload.nextContent.ref,
    /^1\.A1\.[2-9]+$/,
    'does not work when lives are disabled in engine config'
  );

  const resultForEngineConfig = computeNextStepAfterAnswer(
    engine,
    {livesDisabled: true},
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(omit(['payload.nextContent.ref'], resultForEngineConfig), {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false,
      nextContent: {type: 'slide'},
      instructions: null,
      isCorrect: false
    }
  });
  t.regex(
    resultForEngineConfig.payload.nextContent.ref,
    /^1\.A1\.[2-9]+$/,
    'does not work when lives are disabled in engine options'
  );
});

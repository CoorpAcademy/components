// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import assign from 'lodash/fp/assign';
import pipe from 'lodash/fp/pipe';
import find from 'lodash/fp/find';
import type {Engine, EngineOptions, State, Slide} from '../../types';
import computeNextStep from '..';
import allSlides from './fixtures/slides';
import {
  firstState,
  stateBeforeGettingNextContent,
  oneLifeLeftState,
  failProgressionState,
  extraLifeAlreadyRefusedProgressionState
} from './fixtures/states';

const engine: Engine = {
  ref: 'learner',
  version: '1'
};
const engineOptions: EngineOptions = {};

const merge = arr2 => (arr: Array<Slide>): Array<Slide> => {
  return arr.map((v, i): Slide => {
    return assign(v, arr2[i]);
  });
};

const slidePools = [
  {
    chapterId: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides)
  }
];

const getCurrentSlide = (slides: Array<Slide>, state: State): ?Slide =>
  slides.find(s => s._id === (state.content && state.content.ref));

test('should return the slide with the highest position if any slides have a position', t => {
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
  const availableContent = {
    slidePools: [
      {
        chapterId: '1.A1',
        slides: prioritySlides
      }
    ]
  };
  const currentSlide: ?Slide = find({_id: '1.A1.1'}, allSlides);
  if (!currentSlide) throw new Error('Slide `1.A1.1` not found');

  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: true
  };

  const result1 = computeNextStep(engine, engineOptions, firstState, givenAnswer, availableContent);
  t.deepEqual(result1, {
    nextContent: {
      type: 'slide',
      ref: 'highest_position'
    },
    instructions: undefined,
    isCorrect: true
  });

  const stateWithAdditionalSlide: State = {
    ...firstState,
    content: firstState.nextContent,
    nextContent: result1.nextContent,
    slides: [...firstState.slides, result1.nextContent.ref]
  };

  const result2 = computeNextStep(
    engine,
    engineOptions,
    stateWithAdditionalSlide,
    givenAnswer,
    availableContent
  );
  t.deepEqual(omit(['nextContent.ref'], result2), {
    nextContent: {
      type: 'slide'
    },
    instructions: undefined,
    isCorrect: true
  });
  t.regex(result2.nextContent.ref, /^1\.A1\.[1-9]+$/);
});

test('should return a new slide when user is still alive', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const currentSlide = getCurrentSlide(allSlides, state);
  const availableContent = {slidePools};
  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: true
  };

  const result = computeNextStep(engine, engineOptions, state, givenAnswer, availableContent);
  t.deepEqual(omit(['nextContent.ref'], result), {
    nextContent: {type: 'slide'},
    instructions: undefined,
    isCorrect: true
  });
  t.regex(result.nextContent.ref, /^1\.A1\.[2-9]+$/);
});

test("should return the fail endpoint when user has no more lives and can't request more lives", t => {
  const state: State = Object.freeze(oneLifeLeftState);
  const currentSlide = getCurrentSlide(allSlides, state);
  const availableContent = {slidePools};
  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: false
  };

  const result = computeNextStep(engine, engineOptions, state, givenAnswer, availableContent);
  t.deepEqual(result, {
    nextContent: {ref: 'failExitNode', type: 'failure'},
    instructions: undefined,
    isCorrect: false
  });
});

test('should return the extraLife when user has no more lives but can request lives', t => {
  const state: State = Object.freeze({...oneLifeLeftState, remainingLifeRequests: 1});
  const currentSlide = getCurrentSlide(allSlides, state);
  const availableContent = {slidePools};
  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: false
  };

  const result = computeNextStep(engine, engineOptions, state, givenAnswer, availableContent);
  t.deepEqual(result, {
    nextContent: {ref: 'extraLife', type: 'node'},
    instructions: undefined,
    isCorrect: false
  });
});

test('should return a new slide, when user has no more lives but lives are disabled', t => {
  const state: State = Object.freeze(failProgressionState);
  const currentSlide = getCurrentSlide(allSlides, state);
  const availableContent = {slidePools};
  const livesDisabledEngine = {ref: 'learner', version: 'livesDisabled'};
  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: false
  };

  const resultForEngine = computeNextStep(
    livesDisabledEngine,
    engineOptions,
    state,
    givenAnswer,
    availableContent
  );
  t.deepEqual(omit(['nextContent.ref'], resultForEngine), {
    nextContent: {type: 'slide'},
    instructions: undefined,
    isCorrect: false
  });
  t.regex(
    resultForEngine.nextContent.ref,
    /^1\.A1\.[2-9]+$/,
    'does not work when lives are disabled in engine config'
  );

  const resultForEngineConfig = computeNextStep(
    engine,
    {livesDisabled: true},
    state,
    givenAnswer,
    availableContent
  );
  t.deepEqual(omit(['nextContent.ref'], resultForEngineConfig), {
    nextContent: {type: 'slide'},
    instructions: undefined,
    isCorrect: false
  });
  t.regex(
    resultForEngineConfig.nextContent.ref,
    /^1\.A1\.[2-9]+$/,
    'does not work when lives are disabled in engine options'
  );
});

test('should return the failure endpoint when progression has at least one remaining extra life and extraLife has already just been refused', t => {
  const state: State = Object.freeze(extraLifeAlreadyRefusedProgressionState);
  const currentSlide = getCurrentSlide(allSlides, state);
  const availableContent = {slidePools};
  const givenAnswer = {
    currentSlide,
    answer: [],
    godMode: false
  };

  const result = computeNextStep(engine, engineOptions, state, givenAnswer, availableContent);
  t.deepEqual(result, {
    nextContent: {ref: 'failExitNode', type: 'failure'},
    instructions: undefined,
    isCorrect: false
  });
});

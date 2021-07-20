// @flow
import test from 'ava';
import {omit, pipe, assign, filter} from 'lodash/fp';

import {getConfig} from '../../config';
import type {AvailableContent, Config, State, Slide} from '../../types';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';
import {firstState, stateBeforeGettingNextContent, oneLifeLeftState} from './fixtures/states';

const config: Config = getConfig({ref: 'learner', version: '1'});
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  }
];

const merge =
  arr2 =>
  (arr: Array<Slide>): Array<Slide> => {
    return arr.map((v, i): Slide => {
      return assign(v, arr2[i]);
    });
  };

const createPartialAction = (state: State): PartialAnswerAction => ({
  type: 'answer',
  payload: {
    answer: [],
    content: state.nextContent,
    godMode: false
  }
});

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
    config,
    state,
    _availableContent,
    currentSlide,
    partialAction
  );
  if (!result1) {
    throw new Error('action should not be falsy');
  }
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
    slides: [...firstState.slides, result1.payload.nextContent.ref]
  };

  const result2 = computeNextStepAfterAnswer(
    config,
    stateWithAdditionalSlide,
    _availableContent,
    currentSlide,
    partialAction
  );
  if (!result2) {
    throw new Error('action should not be falsy');
  }
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

  const result = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  if (!result) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(omit(['payload.nextContent.ref'], result), {
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
  t.regex(result.payload.nextContent.ref, /^1\.A1\.[2-9]+$/);
});

test("should return the fail endpoint when user has no more lives and can't request more lives", t => {
  const state: State = Object.freeze(oneLifeLeftState);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction = createPartialAction(state);

  const result = computeNextStepAfterAnswer(
    config,
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
  const partialAction = createPartialAction(state);

  const result = computeNextStepAfterAnswer(
    config,
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
  const partialAction = createPartialAction(state);
  const livesDisabledConfig: Config = {...config, livesDisabled: true};

  const result = computeNextStepAfterAnswer(
    livesDisabledConfig,
    state,
    availableContent,
    currentSlide,
    partialAction
  );

  if (!result) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(omit(['payload.nextContent.ref'], result), {
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
    result.payload.nextContent.ref,
    /^1\.A1\.[2-9]+$/,
    'does not work when lives are disabled in engine config'
  );
});

test('should return isCorrect=true when the answer is correct and godmode is false', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: state.nextContent,
      godMode: false
    }
  };

  const result = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  if (!result) {
    throw new Error('action should not be falsy');
  }
  t.true(result.payload.isCorrect);
});

test('should return isCorrect=false when the answer is incorrect and godmode is false', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: ['this is not the answer'],
      content: state.nextContent,
      godMode: false
    }
  };

  const result = computeNextStepAfterAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  if (!result) {
    throw new Error('action should not be falsy');
  }
  t.false(result.payload.isCorrect);
});

test('should return null if there is no available content', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction = createPartialAction(state);

  t.is(computeNextStepAfterAnswer(config, state, [], currentSlide, partialAction), null);
});

test('should return extralife endpoint when user has failed to answer, has no more lives but can request lives and has answered `config.slidesToComplete` number of slides', t => {
  const state: State = Object.freeze({
    ...stateBeforeGettingNextContent,
    slides: ['1.A1.1', '1.A1.2', '1.A1.3'],
    nextContent: {
      type: 'slide',
      ref: '1.A1.4'
    },
    remainingLifeRequests: 1,
    lives: 1
  });
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false
    }
  };

  const result = computeNextStepAfterAnswer(
    config,
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
      nextContent: {
        ref: 'extraLife',
        type: 'node'
      },
      instructions: null,
      isCorrect: false
    }
  });
});

test("should return failure endpoint when user has failed to answer, has no more lives, can't request lives and has answered `config.slidesToComplete` number of slides", t => {
  const state: State = Object.freeze({
    ...stateBeforeGettingNextContent,
    slides: ['1.A1.1', '1.A1.2', '1.A1.3'],
    nextContent: {
      type: 'slide',
      ref: '1.A1.4'
    },
    remainingLifeRequests: 0,
    lives: 1
  });
  const currentSlide = getSlide(allSlides, state.nextContent);
  const partialAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: false
    }
  };

  const result = computeNextStepAfterAnswer(
    config,
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
      nextContent: {
        ref: 'failExitNode',
        type: 'failure'
      },
      instructions: null,
      isCorrect: false
    }
  });
});

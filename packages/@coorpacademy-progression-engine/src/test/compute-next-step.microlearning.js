// @flow
import test from 'ava';
import type {State} from '../types';
import computeNextStep from '../compute-next-step';
import allSlides from './fixtures/slides';
import {
  stateBeforeGettingNextContent,
  failProgressionState,
  successProgressionState
} from './fixtures/states';

const engine = {
  ref: 'microlearning',
  version: '1'
};

const slides = [
  {
    chapterId: '1.A1',
    slides: allSlides.filter(slide => slide.chapter_id === '1.A1')
  }
];

test('should return a new slide when user is still alive', t => {
  const state: State = Object.freeze({
    ...stateBeforeGettingNextContent,
    slides: ['1.A1.1']
  });

  const nextStep = computeNextStep(engine, slides, state);
  t.not(nextStep.ref, '1.A1.1');
});

test('should return the fail endpoint, when user has no more lives', t => {
  const state: State = Object.freeze(failProgressionState);

  const nextStep = computeNextStep(engine, slides, state);
  t.deepEqual(nextStep, {
    ref: 'failExitNode',
    type: 'failure'
  });
});

test('should return the success endpoint when user has answered `config.slidesToComplete` number of slides', t => {
  const state: State = Object.freeze(successProgressionState);

  const nextStep = computeNextStep(engine, slides, state);
  t.deepEqual(nextStep, {
    ref: 'successExitNode',
    type: 'success'
  });
});

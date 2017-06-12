// @flow
import test from 'ava';
import assign from 'lodash/fp/assign';
import computeNextStep from '../compute-next-step';
import slides from './fixtures/slides';
import {stateForFirstSlide, failProgressionState, successProgressionState} from './fixtures/states';

test('should return a new slide when user is still alive', t => {
  const engine = {
    ref: 'microlearning',
    version: '1'
  };
  const state = Object.freeze(assign(stateForFirstSlide, {slides: ['1.A1.1']}));

  const nextStep = computeNextStep(engine, slides, state);
  t.not(nextStep.ref, '1.A1.1');
});

test('should return the fail endpoint, when progressions state no more lives', t => {
  const engine = {
    ref: 'microlearning',
    version: '1'
  };
  const state = Object.freeze(failProgressionState);

  const nextStep = computeNextStep(engine, slides, state);
  t.deepEqual(nextStep, {
    ref: 'failExitNode',
    type: 'failure'
  });
});

test('should return the success endpoint when progression state has answered all slides', t => {
  const engine = {
    ref: 'microlearning',
    version: '1'
  };
  const state = Object.freeze(successProgressionState);

  const nextStep = computeNextStep(engine, slides, state);
  t.deepEqual(nextStep, {
    ref: 'successExitNode',
    type: 'success'
  });
});

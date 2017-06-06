// @flow
import test from 'ava';
import computeNextStep from '../compute-next-step';
import slides from './fixtures/slides';

test('should return a new slide when user is still alive', t => {
  const engine = {
    ref: 'microlearning',
    version: '1'
  };
  const state = Object.freeze({
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    },
    lives: 1,
    isCorrect: true,
    slides: ['1.A1.1'],
    step: {
      current: 1,
      total: 4
    }
  });

  const nextStep = computeNextStep(engine, slides, state);
  t.not(nextStep.ref, '1.A1.1');
});

test('should return the fail endpoint, when progressions state no more lives', t => {
  const engine = {
    ref: 'microlearning',
    version: '1'
  };
  const state = Object.freeze({
    content: {
      ref: '1.A1.1',
      type: 'slide'
    },
    nextContent: {
      ref: '1.A1.2',
      type: 'slide'
    },
    lives: 0,
    isCorrect: false,
    slides: ['1.A1.1', '1.A1.2'],
    step: {
      current: 2,
      total: 4
    }
  });

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
  const state = Object.freeze({
    content: {
      ref: '1.A1.2',
      type: 'slide'
    },
    nextContent: {
      ref: '1.A1.4',
      type: 'slide'
    },
    lives: 1,
    isCorrect: true,
    slides: ['1.A1.1', '1.A1.3', '1.A1.2', '1.A1.4'],
    step: {
      current: 4,
      total: 4
    }
  });

  const nextStep = computeNextStep(engine, slides, state);
  t.deepEqual(nextStep, {
    ref: 'successExitNode',
    type: 'success'
  });
});

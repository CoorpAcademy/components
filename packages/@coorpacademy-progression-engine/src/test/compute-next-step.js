// @flow
import test from 'ava';
import computeNextStep from '../compute-next-step';
import slides from './fixtures/slides';

test('should return a new slide when user has no progression state', t => {
  const nextStep = computeNextStep(slides);
  t.truthy(nextStep.ref);
  t.is(nextStep.type, 'slide');
});

test('should return a new slide when user is still alive', t => {
  const progression = Object.freeze({
    state: {
      nextContent: {
        ref: '1.A1.1',
        type: 'slide'
      },
      lives: 1,
      isCorrect: true,
      slides: ['1.A1.1']
    },
    content: {
      ref: '1.A1',
      type: 'chapter'
    },
    actions: []
  });

  const nextStep = computeNextStep(slides, progression.state);
  t.not(nextStep.ref, '1.A1.1');
});

test('should return the fail endpoint, when progressions state no more lives', t => {
  const progression = Object.freeze({
    state: {
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
      slides: ['1.A1.1', '1.A1.2']
    },
    content: {
      ref: '1.A1',
      type: 'chapter'
    },
    actions: []
  });

  const nextStep = computeNextStep(slides, progression.state);
  t.deepEqual(nextStep, {
    ref: 'failExitNode',
    type: 'failure'
  });
});

test('should return the success endpoint when progression state has answered all slides', t => {
  const progression = Object.freeze({
    state: {
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
      slides: ['1.A1.1', '1.A1.3', '1.A1.2', '1.A1.4']
    },
    content: {
      ref: '1.A1',
      type: 'chapter'
    },
    actions: []
  });

  const nextStep = computeNextStep(slides, progression.state);
  t.deepEqual(nextStep, {
    ref: 'successExitNode',
    type: 'success'
  });
});

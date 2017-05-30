// @flow
import test from 'ava';
import isEmpty from 'lodash/fp/isEmpty';
import computeNextStep from '../compute-next-step';
import slides from './fixtures/slides';

test('should return the content or next step when action is correct answer', t => {
  const progression = Object.freeze({
    state: {
      nextContent: {
        ref: '1.A1.1',
        type: 'slide'
      },
      lives: 1,
      slides: []
    },
    content: {
      ref: '1.A1',
      type: 'chapter'
    },
    actions: []
  });

  const action = Object.freeze({
    type: 'answer',
    payload: {
      isCorrect: true
    }
  });

  const nextStep = computeNextStep(progression.state, action, slides);
  t.false(isEmpty(nextStep));
  t.not(nextStep.ref, '1.A1.1');
});

test('should return the fail endpoint, when action has wrong answers and progressions no more lives', t => {
  const progression = Object.freeze({
    state: {
      nextContent: {
        ref: '1.A1.2',
        type: 'slide'
      },
      lives: 0,
      slides: ['1.A1.1']
    },
    content: {
      ref: '1.A1',
      type: 'chapter'
    },
    actions: []
  });

  const action = Object.freeze({
    type: 'answer',
    payload: {
      isCorrect: false
    }
  });

  const nextStep = computeNextStep(progression.state, action, slides);
  t.false(isEmpty(nextStep));
  t.deepEqual(nextStep, {
    ref: 'failExitNode',
    type: 'failure'
  });
});

test('should return the success endpoint when action state has all answered slides and user is still alive', t => {
  const progression = Object.freeze({
    state: {
      nextContent: {
        ref: '1.A1.4',
        type: 'slide'
      },
      lives: 0,
      slides: ['1.A1.1', '1.A1.3', '1.A1.2']
    },
    content: {
      ref: '1.A1',
      type: 'chapter'
    },
    actions: []
  });

  const action = Object.freeze({
    type: 'answer',
    payload: {
      isCorrect: true
    }
  });

  const nextStep = computeNextStep(progression.state, action, slides);
  t.false(isEmpty(nextStep));
  t.deepEqual(nextStep, {
    ref: 'successExitNode',
    type: 'success'
  });
});

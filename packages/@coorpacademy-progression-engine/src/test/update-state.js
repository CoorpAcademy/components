// @flow
import test from 'ava';
import updateState from '../update-state';
import type {Action, State} from '../types';

test('should return the given state untouched (TMP)', t => {
  const state: State = Object.freeze({
    nextContent: {
      ref: 'slide_0',
      type: 'slide'
    },
    lives: 1,
    slides: []
  });

  const action: Action = Object.freeze({
    type: 'answer',
    payload: {
      isCorrect: false
    }
  });

  t.deepEqual(updateState(state, [action]), {
    ...state,
    lives: 0,
    slides: ['slide_0'],
    isCorrect: false
  });
});

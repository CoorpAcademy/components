// @flow
import test from 'ava';
import updateState from '../update-state';
import type {Action, State} from '../types';

test('should return the given state untouched (TMP)', t => {
  const state: State = Object.freeze({
    nextContent: {
      ref: '1.A1.1',
      type: 'slide'
    },
    lives: 1,
    slides: []
  });

  const action: Action = Object.freeze({
    type: 'answer',
    payload: {
      nextContent: {
        ref: '1.A1.2',
        type: 'slide'
      },
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      isCorrect: false
    }
  });

  t.deepEqual(updateState(state, [action]), {
    ...state,
    lives: 0,
    slides: ['1.A1.1'],
    ...action.payload
  });
});

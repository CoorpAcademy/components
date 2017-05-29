// @flow
import test from 'ava';
import updateState from '../update-state';
import type {Action, State} from '../types';

test('should return the given state untouched (TMP)', t => {
  const state: State = Object.freeze({
    content: {
      ref: 'slide_0',
      type: 'slide'
    }
  });
  const action: Action = Object.freeze({
    type: 'answer'
  });

  t.deepEqual(updateState(state, [action]), state);
});

import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  requestClue,
  PROGRESSION_REQUEST_CLUE_REQUEST,
  PROGRESSION_REQUEST_CLUE_SUCCESS,
  PROGRESSION_REQUEST_CLUE_FAILURE
} from '../progressions';

const getState = pipe(
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.nextContent', 'bar')
);

test(
  'should request clue',
  macro,
  getState({}),
  t => ({
    Progressions: {
      requestClue: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {content: {ref: 'bar', type: 'slide'}});
        return 'baz';
      }
    }
  }),
  requestClue('foo', 'bar'),
  [
    {
      type: PROGRESSION_REQUEST_CLUE_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_REQUEST_CLUE_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: 'baz'
    }
  ]
);

test(
  'should prevent request if clue has already requested',
  macro,
  pipe(getState, set('data.progressions.entities.foo.state.requestedClues', ['bar']))({}),
  t => ({
    Progressions: {
      requestClue: (id, payload) => {
        t.fail();
      }
    }
  }),
  requestClue('foo', 'bar'),
  [
    {
      type: PROGRESSION_REQUEST_CLUE_REQUEST,
      meta: {progressionId: 'foo'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  getState({}),
  t => ({
    Progressions: {
      requestClue: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {content: {ref: 'bar', type: 'slide'}});
        throw new Error();
      }
    }
  }),
  requestClue('foo', 'bar'),
  [
    {
      type: PROGRESSION_REQUEST_CLUE_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_REQUEST_CLUE_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  markResourceAsViewed,
  PROGRESSION_RESOURCE_VIEWED_REQUEST,
  PROGRESSION_RESOURCE_VIEWED_SUCCESS,
  PROGRESSION_RESOURCE_VIEWED_FAILURE
} from '../progressions';

const initState = pipe(
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.nextContent.ref', 'bar')
);

test(
  'should mark a resource as viewed',
  macro,
  initState({}),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {content: {ref: 'bar', type: 'slide'}});
        return 'baz';
      }
    }
  }),
  markResourceAsViewed('foo', 'bar'),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: 'baz'
    }
  ]
);

test(
  'should prevent request if clue has already requested',
  macro,
  pipe(initState, set('data.progressions.entities.foo.state.requestedClues', ['bar']))({}),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.fail();
      }
    }
  }),
  markResourceAsViewed('foo', 'bar'),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  initState({}),
  t => ({
    Progressions: {
      markResourceAsViewed: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {content: {ref: 'bar', type: 'slide'}});
        throw new Error();
      }
    }
  }),
  markResourceAsViewed('foo', 'bar'),
  [
    {
      type: PROGRESSION_RESOURCE_VIEWED_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_RESOURCE_VIEWED_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

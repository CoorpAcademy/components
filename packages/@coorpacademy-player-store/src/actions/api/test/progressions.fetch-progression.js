import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  fetchProgression,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_FAILURE
} from '../progressions';

test(
  'should fetch slide',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    }
  }),
  fetchProgression('foo'),
  [
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: 'foo'
    }
  ],
  1
);

test(
  'should prevent request if slide already fetched',
  macro,
  set('data.progressions.entities.foo', 'foo', {}),
  t => ({
    Progressions: {
      findById: id => {
        t.fail();
      }
    }
  }),
  fetchProgression('foo'),
  [
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    }
  ],
  0
);

test(
  'should return error if request failed',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error('some error');
      }
    }
  }),
  fetchProgression('foo'),
  [
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_FAILURE,
      meta: {id: 'foo'},
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

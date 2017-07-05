import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  fetchBestProgression,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  PROGRESSION_FETCH_BESTOF_FAILURE
} from '../progressions';

test(
  'should fetch best progression',
  macro,
  {},
  t => ({
    Progressions: {
      findBestOf: ref => {
        t.is(ref, 'bar');
        return 'baz';
      }
    }
  }),
  fetchBestProgression('foo', 'bar'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {progressionId: 'foo', ref: 'bar'}
    },
    [
      {
        type: PROGRESSION_FETCH_BESTOF_SUCCESS,
        meta: {progressionId: 'foo', ref: 'bar'},
        payload: 'baz'
      },
      set('data.progressions.entities.foo.previousBestScore', 'baz', {})
    ]
  ]
);

test(
  'should prevent request if bestScore already fetched',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.previousBestScore', 12)
  )({}),
  t => ({
    Progressions: {
      findBestOf: ref => {
        t.fail();
      }
    }
  }),
  fetchBestProgression('foo', 'bar'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {progressionId: 'foo', ref: 'bar'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  {},
  t => ({
    Progressions: {
      findBestOf: ref => {
        t.is(ref, 'bar');
        throw new Error();
      }
    }
  }),
  fetchBestProgression('foo', 'bar'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {progressionId: 'foo', ref: 'bar'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_FAILURE,
      meta: {progressionId: 'foo', ref: 'bar'},
      error: true,
      payload: new Error()
    }
  ]
);

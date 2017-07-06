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
  fetchBestProgression('bar'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {chapterId: 'bar'}
    },
    [
      {
        type: PROGRESSION_FETCH_BESTOF_SUCCESS,
        meta: {chapterId: 'bar'},
        payload: 'baz'
      },
      set('data.chapters.entities.bar.bestScore', 'baz', {})
    ]
  ]
);

test(
  'should prevent request if bestScore already fetched',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {content: {ref: 'bar'}}),
    set('data.chapters.entities.bar.bestScore', 12)
  )({}),
  t => ({
    Progressions: {
      findBestOf: ref => {
        t.fail();
      }
    }
  }),
  fetchBestProgression('bar'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {chapterId: 'bar'}
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
  fetchBestProgression('bar'),
  [
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {chapterId: 'bar'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_FAILURE,
      meta: {chapterId: 'bar'},
      error: true,
      payload: new Error()
    }
  ]
);

import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {fetchClue, CLUE_FETCH_REQUEST, CLUE_FETCH_SUCCESS, CLUE_FETCH_FAILURE} from '../clues';

test(
  'should fetch clue',
  macro,
  {},
  t => ({
    Clues: {
      findById: (progressionId, slideId) => {
        t.is(progressionId, 'foo');
        t.is(slideId, 'bar');
        return 'baz';
      }
    }
  }),
  fetchClue('foo', 'bar'),
  [
    {
      type: CLUE_FETCH_REQUEST,
      meta: {progressionId: 'foo', slideId: 'bar'}
    },
    {
      type: CLUE_FETCH_SUCCESS,
      meta: {progressionId: 'foo', slideId: 'bar'},
      payload: 'baz'
    }
  ]
);

test(
  'should prevent request if clue already fetched',
  macro,
  set('data.clues.entities.foo.bar', 'baz', {}),
  t => ({
    Clues: {
      findById: (progressionId, slideId) => {
        t.fail();
      }
    }
  }),
  fetchClue('foo', 'bar'),
  [
    {
      type: CLUE_FETCH_REQUEST,
      meta: {progressionId: 'foo', slideId: 'bar'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  {},
  t => ({
    Clues: {
      findById: (progressionId, slideId) => {
        t.is(progressionId, 'foo');
        t.is(slideId, 'bar');
        throw new Error();
      }
    }
  }),
  fetchClue('foo', 'bar'),
  [
    {
      type: CLUE_FETCH_REQUEST,
      meta: {progressionId: 'foo', slideId: 'bar'}
    },
    {
      type: CLUE_FETCH_FAILURE,
      meta: {progressionId: 'foo', slideId: 'bar'},
      error: true,
      payload: new Error()
    }
  ]
);

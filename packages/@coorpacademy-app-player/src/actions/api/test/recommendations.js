import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  fetchRecommendations,
  RECO_FETCH_REQUEST,
  RECO_FETCH_SUCCESS,
  RECO_FETCH_FAILURE
} from '../recommendations';

const initState = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo.content.ref', 'chapterRef')
);

test(
  'should fetch recommendations',
  macro,
  initState({}),
  t => ({
    Recommendations: {
      find: ref => {
        t.is(ref, 'chapterRef');
        return 'bar';
      }
    }
  }),
  fetchRecommendations('foo'),
  [
    {
      type: RECO_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: RECO_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: 'bar'
    }
  ]
);

test(
  'should prevent request if recommendations are already fetched',
  macro,
  pipe(initState, set('data.recommendations.entities.foo', 'bar'))({}),
  t => ({
    Recommendations: {
      find: ref => {
        t.fail();
      }
    }
  }),
  fetchRecommendations('foo'),
  [
    {
      type: RECO_FETCH_REQUEST,
      meta: {id: 'foo'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  initState({}),
  t => ({
    Recommendations: {
      find: ref => {
        t.is(ref, 'chapterRef');
        throw new Error();
      }
    }
  }),
  fetchRecommendations('foo'),
  [
    {
      type: RECO_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: RECO_FETCH_FAILURE,
      meta: {id: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

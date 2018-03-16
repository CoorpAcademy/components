import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  fetchNext,
  NEXT_CONTENT_FETCH_REQUEST,
  NEXT_CONTENT_FETCH_SUCCESS,
  NEXT_CONTENT_FETCH_FAILURE
} from '../next-content';

const initState = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo.content.ref', 'chapterRef'),
  set('data.progressions.entities.foo.content.type', 'chapter')
);

test(
  'should fetch recommendations',
  macro,
  initState({}),
  t => ({
    Recommendations: {
      getNext: (type, ref) => {
        t.is(type, 'chapter');
        t.is(ref, 'chapterRef');
        return 'bar';
      }
    }
  }),
  fetchNext('foo'),
  [
    {
      type: NEXT_CONTENT_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: NEXT_CONTENT_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: 'bar'
    }
  ],
  2
);

test(
  'should prevent request if next-content are already fetched',
  macro,
  pipe(initState, set('data.nextContent.entities.foo', 'bar'))({}),
  t => ({
    Recommendations: {
      getNext: (type, ref) => {
        t.fail();
      }
    }
  }),
  fetchNext('foo'),
  [
    {
      type: NEXT_CONTENT_FETCH_REQUEST,
      meta: {id: 'foo'}
    }
  ],
  0
);

test(
  'should return error if request failed',
  macro,
  initState({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Recommendations: {
      getNext: (type, ref) => {
        t.is(ref, 'chapterRef');
        t.is(type, 'chapter');
        throw new Error('some error');
      }
    }
  }),
  fetchNext('foo'),
  [
    {
      type: NEXT_CONTENT_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: NEXT_CONTENT_FETCH_FAILURE,
      meta: {id: 'foo'},
      error: true,
      payload: new Error('some error')
    }
  ],
  3
);

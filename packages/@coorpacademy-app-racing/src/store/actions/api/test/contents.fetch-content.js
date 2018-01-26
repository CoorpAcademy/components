import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  fetchContent,
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_FETCH_FAILURE
} from '../contents';

test(
  'should fetch a content',
  macro,
  {},
  t => ({
    Content: {
      find: (type, ref) => {
        t.is(type, 'contentType');
        t.is(ref, 'foo');
        return ref;
      }
    }
  }),
  fetchContent('contentType', 'foo'),
  [
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {ref: 'foo', type: 'contentType'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {ref: 'foo', type: 'contentType'},
      payload: 'foo'
    }
  ],
  2
);

test(
  'should prevent request if content is already fetched',
  macro,
  set('data.contents.contentType.entities.foo', 'fooContent', {}),
  t => ({
    Content: {
      find() {
        t.fail();
      }
    }
  }),
  fetchContent('contentType', 'foo'),
  [
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {ref: 'foo', type: 'contentType'}
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
    Content: {
      find: (type, ref) => {
        t.is(type, 'contentType');
        t.is(ref, 'foo');
        throw new Error('some error');
      }
    }
  }),
  fetchContent('contentType', 'foo'),
  [
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {ref: 'foo', type: 'contentType'}
    },
    {
      type: CONTENT_FETCH_FAILURE,
      meta: {ref: 'foo', type: 'contentType'},
      error: true,
      payload: new Error('some error')
    }
  ],
  3
);

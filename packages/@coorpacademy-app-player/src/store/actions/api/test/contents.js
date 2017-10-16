import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  fetchContent,
  fetchNextContent,
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_FETCH_FAILURE,
  NEXT_CONTENT_FETCH_REQUEST,
  NEXT_CONTENT_FETCH_SUCCESS,
  NEXT_CONTENT_FETCH_FAILURE
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
  ]
);

test(
  'should prevent request if content already fetched',
  macro,
  set('data.contents.contentType.entities.foo', 'fooContent', {}),
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
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  {},
  t => ({
    Content: {
      find: (type, ref) => {
        t.is(type, 'contentType');
        t.is(ref, 'foo');
        throw new Error();
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
      payload: new Error()
    }
  ]
);

test(
  'should fecth next content',
  macro,
  {},
  t => ({
    Content: {
      getNextContent: (type, ref) => {
        t.is(type, 'contentType');
        t.is(ref, 'foo');
        return ref;
      }
    }
  }),
  fetchNextContent('contentType', 'foo'),
  [
    {
      type: NEXT_CONTENT_FETCH_REQUEST,
      meta: {ref: 'foo', type: 'contentType'}
    },
    {
      type: NEXT_CONTENT_FETCH_SUCCESS,
      meta: {ref: 'foo', type: 'contentType'},
      payload: 'foo'
    }
  ]
);

test(
  'should return error if request failed when fetching next content',
  macro,
  {},
  t => ({
    Content: {
      getNextContent: (type, ref) => {
        t.is(type, 'contentType');
        t.is(ref, 'foo');
        throw new Error();
      }
    }
  }),
  fetchNextContent('contentType', 'foo'),
  [
    {
      type: NEXT_CONTENT_FETCH_REQUEST,
      meta: {ref: 'foo', type: 'contentType'}
    },
    {
      type: NEXT_CONTENT_FETCH_FAILURE,
      meta: {ref: 'foo', type: 'contentType'},
      error: true,
      payload: new Error()
    }
  ]
);

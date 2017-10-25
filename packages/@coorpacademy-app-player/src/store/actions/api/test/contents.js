import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  fetchContent,
  fetchSlideChapter,
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
  'should record chapter in state',
  macro,
  {},
  t => ({
    Content: {
      find: (type, ref) => {
        if (type === 'slide') {
          t.is(ref, 'slideRef');
          return {chapter_id: 'chapId', _id: ref};
        } else if (type === 'chapter') {
          t.is(ref, 'chapId');
          return {_id: ref};
        }
        t.fail();
      }
    }
  }),
  fetchSlideChapter('slideRef'),
  [
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {ref: 'slideRef', type: 'slide'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {ref: 'slideRef', type: 'slide'},
      payload: {chapter_id: 'chapId', _id: 'slideRef'}
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {_id: 'chapId'}
    }
  ]
);

import test from 'ava';
import Promise from 'bluebird';
import macro from '../../test/helpers/macro';
import dataContentReducer from '../../../reducers/data/contents';
import {
  fetchSlideChapter,
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_FETCH_FAILURE
} from '../contents';

const chapterFetchSuccessAction = {
  type: CONTENT_FETCH_SUCCESS,
  meta: {ref: 'slideRef', type: 'slide'},
  payload: {chapter_id: 'chapId', _id: 'slideRef', foo: 'bar'}
};

test(
  'should fetch a slide then the chapter it is contained in',
  macro,
  {},
  t => ({
    Content: {
      find: (type, ref) => {
        if (type === 'slide') {
          t.is(ref, 'slideRef');
          return Promise.resolve({chapter_id: 'chapId', _id: ref, foo: 'bar'});
        } else if (type === 'chapter') {
          t.is(ref, 'chapId');
          return Promise.resolve({_id: ref, foo: 'baz'});
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
    [
      chapterFetchSuccessAction,
      {data: {contents: dataContentReducer({}, chapterFetchSuccessAction)}}
    ],
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {_id: 'chapId', foo: 'baz'}
    }
  ]
);

const notFoundError = new Error('Could not find item');
test(
  'should not fetch the chapter if the slide could not be fetched',
  macro,
  {},
  t => ({
    Content: {
      find: (type, ref) => {
        return Promise.reject(notFoundError);
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
      type: CONTENT_FETCH_FAILURE,
      error: true,
      meta: {ref: 'slideRef', type: 'slide'},
      payload: notFoundError
    }
  ]
);

test(
  'should not fetch the chapter if the slide could not be found in the state',
  macro,
  {},
  t => ({
    Content: {
      find: (type, ref) => {
        t.is(type, 'slide');
        t.is(ref, 'slideRef');
        return Promise.resolve({});
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
      payload: {}
    }
  ]
);

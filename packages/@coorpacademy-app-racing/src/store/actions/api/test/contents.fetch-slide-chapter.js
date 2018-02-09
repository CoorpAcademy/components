import test from 'ava';
import Promise from 'bluebird';
import macro from '../../test/helpers/macro';
import mockContentService from '../../test/helpers/mock-content-service';
import {
  fetchSlideChapter,
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_FETCH_FAILURE
} from '../contents';

test(
  'should fetch a slide then the chapter it is contained in',
  macro,
  {},
  t => ({
    Content: mockContentService(t)
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
      payload: {chapter_id: 'chapId', _id: 'slideRef', foo: 'bar'}
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {_id: 'chapId', foo: 'baz'}
    }
  ],
  2
);

test(
  'should not fetch the chapter if the slide could not be fetched',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'Could not find item');
      }
    },
    Content: {
      find: () => {
        t.pass();
        return Promise.reject(new Error('Could not find item'));
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
      payload: new Error('Could not find item')
    }
  ],
  2
);

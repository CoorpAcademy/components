import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {
  fetchChapter,
  CHAPTER_FETCH_REQUEST,
  CHAPTER_FETCH_SUCCESS,
  CHAPTER_FETCH_FAILURE
} from '../chapters';

test(
  'should fetch slide',
  macro,
  {},
  t => ({
    Chapters: {
      findById: id => {
        t.is(id, 'foo');
        return id;
      }
    }
  }),
  fetchChapter('foo'),
  [
    {
      type: CHAPTER_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: CHAPTER_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: 'foo'
    }
  ]
);

test(
  'should prevent request if slide already fetched',
  macro,
  set('data.chapters.entities.foo', 'foo', {}),
  t => ({
    Chapters: {
      findById: id => {
        t.is(id, 'foo');
        return id;
      }
    }
  }),
  fetchChapter('foo'),
  [
    {
      type: CHAPTER_FETCH_REQUEST,
      meta: {id: 'foo'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  {},
  t => ({
    Chapters: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  fetchChapter('foo'),
  [
    {
      type: CHAPTER_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: CHAPTER_FETCH_FAILURE,
      meta: {id: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

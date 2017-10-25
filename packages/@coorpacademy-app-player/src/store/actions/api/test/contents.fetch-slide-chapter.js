import test from 'ava';
import macro from '../../test/helpers/macro';
import dataContentReducer from '../../../reducers/data/contents';
import {fetchSlideChapter, CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS} from '../contents';

const chapterFetchSuccessAction = {
  type: CONTENT_FETCH_SUCCESS,
  meta: {ref: 'slideRef', type: 'slide'},
  payload: {chapter_id: 'chapId', _id: 'slideRef'}
};

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
      payload: {_id: 'chapId'}
    }
  ]
);

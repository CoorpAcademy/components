import buildTask from '../../utils/redux-task';
import {getChapter} from '../../utils/state-extract';

export const CHAPTER_FETCH_REQUEST = '@@chapter/FETCH_REQUEST';
export const CHAPTER_FETCH_SUCCESS = '@@chapter/FETCH_SUCCESS';
export const CHAPTER_FETCH_FAILURE = '@@chapter/FETCH_FAILURE';

export const fetchChapter = id => (dispatch, getState, {services}) => {
  const {Chapters} = services;

  const action = buildTask({
    types: [CHAPTER_FETCH_REQUEST, CHAPTER_FETCH_SUCCESS, CHAPTER_FETCH_FAILURE],
    task: () => {
      return Chapters.findById(id);
    },
    meta: {id},
    bailout: getChapter(id)
  });

  return dispatch(action);
};

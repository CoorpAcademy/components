import buildTask from '@coorpacademy/redux-task';
import {getProgressionContent, getNextContent} from '../../utils/state-extract';

export const NEXT_CONTENT_FETCH_REQUEST = '@@next-content/FETCH_REQUEST';
export const NEXT_CONTENT_FETCH_SUCCESS = '@@next-content/FETCH_SUCCESS';
export const NEXT_CONTENT_FETCH_FAILURE = '@@next-content/FETCH_FAILURE';

export const fetchNext = progressionId => (dispatch, getState, {services}) => {
  const {Recommendations} = services;
  const {type, ref} = getProgressionContent(getState());

  const action = buildTask({
    types: [NEXT_CONTENT_FETCH_REQUEST, NEXT_CONTENT_FETCH_SUCCESS, NEXT_CONTENT_FETCH_FAILURE],
    task: () => Recommendations.getNext(type, ref),
    meta: {id: progressionId},
    bailout: getNextContent
  });

  return dispatch(action);
};

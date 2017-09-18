import buildTask from '../../utils/redux-task';
import {getContent} from '../../utils/state-extract';

export const CONTENT_FETCH_REQUEST = '@@content/FETCH_REQUEST';
export const CONTENT_FETCH_SUCCESS = '@@content/FETCH_SUCCESS';
export const CONTENT_FETCH_FAILURE = '@@content/FETCH_FAILURE';

export const fetchContent = (type, ref) => (dispatch, getState, {services}) => {
  const {Content} = services;

  const action = buildTask({
    types: [CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS, CONTENT_FETCH_FAILURE],
    task: () => {
      return Content.find(type, ref);
    },
    meta: {type, ref},
    bailout: getContent(type, ref)
  });

  return dispatch(action);
};

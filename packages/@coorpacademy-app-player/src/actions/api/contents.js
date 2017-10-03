import buildTask from '../../utils/redux-task';
import {getContent, getContentInfo} from '../../utils/state-extract';

export const CONTENT_FETCH_REQUEST = '@@content/FETCH_REQUEST';
export const CONTENT_FETCH_SUCCESS = '@@content/FETCH_SUCCESS';
export const CONTENT_FETCH_FAILURE = '@@content/FETCH_FAILURE';

export const fetchContent = (type, ref) => (dispatch, getState, {services}) => {
  const {Content} = services;

  const action = buildTask({
    types: [CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS, CONTENT_FETCH_FAILURE],
    task: () => Content.find(type, ref),
    meta: {type, ref},
    bailout: getContent(type, ref)
  });

  return dispatch(action);
};

export const CONTENT_INFO_FETCH_REQUEST = '@@content-info/FETCH_REQUEST';
export const CONTENT_INFO_FETCH_SUCCESS = '@@content-info/FETCH_SUCCESS';
export const CONTENT_INFO_FETCH_FAILURE = '@@content-info/FETCH_FAILURE';

export const fetchContentInfo = (content, engine) => (dispatch, getState, {services}) => {
  const {Content} = services;

  const action = buildTask({
    types: [CONTENT_INFO_FETCH_REQUEST, CONTENT_INFO_FETCH_SUCCESS, CONTENT_INFO_FETCH_FAILURE],
    task: () => Content.getInfo(content.ref, engine.ref, engine.version),
    meta: content,
    bailout: getContentInfo
  });

  return dispatch(action);
};

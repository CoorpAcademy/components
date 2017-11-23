import buildTask from '../../utils/redux-task';
import {
  getProgressionContent,
  getCurrentContent,
  getNextContentFromRecommendations
} from '../../utils/state-extract';

export const LOCATION_RETRY_REQUEST = '@@location/RETRY_REQUEST';
export const LOCATION_RETRY_SUCCESS = '@@location/RETRY_SUCCESS';
export const LOCATION_RETRY_FAILURE = '@@location/RETRY_FAILURE';

export const retry = (dispatch, getState, {services}) => {
  const {Location} = services; // eslint-disable-line no-shadow

  const {ref: contentRef} = getProgressionContent(getState());

  const action = buildTask({
    types: [LOCATION_RETRY_REQUEST, LOCATION_RETRY_SUCCESS, LOCATION_RETRY_FAILURE],
    task: () => Location.retry(contentRef),
    meta: {contentRef}
  });

  return dispatch(action);
};

export const LOCATION_EXIT_REQUEST = '@@location/EXIT_REQUEST';
export const LOCATION_EXIT_SUCCESS = '@@location/EXIT_SUCCESS';
export const LOCATION_EXIT_FAILURE = '@@location/EXIT_FAILURE';

export const exit = (dispatch, getState, {services}) => {
  const {Location} = services; // eslint-disable-line no-shadow

  const action = buildTask({
    types: [LOCATION_EXIT_REQUEST, LOCATION_EXIT_SUCCESS, LOCATION_EXIT_FAILURE],
    task: () => Location.exit()
  });

  return dispatch(action);
};

export const LOCATION_BACK_REQUEST = '@@location/BACK_REQUEST';
export const LOCATION_BACK_SUCCESS = '@@location/BACK_SUCCESS';
export const LOCATION_BACK_FAILURE = '@@location/BACK_FAILURE';

export const back = (dispatch, getState, {services}) => {
  const {Location} = services; // eslint-disable-line no-shadow
  const content = getCurrentContent(getState());

  const action = buildTask({
    types: [LOCATION_BACK_REQUEST, LOCATION_BACK_SUCCESS, LOCATION_BACK_FAILURE],
    task: () => Location.back(content)
  });

  return dispatch(action);
};

export const LOCATION_SEE_COMMENT_REQUEST = '@@location/SEE_COMMENT_REQUEST';
export const LOCATION_SEE_COMMENT_SUCCESS = '@@location/SEE_COMMENT_SUCCESS';
export const LOCATION_SEE_COMMENT_FAILURE = '@@location/SEE_COMMENT_FAILURE';

export const seeComment = (dispatch, getState, {services}) => {
  const {Location} = services; // eslint-disable-line no-shadow
  const content = getCurrentContent(getState());

  const action = buildTask({
    types: [
      LOCATION_SEE_COMMENT_REQUEST,
      LOCATION_SEE_COMMENT_SUCCESS,
      LOCATION_SEE_COMMENT_FAILURE
    ],
    task: () => Location.seeComment(content)
  });

  return dispatch(action);
};

export const LOCATION_NEXT_CONTENT_REQUEST = '@@location/LOCATION_NEXT_CONTENT_REQUEST';
export const LOCATION_NEXT_CONTENT_SUCCESS = '@@location/LOCATION_NEXT_CONTENT_SUCCESS';
export const LOCATION_NEXT_CONTENT_FAILURE = '@@location/LOCATION_NEXT_CONTENT_FAILURE';

export const nextLevel = (dispatch, getState, {services}) => {
  const {Location} = services; // eslint-disable-line no-shadow

  const nextContent = getNextContentFromRecommendations(getState());

  if (nextContent) {
    const action = buildTask({
      types: [
        LOCATION_NEXT_CONTENT_REQUEST,
        LOCATION_NEXT_CONTENT_SUCCESS,
        LOCATION_NEXT_CONTENT_FAILURE
      ],
      task: () => Location.nextLevel(nextContent.ref)
    });

    return dispatch(action);
  }
};

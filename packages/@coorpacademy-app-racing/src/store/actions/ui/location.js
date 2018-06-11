import buildTask from '@coorpacademy/redux-task';
import {
  getProgressionContent,
  getCurrentContent,
  getCurrentProgressionId
} from '../../utils/state-extract';
import {selectRoute} from './route';

export const UI_SEE_QUESTION = '@@location/SEE_QUESTION';

export const seeQuestion = async (dispatch, getState) => {
  const action = {
    type: UI_SEE_QUESTION,
    meta: {id: getCurrentProgressionId(getState())}
  };

  await dispatch(action);
  return dispatch(selectRoute('question'));
};

export const LOCATION_RETRY_REQUEST = '@@location/RETRY_REQUEST';
export const LOCATION_RETRY_SUCCESS = '@@location/RETRY_SUCCESS';
export const LOCATION_RETRY_FAILURE = '@@location/RETRY_FAILURE';

export const retry = (dispatch, getState, {services}) => {
  const {ref: contentRef} = getProgressionContent(getState());

  const action = buildTask({
    types: [LOCATION_RETRY_REQUEST, LOCATION_RETRY_SUCCESS, LOCATION_RETRY_FAILURE],
    task: () => services.Location.retry(contentRef),
    meta: {contentRef}
  });

  return dispatch(action);
};

export const LOCATION_EXIT_REQUEST = '@@location/EXIT_REQUEST';
export const LOCATION_EXIT_SUCCESS = '@@location/EXIT_SUCCESS';
export const LOCATION_EXIT_FAILURE = '@@location/EXIT_FAILURE';

export const exit = (dispatch, getState, {services}) => {
  const action = buildTask({
    types: [LOCATION_EXIT_REQUEST, LOCATION_EXIT_SUCCESS, LOCATION_EXIT_FAILURE],
    task: () => services.Location.exit()
  });

  return dispatch(action);
};

export const LOCATION_BACK_REQUEST = '@@location/BACK_REQUEST';
export const LOCATION_BACK_SUCCESS = '@@location/BACK_SUCCESS';
export const LOCATION_BACK_FAILURE = '@@location/BACK_FAILURE';

export const back = (dispatch, getState, {services}) => {
  const content = getCurrentContent(getState());
  const action = buildTask({
    types: [LOCATION_BACK_REQUEST, LOCATION_BACK_SUCCESS, LOCATION_BACK_FAILURE],
    task: () => services.Location.back(content)
  });

  return dispatch(action);
};

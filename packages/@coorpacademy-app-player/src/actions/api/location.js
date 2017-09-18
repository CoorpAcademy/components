import constant from 'lodash/fp/constant';
import buildTask from '../../utils/redux-task';
import {getProgressionContent} from '../../utils/state-extract';

export const LOCATION_RETRY_REQUEST = '@@location/RETRY_REQUEST';
export const LOCATION_RETRY_SUCCESS = '@@location/RETRY_SUCCESS';
export const LOCATION_RETRY_FAILURE = '@@location/RETRY_FAILURE';

export const retry = (dispatch, getState, {services}) => {
  const {Location} = services; // eslint-disable-line no-shadow

  const {ref: contentRef} = getProgressionContent(getState());

  const action = buildTask({
    types: [LOCATION_RETRY_REQUEST, LOCATION_RETRY_SUCCESS, LOCATION_RETRY_FAILURE],
    task: () => Location.retry(contentRef),
    bailout: constant(false),
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
    task: () => Location.exit(),
    bailout: constant(false)
  });

  return dispatch(action);
};

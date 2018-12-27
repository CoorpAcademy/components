// @flow

import buildTask from '@coorpacademy/redux-task';
import {getProgressionContent, getNextContent} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {Dispatch, NextContentActions, GetState} from '../../definitions/redux';

export const NEXT_CONTENT_FETCH_REQUEST: string = '@@next-content/FETCH_REQUEST';
export const NEXT_CONTENT_FETCH_SUCCESS: string = '@@next-content/FETCH_SUCCESS';
export const NEXT_CONTENT_FETCH_FAILURE: string = '@@next-content/FETCH_FAILURE';

export const fetchNext = (progressionId: string) => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): Dispatch => {
  const {Recommendations} = services;
  const {type, ref} = getProgressionContent(getState());

  const action: NextContentActions = buildTask({
    types: [NEXT_CONTENT_FETCH_REQUEST, NEXT_CONTENT_FETCH_SUCCESS, NEXT_CONTENT_FETCH_FAILURE],
    task: () => Recommendations.getNext(type, ref),
    meta: {id: progressionId},
    bailout: getNextContent
  });

  return dispatch(action);
};

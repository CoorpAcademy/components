// @flow

import buildTask from '@coorpacademy/redux-task';
import {getProgressionContent, getNextContent} from '../../utils/state-extract';
import type {Services} from '../../definitions/services';
import type {
  Action,
  DispatchedAction,
  GetState,
  ThunkAction,
  Dispatch,
} from '../../definitions/redux';

export const NEXT_CONTENT_FETCH_REQUEST: string = '@@next-content/FETCH_REQUEST';
export const NEXT_CONTENT_FETCH_SUCCESS: string = '@@next-content/FETCH_SUCCESS';
export const NEXT_CONTENT_FETCH_FAILURE: string = '@@next-content/FETCH_FAILURE';

export const fetchNext =
  (progressionId: string): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, {services}: {services: Services}): DispatchedAction => {
    const {Recommendations} = services;
    const content = getProgressionContent(getState());

    if (!content) {
      return dispatch({
        type: NEXT_CONTENT_FETCH_FAILURE,
        meta: {id: progressionId},
        payload: `progression "${progressionId}" has no content.`,
      });
    }

    const {type, ref} = content;

    const action: Action = buildTask({
      types: [NEXT_CONTENT_FETCH_REQUEST, NEXT_CONTENT_FETCH_SUCCESS, NEXT_CONTENT_FETCH_FAILURE],
      task: () => Recommendations.getNext(type, ref),
      meta: {id: progressionId},
      bailout: getNextContent,
    });

    return dispatch(action);
  };

// @flow strict

import buildTask from '@coorpacademy/redux-task';
import {extractClue} from '../../utils/state-extract';
import type {
  Dispatch,
  DispatchedAction,
  Action,
  GetState,
  ThunkAction,
  Options
} from '../../definitions/redux';

export const CLUE_FETCH_REQUEST: string = '@@clue/CREATE_REQUEST';
export const CLUE_FETCH_SUCCESS: string = '@@clue/CREATE_SUCCESS';
export const CLUE_FETCH_FAILURE: string = '@@clue/CREATE_FAILURE';

export const fetchClue = (progressionId: string, slideId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: Options
): // $FlowFixMe
DispatchedAction => {
  const {Clues} = services;

  const action: Action = buildTask({
    types: [CLUE_FETCH_REQUEST, CLUE_FETCH_SUCCESS, CLUE_FETCH_FAILURE],
    task: () => Clues.findById(progressionId, slideId),
    meta: {progressionId, slideId},
    bailout: extractClue(progressionId, slideId)
  });

  return dispatch(action);
};

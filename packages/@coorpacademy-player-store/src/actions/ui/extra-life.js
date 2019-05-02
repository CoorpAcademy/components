// @flow strict

import type {ProgressionId} from '@coorpacademy/progression-engine';
import {registerAcceptExtraLife, registerRefuseExtraLife} from '../api/progressions';
import {getCurrentProgressionId} from '../../utils/state-extract';
import type {DispatchedAction, GetState} from '../../definitions/redux';
import {UI_PROGRESSION_ACTION_TYPES, selectProgression, progressionUpdated} from './progressions';

const reset = (progressionId: ProgressionId) => async (
  dispatch: Function,
  getState: GetState
): DispatchedAction => {
  await dispatch(
    progressionUpdated(progressionId, UI_PROGRESSION_ACTION_TYPES.PROGRESSION_UPDATED_ON_MOVE)
  );
  return dispatch(selectProgression(progressionId));
};

export const refuseExtraLife = () => async (
  dispatch: Function,
  getState: GetState
): DispatchedAction => {
  const progressionId = getCurrentProgressionId(getState());
  await dispatch(registerRefuseExtraLife(progressionId));
  return dispatch(reset(progressionId));
};

export const acceptExtraLife = () => async (
  dispatch: Function,
  getState: GetState
): DispatchedAction => {
  const progressionId = getCurrentProgressionId(getState());
  await dispatch(registerAcceptExtraLife(progressionId));
  return dispatch(reset(progressionId));
};

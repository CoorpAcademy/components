// @flow strict

import type {ProgressionId} from '@coorpacademy/progression-engine';
import {registerAcceptExtraLife, registerRefuseExtraLife} from '../api/progressions';
import {getCurrentProgressionId} from '../../utils/state-extract';
import type {DispatchedAction, GetState, Dispatch} from '../../definitions/redux';
import {PROGRESSION_UPDATED_ON_MOVE, progressionUpdated} from '../api/analytics';
import {selectProgression} from './progressions';

const reset =
  (progressionId: ProgressionId) =>
  async (dispatch: Dispatch, getState: GetState): DispatchedAction => {
    await dispatch(progressionUpdated(progressionId, PROGRESSION_UPDATED_ON_MOVE));
    return dispatch(selectProgression(progressionId));
  };

export const refuseExtraLife =
  () =>
  async (dispatch: Dispatch, getState: GetState): DispatchedAction => {
    const progressionId = getCurrentProgressionId(getState());
    await dispatch(registerRefuseExtraLife(progressionId));
    return dispatch(reset(progressionId));
  };

export const acceptExtraLife =
  () =>
  async (dispatch: Dispatch, getState: GetState): DispatchedAction => {
    const progressionId = getCurrentProgressionId(getState());
    await dispatch(registerAcceptExtraLife(progressionId));
    return dispatch(reset(progressionId));
  };

import {acceptExtraLife, refuseExtraLife} from '../api/progressions';
import {selectProgression, progressionUpdated} from './progressions';

const reset = progressionId => async dispatch => {
  await dispatch(progressionUpdated(progressionId));
  return dispatch(selectProgression(progressionId));
};

export const refuseExtraLifeAndReset = progressionId => async dispatch => {
  await dispatch(refuseExtraLife(progressionId));
  return dispatch(reset(progressionId));
};

export const acceptExtraLifeAndReset = progressionId => async dispatch => {
  await dispatch(acceptExtraLife(progressionId));
  return dispatch(reset(progressionId));
};

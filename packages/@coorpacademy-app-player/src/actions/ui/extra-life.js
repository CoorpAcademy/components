import {requestExtralifeRefused} from '../api/progressions';
import {selectProgression} from './progressions';

export const UI_REVIVAL_PENDING = '@@ui/REVIVAL_PENDING';

export const pending = () => ({
  type: UI_REVIVAL_PENDING
});

// eslint-disable-next-line import/prefer-default-export
export const refuseExtraLife = progressionId => async dispatch => {
  await dispatch(requestExtralifeRefused(progressionId));
  return dispatch(selectProgression(progressionId));
};

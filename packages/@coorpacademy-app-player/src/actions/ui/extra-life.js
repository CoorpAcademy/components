import {requestExtralifeRefused} from '../api/progressions';
import {selectProgression} from './progressions';

// eslint-disable-next-line import/prefer-default-export
export const refuseExtraLife = progressionId => async dispatch => {
  await dispatch(requestExtralifeRefused(progressionId));

  return dispatch(selectProgression(progressionId));
};

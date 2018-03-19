import get from 'lodash/fp/get';
import {getCurrentSlide, getCurrentProgressionId} from '../../utils/state-extract';
import {fetchClue} from '../api/clues';
import {requestClue} from '../api/progressions';
import {progressionUpdated} from './progressions';
import {selectRoute} from './route';

const getId = get('_id');

// eslint-disable-next-line import/prefer-default-export
export const selectClue = (dispatch, getState) => {
  return dispatch(selectRoute('clue'));
};
export const getClue = async (dispatch, getState) => {
  const state = getState();
  const progressionId = getCurrentProgressionId(state);
  const slide = getCurrentSlide(state);
  const slideId = getId(slide);

  await dispatch(requestClue(progressionId, slideId));
  await dispatch(fetchClue(progressionId, slideId));
  return dispatch(progressionUpdated(progressionId));
};

import get from 'lodash/fp/get';
import {getCurrentSlide, getCurrentProgressionId} from '../../utils/state-extract';
import {fetchClue} from '../api/clues';
import {requestClue} from '../api/progressions';
import {selectRoute} from './route';

const getId = get('_id');

export const selectClue = async (dispatch, getState) => {
  const state = getState();
  const progressionId = getCurrentProgressionId(state);
  const slide = getCurrentSlide(state);
  const slideId = getId(slide);

  await dispatch(selectRoute('clue'));
  await dispatch(requestClue(progressionId, slideId));
  return dispatch(fetchClue(progressionId, slideId));
};

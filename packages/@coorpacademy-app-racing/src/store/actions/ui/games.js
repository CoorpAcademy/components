import {selectProgression} from './progressions';

export const UI_OPEN_GAME = '@@ui/OPEN_GAME';

export const openGame = (id, userId) => async (dispatch, getState) => {
  await dispatch({type: UI_OPEN_GAME, payload: {id, userId}});

  await dispatch(selectProgression(id));
};

import buildTask from '../../utils/redux-task';
import {getClue, getEngine} from '../../utils/state-extract';

export const CLUE_FETCH_REQUEST = '@@clue/CREATE_REQUEST';
export const CLUE_FETCH_SUCCESS = '@@clue/CREATE_SUCCESS';
export const CLUE_FETCH_FAILURE = '@@clue/CREATE_FAILURE';

export const fetchClue = (progressionId, slideId) => (dispatch, getState, {services}) => {
  const {Clues} = services;
  const engine = getEngine(getState());

  const action = buildTask({
    types: [CLUE_FETCH_REQUEST, CLUE_FETCH_SUCCESS, CLUE_FETCH_FAILURE],
    task: () => Clues.findById(engine, progressionId, slideId),
    meta: {progressionId, slideId},
    bailout: getClue(progressionId, slideId)
  });

  return dispatch(action);
};

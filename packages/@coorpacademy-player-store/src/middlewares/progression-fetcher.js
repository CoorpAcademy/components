import buildTask from '@coorpacademy/redux-task';

import {getProgression} from '../utils/state-extract';

export const PROGRESSION_FETCH_REQUEST = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE = '@@progression/FETCH_FAILURE';

const progressions = ({services}) => store => next => action => {
  if (action.type === PROGRESSION_FETCH_REQUEST) {
    const {Progressions} = services;
    const {meta: {id}} = action;

    const task = buildTask({
      types: [PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
      task: () => Progressions.findById(id),
      meta: {id},
      bailout: getProgression(id)
    });

    return store.dispatch(task);
  }
  return next(action);
};

export default progressions;

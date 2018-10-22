import buildTask from '@coorpacademy/redux-task';
import {getEngineConfig, getCurrentUserId, getCurrentUserState} from '../../utils/state-extract';

export const PROGRESSION_FETCH_REQUEST = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE = '@@progression/FETCH_FAILURE';

export const fetchProgression = id => (dispatch, getState, {services}) => {
  const {Progressions} = services;

  const action = buildTask({
    types: [PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
    task: () => Progressions.findById(id),
    meta: {id}
  });

  return dispatch(action);
};

export const ENGINE_CONFIG_FETCH_REQUEST = '@@progression/CONFIG_REQUEST';
export const ENGINE_CONFIG_FETCH_SUCCESS = '@@progression/CONFIG_SUCCESS';
export const ENGINE_CONFIG_FETCH_FAILURE = '@@progression/CONFIG_FAILURE';

export const fetchEngineConfig = engine => (dispatch, getState, {services}) => {
  const {Progressions} = services;

  const action = buildTask({
    types: [ENGINE_CONFIG_FETCH_REQUEST, ENGINE_CONFIG_FETCH_SUCCESS, ENGINE_CONFIG_FETCH_FAILURE],
    task: () => Progressions.getEngineConfig(engine),
    meta: {engine},
    bailout: getEngineConfig
  });

  return dispatch(action);
};

export const PROGRESSION_CREATE_ANSWER_REQUEST = '@@progression/CREATE_ANSWER_REQUEST';
export const PROGRESSION_CREATE_ANSWER_SUCCESS = '@@progression/CREATE_ANSWER_SUCCESS';
export const PROGRESSION_CREATE_ANSWER_FAILURE = '@@progression/CREATE_ANSWER_FAILURE';

export const createAnswer = (progressionId, answer) => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const state = getState();

  const user = getCurrentUserState(state);
  const nextContent = user.nextContent;
  const team = user.team;
  const author = getCurrentUserId(state);

  const action = buildTask({
    types: [
      PROGRESSION_CREATE_ANSWER_REQUEST,
      PROGRESSION_CREATE_ANSWER_SUCCESS,
      PROGRESSION_CREATE_ANSWER_FAILURE
    ],
    task: () =>
      Progressions.postAnswer(progressionId, {
        content: nextContent,
        answer
      }),
    meta: {progressionId, author, team}
  });

  return dispatch(action);
};

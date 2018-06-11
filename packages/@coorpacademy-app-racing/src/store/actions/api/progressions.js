import get from 'lodash/fp/get';
import buildTask from '@coorpacademy/redux-task';
import {getEngineConfig, getCurrentUserState} from '../../utils/state-extract';

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
  const nextContent = getCurrentUserState(getState()).nextContent;

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
    meta: {progressionId}
  });

  return dispatch(action);
};

export const PROGRESSION_WAIT_FOR_REFRESH_REQUEST = '@@progression/WAIT_FOR_REFRESH_REQUEST';
export const PROGRESSION_WAIT_FOR_REFRESH_SUCCESS = '@@progression/WAIT_FOR_REFRESH_SUCCESS';
export const PROGRESSION_WAIT_FOR_REFRESH_FAILURE = '@@progression/WAIT_FOR_REFRESH_FAILURE';

export const waitForRefresh = id => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const currentView = get(['ui', 'route', id], getState());

  const action = buildTask({
    types: [
      PROGRESSION_WAIT_FOR_REFRESH_REQUEST,
      PROGRESSION_WAIT_FOR_REFRESH_SUCCESS,
      PROGRESSION_WAIT_FOR_REFRESH_FAILURE
    ],
    task: () => Progressions.waitForRefresh(id),
    meta: {id, currentView}
  });

  return dispatch(action);
};

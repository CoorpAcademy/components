import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import buildTask from '../../utils/redux-task';
import {getProgression, getBestScore, getEngineConfig} from '../../utils/state-extract';

export const PROGRESSION_FETCH_REQUEST = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE = '@@progression/FETCH_FAILURE';

export const fetchProgression = id => (dispatch, getState, {services}) => {
  const {Progressions} = services;

  const action = buildTask({
    types: [PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
    task: () => Progressions.findById(id),
    meta: {id},
    bailout: getProgression(id)
  });

  return dispatch(action);
};

export const ENGINE_CONFIG_FETCH_REQUEST = '@@progression/CONFIG_REQUEST';
export const ENGINE_CONFIG_FETCH_SUCCESS = '@@progression/CONFIG_SUCCESS';
export const ENGINE_CONFIG_FETCH_FAILURE = '@@progression/CONFIG_FAILURE';

export const fetchEngineConfig = version => (dispatch, getState, {services}) => {
  const {Progressions} = services;

  const action = buildTask({
    types: [ENGINE_CONFIG_FETCH_REQUEST, ENGINE_CONFIG_FETCH_SUCCESS, ENGINE_CONFIG_FETCH_FAILURE],
    task: () => Progressions.getConfig(version),
    bailout: getEngineConfig
  });

  return dispatch(action);
};

export const PROGRESSION_CREATE_ANSWER_REQUEST = '@@progression/CREATE_ANSWER_REQUEST';
export const PROGRESSION_CREATE_ANSWER_SUCCESS = '@@progression/CREATE_ANSWER_SUCCESS';
export const PROGRESSION_CREATE_ANSWER_FAILURE = '@@progression/CREATE_ANSWER_FAILURE';

export const createAnswer = (progressionId, answers) => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const progression = getProgression(progressionId)(getState());
  const nextContent = progression.state.nextContent;

  const action = buildTask({
    types: [
      PROGRESSION_CREATE_ANSWER_REQUEST,
      PROGRESSION_CREATE_ANSWER_SUCCESS,
      PROGRESSION_CREATE_ANSWER_FAILURE
    ],
    task: () =>
      Progressions.createAnswer(progressionId, {
        content: nextContent,
        answers
      }),
    meta: {progressionId}
  });

  return dispatch(action);
};

export const PROGRESSION_REQUEST_CLUE_REQUEST = '@@progression/REQUEST_CLUE_REQUEST';
export const PROGRESSION_REQUEST_CLUE_SUCCESS = '@@progression/REQUEST_CLUE_SUCCESS';
export const PROGRESSION_REQUEST_CLUE_FAILURE = '@@progression/REQUEST_CLUE_FAILURE';

export const requestClue = (progressionId, slideId) => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const state = getState();
  const progression = getProgression(progressionId)(state);

  const requestedClues = get('state.requestedClues', progression);

  const action = buildTask({
    types: [
      PROGRESSION_REQUEST_CLUE_REQUEST,
      PROGRESSION_REQUEST_CLUE_SUCCESS,
      PROGRESSION_REQUEST_CLUE_FAILURE
    ],
    task: () =>
      Progressions.requestClue(progressionId, {
        content: {
          ref: slideId,
          type: 'slide'
        }
      }),
    bailout: () => includes(slideId, requestedClues),
    meta: {progressionId}
  });

  return dispatch(action);
};

export const PROGRESSION_FETCH_BESTOF_REQUEST = '@@progression/FETCH_BESTOF_REQUEST';
export const PROGRESSION_FETCH_BESTOF_SUCCESS = '@@progression/FETCH_BESTOF_SUCCESS';
export const PROGRESSION_FETCH_BESTOF_FAILURE = '@@progression/FETCH_BESTOF_FAILURE';

export const fetchBestProgression = (contentRef, progressionId) => (
  dispatch,
  getState,
  {services}
) => {
  const {Progressions} = services;

  const action = buildTask({
    types: [
      PROGRESSION_FETCH_BESTOF_REQUEST,
      PROGRESSION_FETCH_BESTOF_SUCCESS,
      PROGRESSION_FETCH_BESTOF_FAILURE
    ],
    task: () => Progressions.findBestOf(contentRef, progressionId),
    bailout: getBestScore,
    meta: {chapterId: contentRef}
  });

  return dispatch(action);
};

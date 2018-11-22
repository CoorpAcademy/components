import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import buildTask from '@coorpacademy/redux-task';
import {
  getProgression,
  getBestScore,
  getEngine,
  getEngineConfig,
  getCurrentSlide,
  getPreviousSlide
} from '../../utils/state-extract';

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
  const progression = getProgression(progressionId)(getState());
  const nextContent = progression.state.nextContent;

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
    meta: {
      progressionId,
      content: nextContent,
      answer
    }
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

export const PROGRESSION_EXTRALIFEREFUSED_REQUEST = '@@progression/EXTRALIFEREFUSED_REQUEST';
export const PROGRESSION_EXTRALIFEREFUSED_SUCCESS = '@@progression/EXTRALIFEREFUSED_SUCCESS';
export const PROGRESSION_EXTRALIFEREFUSED_FAILURE = '@@progression/EXTRALIFEREFUSED_FAILURE';

export const refuseExtraLife = progressionId => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const progression = getProgression(progressionId)(getState());
  const nextContent = get('state.nextContent', progression);

  const action = buildTask({
    types: [
      PROGRESSION_EXTRALIFEREFUSED_REQUEST,
      PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
      PROGRESSION_EXTRALIFEREFUSED_FAILURE
    ],
    task: () =>
      Progressions.refuseExtraLife(progressionId, {
        content: nextContent
      }),
    meta: {progressionId}
  });

  return dispatch(action);
};

export const PROGRESSION_EXTRALIFEACCEPTED_REQUEST = '@@progression/EXTRALIFEACCEPTED_REQUEST';
export const PROGRESSION_EXTRALIFEACCEPTED_SUCCESS = '@@progression/EXTRALIFEACCEPTED_SUCCESS';
export const PROGRESSION_EXTRALIFEACCEPTED_FAILURE = '@@progression/EXTRALIFEACCEPTED_FAILURE';

export const acceptExtraLife = progressionId => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  const progression = getProgression(progressionId)(getState());
  const nextContent = get('state.nextContent', progression);

  const action = buildTask({
    types: [
      PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
      PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
      PROGRESSION_EXTRALIFEACCEPTED_FAILURE
    ],
    task: () =>
      Progressions.acceptExtraLife(progressionId, {
        content: nextContent
      }),
    meta: {progressionId}
  });

  return dispatch(action);
};

export const PROGRESSION_FETCH_BESTOF_REQUEST = '@@progression/FETCH_BESTOF_REQUEST';
export const PROGRESSION_FETCH_BESTOF_SUCCESS = '@@progression/FETCH_BESTOF_SUCCESS';
export const PROGRESSION_FETCH_BESTOF_FAILURE = '@@progression/FETCH_BESTOF_FAILURE';

export const fetchBestProgression = (progressionContent, progressionId) => (
  dispatch,
  getState,
  {services}
) => {
  const {Progressions} = services;
  const {type, ref} = progressionContent;
  const engine = getEngine(getState());

  const action = buildTask({
    types: [
      PROGRESSION_FETCH_BESTOF_REQUEST,
      PROGRESSION_FETCH_BESTOF_SUCCESS,
      PROGRESSION_FETCH_BESTOF_FAILURE
    ],
    task: () => Progressions.findBestOf(engine.ref, type, ref, progressionId),
    bailout: pipe(getBestScore, score => score >= 0),
    meta: {type, ref}
  });

  return dispatch(action);
};

export const PROGRESSION_RESOURCE_VIEWED_REQUEST = '@@progression/RESOURCE_VIEWED_REQUEST';
export const PROGRESSION_RESOURCE_VIEWED_SUCCESS = '@@progression/RESOURCE_VIEWED_SUCCESS';
export const PROGRESSION_RESOURCE_VIEWED_FAILURE = '@@progression/RESOURCE_VIEWED_FAILURE';

export const markResourceAsViewed = (progressionId, resource) => (
  dispatch,
  getState,
  {services}
) => {
  const {Progressions} = services;
  const state = getState();
  const {_id, ref = _id, type} = resource;
  const slide = getCurrentSlide(state) || getPreviousSlide(state);

  const payload = {
    resource: {
      ref,
      type,
      version: '1'
    },
    content: {
      type: 'chapter',
      ref: slide.chapter_id
    }
  };

  const action = buildTask({
    types: [
      PROGRESSION_RESOURCE_VIEWED_REQUEST,
      PROGRESSION_RESOURCE_VIEWED_SUCCESS,
      PROGRESSION_RESOURCE_VIEWED_FAILURE
    ],
    task: () => Progressions.markResourceAsViewed(progressionId, payload),
    meta: {progressionId, resource}
  });

  return dispatch(action);
};

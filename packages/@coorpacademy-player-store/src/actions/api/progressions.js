// @flow

import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import buildTask from '@coorpacademy/redux-task';
import type {
  Answer,
  Content,
  Engine,
  Progression,
  Slide,
  State
} from '@coorpacademy/progression-engine';
import type {Services} from '../../definitions/services';
import type {Resource} from '../../definitions/models';

import {
  getProgression,
  getBestScore,
  getEngine,
  getEngineConfig,
  getCurrentSlide,
  getPreviousSlide
} from '../../utils/state-extract';
import type {
  Action,
  Dispatch,
  DispatchedAction,
  GetState,
  ThunkAction
} from '../../definitions/redux';

export const PROGRESSION_FETCH_REQUEST: string = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS: string = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE: string = '@@progression/FETCH_FAILURE';

export type ProgressionAction = {
  ...Action,
  payload: Progression
};

export type FetchSuccessAction = {
  ...Action,
  payload: Progression,
  type: '@@progression/FETCH_SUCCESS'
};

export const fetchProgression = (id: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;

  const action: Action = buildTask({
    types: [PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
    task: () => Progressions.findById(id),
    meta: {id},
    bailout: getProgression(id)
  });

  return dispatch(action);
};

export const ENGINE_CONFIG_FETCH_REQUEST: string = '@@progression/CONFIG_REQUEST';
export const ENGINE_CONFIG_FETCH_SUCCESS: string = '@@progression/CONFIG_SUCCESS';
export const ENGINE_CONFIG_FETCH_FAILURE: string = '@@progression/CONFIG_FAILURE';

export const fetchEngineConfig = (engine: Engine): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;

  const action: Action = buildTask({
    types: [ENGINE_CONFIG_FETCH_REQUEST, ENGINE_CONFIG_FETCH_SUCCESS, ENGINE_CONFIG_FETCH_FAILURE],
    task: () => Progressions.getEngineConfig(engine),
    meta: {engine},
    bailout: getEngineConfig
  });

  return dispatch(action);
};

export const PROGRESSION_CREATE_ANSWER_REQUEST: string = '@@progression/CREATE_ANSWER_REQUEST';
export const PROGRESSION_CREATE_ANSWER_SUCCESS: string = '@@progression/CREATE_ANSWER_SUCCESS';
export const PROGRESSION_CREATE_ANSWER_FAILURE: string = '@@progression/CREATE_ANSWER_FAILURE';

export const createAnswer = (progressionId: string, answer: Answer): ThunkAction => (
  dispatch: Function,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;
  const progression: Progression = getProgression(progressionId)(getState());

  if (!progression.state) {
    return dispatch({
      type: PROGRESSION_CREATE_ANSWER_FAILURE,
      payload: `progression "${progressionId}" has no state.`
    });
  }

  const nextContent: Content = progression.state.nextContent;

  const action: Action = buildTask({
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

export const PROGRESSION_REQUEST_CLUE_REQUEST: string = '@@progression/REQUEST_CLUE_REQUEST';
export const PROGRESSION_REQUEST_CLUE_SUCCESS: string = '@@progression/REQUEST_CLUE_SUCCESS';
export const PROGRESSION_REQUEST_CLUE_FAILURE: string = '@@progression/REQUEST_CLUE_FAILURE';

export const requestClue = (progressionId: string, slideId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;
  const state: State = getState();
  const progression: Progression = getProgression(progressionId)(state);
  const requestedClues = get('state.requestedClues', progression);

  const action: Action = buildTask({
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

export const PROGRESSION_EXTRALIFEREFUSED_REQUEST: string =
  '@@progression/EXTRALIFEREFUSED_REQUEST';
export const PROGRESSION_EXTRALIFEREFUSED_SUCCESS: string =
  '@@progression/EXTRALIFEREFUSED_SUCCESS';
export const PROGRESSION_EXTRALIFEREFUSED_FAILURE: string =
  '@@progression/EXTRALIFEREFUSED_FAILURE';

export const refuseExtraLife = (progressionId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;
  const progression: Progression = getProgression(progressionId)(getState());
  const nextContent: Content = get('state.nextContent', progression);

  const action: Action = buildTask({
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

export const PROGRESSION_EXTRALIFEACCEPTED_REQUEST: string =
  '@@progression/EXTRALIFEACCEPTED_REQUEST';
export const PROGRESSION_EXTRALIFEACCEPTED_SUCCESS: string =
  '@@progression/EXTRALIFEACCEPTED_SUCCESS';
export const PROGRESSION_EXTRALIFEACCEPTED_FAILURE: string =
  '@@progression/EXTRALIFEACCEPTED_FAILURE';

export const acceptExtraLife = (progressionId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;
  const progression: Progression = getProgression(progressionId)(getState());
  const nextContent: Content = get('state.nextContent', progression);

  const action: Action = buildTask({
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

export const PROGRESSION_FETCH_BESTOF_REQUEST: string = '@@progression/FETCH_BESTOF_REQUEST';
export const PROGRESSION_FETCH_BESTOF_SUCCESS: string = '@@progression/FETCH_BESTOF_SUCCESS';
export const PROGRESSION_FETCH_BESTOF_FAILURE: string = '@@progression/FETCH_BESTOF_FAILURE';

export const fetchBestProgression = (
  progressionContent: Content,
  progressionId: string
): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;
  const {type, ref} = progressionContent;
  const engine: Engine = getEngine(getState());

  const action: Action = buildTask({
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

export const PROGRESSION_RESOURCE_VIEWED_REQUEST: string = '@@progression/RESOURCE_VIEWED_REQUEST';
export const PROGRESSION_RESOURCE_VIEWED_SUCCESS: string = '@@progression/RESOURCE_VIEWED_SUCCESS';
export const PROGRESSION_RESOURCE_VIEWED_FAILURE: string = '@@progression/RESOURCE_VIEWED_FAILURE';

export const markResourceAsViewed = (progressionId: string, resource: Resource): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
  {services}: {services: Services}
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  const {Progressions} = services;
  const state: State = getState();
  const {_id, ref = _id, type} = resource;
  const slide: Slide = getCurrentSlide(state) || getPreviousSlide(state);

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

  const action: Action = buildTask({
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

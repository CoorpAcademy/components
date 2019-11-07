// @flow strict

import {get, last, isNil} from 'lodash/fp';
import buildTask from '@coorpacademy/redux-task';
import type {ProgressionId, Progression} from '@coorpacademy/progression-engine';
import {fetchProgression, fetchEngineConfig, fetchBestProgression} from '../api/progressions';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchContent, fetchContentInfo, fetchSlideChapter} from '../api/contents';
import {fetchRecommendations} from '../api/recommendations';
import {fetchNext} from '../api/next-content';

import {fetchAnswer} from '../api/answers';
import {
  getEngine,
  getProgressionContent,
  getCurrentProgressionId,
  getStepContent,
  getPrevStepContent,
  getSlide
} from '../../utils/state-extract';
import type {Action, DispatchedAction, GetState, Options} from '../../definitions/redux';
import type {ExitNodeRef} from '../../definitions/models';
import {selectRoute} from './route';

/* eslint-disable flowtype/type-id-match */
type UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';
type UI_SELECT_PROGRESSION_FAILURE = '@@ui/SELECT_PROGRESSION_FAILURE';
type OPEN_ASSISTANCE_REQUEST = '@@progression/OPEN_ASSISTANCE_REQUEST';
type OPEN_ASSISTANCE_SUCCESS = '@@progression/OPEN_ASSISTANCE_SUCCESS';
type OPEN_ASSISTANCE_FAILURE = '@@progression/OPEN_ASSISTANCE_FAILURE';
/* eslint-enable flowtype/type-id-match */

export const UI_PROGRESSION_ACTION_TYPES: {
  SELECT_PROGRESSION: UI_SELECT_PROGRESSION,
  SELECT_PROGRESSION_FAILURE: UI_SELECT_PROGRESSION_FAILURE,
  OPEN_ASSISTANCE_REQUEST: OPEN_ASSISTANCE_REQUEST,
  OPEN_ASSISTANCE_SUCCESS: OPEN_ASSISTANCE_SUCCESS,
  OPEN_ASSISTANCE_FAILURE: OPEN_ASSISTANCE_FAILURE
} = {
  SELECT_PROGRESSION: '@@ui/SELECT_PROGRESSION',
  SELECT_PROGRESSION_FAILURE: '@@ui/SELECT_PROGRESSION_FAILURE',
  OPEN_ASSISTANCE_REQUEST: '@@progression/OPEN_ASSISTANCE_REQUEST',
  OPEN_ASSISTANCE_SUCCESS: '@@progression/OPEN_ASSISTANCE_SUCCESS',
  OPEN_ASSISTANCE_FAILURE: '@@progression/OPEN_ASSISTANCE_FAILURE'
};

type SelectProgressionPayload = {
  id: ProgressionId
};

export type SelectAction = {
  ...Action,
  type: UI_SELECT_PROGRESSION,
  payload: SelectProgressionPayload
};

export const unselectProgression: SelectAction = {
  type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
  payload: {
    id: ''
  }
};

export const selectProgression = (id: ProgressionId) => async (
  dispatch: Function,
  getState: GetState
): DispatchedAction => {
  const selectAction: SelectAction = {
    type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION,
    payload: {
      id
    }
  };

  await dispatch(selectAction);

  const progressionId = getCurrentProgressionId(getState());

  if (!progressionId) {
    return dispatch({
      type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION_FAILURE,
      payload: `progressionId must be defined.`
    });
  }

  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  await dispatch(fetchStartRank());
  const progressionContent = getProgressionContent(getState());

  if (!progressionContent) {
    return dispatch({
      type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION_FAILURE,
      payload: `progression "${progressionId}" has no content.`
    });
  }
  const engine = getEngine(getState());

  if (!engine) {
    return dispatch({
      type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION_FAILURE,
      payload: `progression "${progressionId}" has no engine.`
    });
  }

  await dispatch(fetchContent(progressionContent.type, progressionContent.ref));
  await dispatch(fetchBestProgression(progressionContent, progressionId));
  await dispatch(fetchEngineConfig(engine));
  await dispatch(fetchContentInfo(progressionContent, engine));

  const nextContent = getStepContent(getState());

  if (!nextContent) {
    return dispatch({
      type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION_FAILURE,
      payload: `progression "${progressionId}" has no state.nextContent.`
    });
  }

  const {ref, type} = nextContent;

  switch (type) {
    case 'slide': {
      await dispatch(fetchSlideChapter(ref));
      const slideResult = getSlide(ref)(getState());

      if (isNil(get('context.title', slideResult))) {
        return dispatch(selectRoute('answer'));
      }
      return dispatch(selectRoute('context'));
    }
    case 'node': {
      switch (ref) {
        case 'extraLife': {
          const prevContent = getPrevStepContent(getState());

          if (!prevContent) {
            return dispatch({
              type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION_FAILURE,
              payload: `progression "${progressionId}" has no state.content.`
            });
          }

          await dispatch(fetchContent(prevContent.type, prevContent.ref));
          return dispatch(fetchAnswer(progressionId, get('ref', prevContent), []));
        }
      }
    }
    case 'success': // eslint-disable-line no-fallthrough
    case 'failure': {
      // $FlowFixMe here we know ref is not a string, but a ExitNodeRef
      const exitNodeRef = (ref: ExitNodeRef);
      return Promise.all([
        dispatch(fetchRecommendations(progressionId)),
        dispatch(fetchEndRank()),
        dispatch(fetchNext(progressionId)),
        dispatch(fetchExitNode(exitNodeRef))
      ]).then(last);
    }
    default:
      return dispatch({
        type: UI_PROGRESSION_ACTION_TYPES.SELECT_PROGRESSION_FAILURE,
        payload: 'content.type must be either slide, node, success or failure'
      });
  }
};

export const openAssistance = (progression: Progression) => (
  dispatch: Function,
  getState: GetState,
  {services}: Options
): DispatchedAction => {
  const {Progressions} = services;

  const action = buildTask({
    types: [
      UI_PROGRESSION_ACTION_TYPES.OPEN_ASSISTANCE_REQUEST,
      UI_PROGRESSION_ACTION_TYPES.OPEN_ASSISTANCE_SUCCESS,
      UI_PROGRESSION_ACTION_TYPES.OPEN_ASSISTANCE_FAILURE
    ],
    task: () => Progressions.openAssistance(progression),
    meta: {progression}
  });

  return dispatch(action);
};

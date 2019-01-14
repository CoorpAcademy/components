// @flow strict

import get from 'lodash/fp/get';
import last from 'lodash/fp/last';
import isNil from 'lodash/fp/isNil';
import buildTask from '@coorpacademy/redux-task';
import type {ProgressionId, Progression} from '@coorpacademy/progression-engine';
import {fetchProgression, fetchEngineConfig, fetchBestProgression} from '../api/progressions';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchContent, fetchContentInfo, fetchSlideChapter} from '../api/contents';
import {fetchRecommendations} from '../api/recommendations';
import {fetchNext} from '../api/next-content';
import {sendProgressionAnalytics} from '../api/analytics';
import {fetchAnswer} from '../api/answers';
import {
  getEngine,
  getProgressionContent,
  getCurrentProgressionId,
  getStepContent,
  getPrevStepContent,
  getSlide
} from '../../utils/state-extract';
import type {
  Action,
  DispatchedAction,
  GetState,
  Options,
  ThunkAction
} from '../../definitions/redux';
import type {ExitNodeRef} from '../../definitions/models';
import {selectRoute} from './route';

/* eslint-disable flowtype/type-id-match */
type UI_PROGRESSION_UPDATED = '@@ui/UI_PROGRESSION_UPDATED';
type UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';
type OPEN_ASSISTANCE_REQUEST = '@@progression/OPEN_ASSISTANCE_REQUEST';
type OPEN_ASSISTANCE_SUCCESS = '@@progression/OPEN_ASSISTANCE_SUCCESS';
type OPEN_ASSISTANCE_FAILURE = '@@progression/OPEN_ASSISTANCE_FAILURE';
/* eslint-enable flowtype/type-id-match */

export const UI_PROGRESSION_ACTION_TYPES: {
  SELECT_PROGRESSION: UI_SELECT_PROGRESSION,
  PROGRESSION_UPDATED: UI_PROGRESSION_UPDATED,
  OPEN_ASSISTANCE_REQUEST: OPEN_ASSISTANCE_REQUEST,
  OPEN_ASSISTANCE_SUCCESS: OPEN_ASSISTANCE_SUCCESS,
  OPEN_ASSISTANCE_FAILURE: OPEN_ASSISTANCE_FAILURE
} = {
  SELECT_PROGRESSION: '@@ui/SELECT_PROGRESSION',
  PROGRESSION_UPDATED: '@@ui/UI_PROGRESSION_UPDATED',
  OPEN_ASSISTANCE_REQUEST: '@@progression/OPEN_ASSISTANCE_REQUEST',
  OPEN_ASSISTANCE_SUCCESS: '@@progression/OPEN_ASSISTANCE_SUCCESS',
  OPEN_ASSISTANCE_FAILURE: '@@progression/OPEN_ASSISTANCE_FAILURE'
};

export const progressionUpdated = (id: ProgressionId): ThunkAction => async (
  dispatch: Function,
  getState: GetState
): // $FlowFixMe circular declaration issue with gen-flow-files : type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction
DispatchedAction => {
  await dispatch({
    type: UI_PROGRESSION_ACTION_TYPES.PROGRESSION_UPDATED,
    meta: {
      id
    }
  });
  return dispatch(sendProgressionAnalytics(id));
};

type SelectProgressionPayload = {
  id: ProgressionId
};

export type SelectAction = {
  ...Action,
  type: UI_SELECT_PROGRESSION,
  payload: SelectProgressionPayload
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
  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  await dispatch(fetchStartRank());
  const progressionContent = getProgressionContent(getState());
  const engine = getEngine(getState());
  await dispatch(fetchContent(progressionContent.type, progressionContent.ref));
  await dispatch(fetchBestProgression(progressionContent, progressionId));
  await dispatch(fetchEngineConfig(engine));
  await dispatch(fetchContentInfo(progressionContent, engine));

  const {ref, type} = getStepContent(getState());

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
      throw new Error('content.type must be either slide, node, success or failure');
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

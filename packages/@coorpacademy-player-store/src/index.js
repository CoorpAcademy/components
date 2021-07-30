/* eslint-disable flowtype-errors/enforce-min-coverage */
// @flow strict

import ReduxThunkMemoized from './middlewares/redux-thunk-memoized';
import ErrorLogger from './middlewares/error-logger';

import data from './reducers/data';
import ui from './reducers/ui';

import type {
  Chapter,
  Clue,
  Correction,
  ExitNode,
  ExitNodeRef,
  Level,
  Lives,
  Recommendation,
  Resource,
  UserAnswer,
  Discipline,
  VideoProvider,
  VideoTrack,
  VideoTrackType
} from './definitions/models';

import type {ReduxState} from './definitions/redux';

import type {FindCorrection, AnswersService} from './definitions/services/answers';
import type {FindById as FindClueById, CluesService} from './definitions/services/clues';
import type {GetInfo, ContentService} from './definitions/services/content';
import type {
  FindById as FindExitNodeById,
  ExitNodesService
} from './definitions/services/exit-nodes';
import type {
  AcceptExtraLife,
  CreateProgression,
  FindBestOf,
  FindById as FindProgressionById,
  GetAvailableContent,
  MarkResourceAsViewed,
  PostAnswer,
  RefuseExtraLife,
  RequestClue,
  ProgressionsService
} from './definitions/services/progressions';
import type {
  FindRecommendations,
  GetNextRecommendation,
  RecommendationsService
} from './definitions/services/recommendations';
import type {FindById as FindSlideById, SlidesService} from './definitions/services/slides';
import type {FindUriById as FindVideoUriById, VideosService} from './definitions/services/videos';
import type {Services} from './definitions/services';

import type {UiCurrentState} from './reducers/ui/current';
import type {DataProgressionState} from './reducers/data/progressions';

const reducers = {data, ui};
const middlewares = {ErrorLogger, ReduxThunkMemoized};

export * from './utils/state-extract';
export * from './actions/api/analytics';
export * from './actions/api/answers';
export * from './actions/api/clues';
export * from './actions/api/comments';
export * from './actions/api/contents';
export * from './actions/api/exit-nodes';
export * from './actions/api/next-content';
export * from './actions/api/progressions';
export * from './actions/api/rank';
export * from './actions/api/recommendations';
export * from './actions/api/videos';
export * from './actions/ui/answers';
export {selectClue, getClue} from './actions/ui/clues';
export * from './actions/ui/coaches';
export * from './actions/ui/comments';
export * from './actions/ui/corrections';
export * from './actions/ui/extra-life';
export * from './actions/ui/location';
export * from './actions/ui/progressions';
export * from './actions/ui/route';
export * from './actions/ui/video';
export {CONTENT_TYPE, ENGINES, VIDEO_TRACK_KIND, VIDEO_TRACK_TYPE} from './definitions/models';

export {middlewares, reducers};

export type {
  AcceptExtraLife,
  AnswersService,
  Chapter,
  Clue,
  CluesService,
  ContentService,
  Correction,
  CreateProgression,
  DataProgressionState,
  ExitNode,
  ExitNodeRef,
  ExitNodesService,
  FindBestOf,
  FindClueById,
  FindCorrection,
  FindExitNodeById,
  FindProgressionById,
  FindRecommendations,
  FindSlideById,
  FindVideoUriById,
  GetAvailableContent,
  GetInfo,
  GetNextRecommendation,
  Level,
  Lives,
  MarkResourceAsViewed,
  PostAnswer,
  ProgressionsService,
  Recommendation,
  RecommendationsService,
  RefuseExtraLife,
  RequestClue,
  Resource,
  Services,
  SlidesService,
  VideosService,
  UiCurrentState,
  UserAnswer,
  ReduxState,
  Discipline,
  VideoProvider,
  VideoTrack,
  VideoTrackType
};

// @flow strict

import type {
  DataLayer,
  SlideAPI,
  ChapterAPI,
  ExitNodeAPI,
  Media,
  LevelAPI,
  ChapterRule,
  Question,
  Answer
} from './definitions';

import type {AnswersService} from './answers';
import type {CluesService} from './clues';
import type {ContentService} from './content';
import type {ProgressionsService} from './progressions';
import type {RecommendationsService} from './recommendations';
import type {SlidesService} from './slides';
import type {ExitNodesService} from './exit-nodes';

import * as AnalyticsService from './analytics';
import createAnswersService from './answers';
import createCluesService from './clues';
import * as CoachService from './coach';
import * as CommentsService from './comments';
import createContentService from './content';
import createExitNodesService from './exit-nodes';
import * as LeaderBoardService from './leaderboard';
import * as LocationService from './location';
import createProgressionsService from './progressions';
import createRecommendationsService from './recommendations';
import createSlidesService from './slides';

export type {
  SlideAPI,
  ChapterAPI,
  Media,
  LevelAPI,
  ExitNodeAPI,
  AnswersService,
  Answer,
  CluesService,
  DataLayer,
  ProgressionsService,
  RecommendationsService,
  SlidesService,
  Question,
  ContentService,
  ChapterRule
};

export const Analytics = AnalyticsService;
export const Answers: DataLayer => AnswersService = createAnswersService;
export const Clues: DataLayer => CluesService = createCluesService;
export const Coach = CoachService;
export const Comments = CommentsService;
export const Content: DataLayer => ContentService = createContentService;
export const ExitNodes: DataLayer => ExitNodesService = createExitNodesService;
export const LeaderBoard = LeaderBoardService;
export const Location = LocationService; // eslint-disable-line no-shadow
export const Logger = console; // eslint-disable-line no-console
export const Progressions: DataLayer => ProgressionsService = createProgressionsService;
export const Recommendations: DataLayer => RecommendationsService = createRecommendationsService;
export const Slides: DataLayer => SlidesService = createSlidesService;

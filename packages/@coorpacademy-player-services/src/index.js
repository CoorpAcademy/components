// @flow strict

import type {Fixtures} from './definitions';
import type {ContentService} from './content';
import type {ProgressionsService} from './progressions';
import type {RecommendationsService} from './recommendations';
import type {SlidesService} from './slides';

import * as AnalyticsService from './analytics';
import AnswersService from './answers';
import CluesService from './clues';
import * as CoachService from './coach';
import * as CommentsService from './comments';
import createContentService from './content';
import ExitNodesService from './exit-nodes';
import * as LeaderBoardService from './leaderboard';
import * as LocationService from './location';
import createProgressionsService from './progressions';
import createRecommendationsService from './recommendations';
import createSlidesService from './slides';

export type {ContentService, ProgressionsService, RecommendationsService, SlidesService};

export const Analytics = AnalyticsService;
export const Answers = AnswersService;
export const Clues = CluesService;
export const Coach = CoachService;
export const Comments = CommentsService;
export const Content: Fixtures => ContentService = createContentService;
export const ExitNodes = ExitNodesService;
export const LeaderBoard = LeaderBoardService;
export const Location = LocationService; // eslint-disable-line no-shadow
export const Logger = console; // eslint-disable-line no-console
export const Progressions: Fixtures => ProgressionsService = createProgressionsService;
export const Recommendations: Fixtures => RecommendationsService = createRecommendationsService;
export const Slides: Fixtures => SlidesService = createSlidesService;

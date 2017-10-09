import mapValues from 'lodash/fp/mapValues';
import addTimeout from '../utils/add-timeout';

import * as AnalyticsService from './analytics';
import * as AnswersService from './answers';
import * as ContentService from './content';
import * as CluesService from './clues';
import * as ExitNodesService from './exit-nodes';
import * as LeaderBoardService from './leaderboard';
import * as LocationService from './location';
import * as ProgressionsService from './progressions';
import * as RecommendationsService from './recommendations';

const TIMEOUT = 0;
const addTimeoutToService = mapValues(addTimeout(TIMEOUT));

export const Analytics = addTimeoutToService(AnalyticsService);
export const Answers = addTimeoutToService(AnswersService);
export const Content = addTimeoutToService(ContentService);
export const Clues = addTimeoutToService(CluesService);
export const ExitNodes = addTimeoutToService(ExitNodesService);
export const LeaderBoard = addTimeoutToService(LeaderBoardService);
export const Logger = console; // eslint-disable-line no-console
export const Location = addTimeoutToService(LocationService); // eslint-disable-line no-shadow
export const Progressions = addTimeoutToService(ProgressionsService);
export const Recommendations = addTimeoutToService(RecommendationsService);

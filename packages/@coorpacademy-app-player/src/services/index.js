import mapValues from 'lodash/fp/mapValues';
import addTimeout from '../utils/add-timeout';

import * as AnswersService from './answers';
import * as ChaptersService from './chapters';
import * as CluesService from './clues';
import * as ExitNodesService from './exit-nodes';
import * as LeaderBoardService from './leaderboard';
import * as LocationService from './location';
import * as ProgressionsService from './progressions';
import * as RecommendationsService from './recommendations';
import * as SlidesService from './slides';

const TIMEOUT = 0;
const addTimeoutToService = mapValues(addTimeout(TIMEOUT));

export const Answers = addTimeoutToService(AnswersService);
export const Chapters = addTimeoutToService(ChaptersService);
export const Clues = addTimeoutToService(CluesService);
export const ExitNodes = addTimeoutToService(ExitNodesService);
export const LeaderBoard = addTimeoutToService(LeaderBoardService);
export const Location = addTimeoutToService(LocationService); // eslint-disable-line no-shadow
export const Progressions = addTimeoutToService(ProgressionsService);
export const Recommendations = addTimeoutToService(RecommendationsService);
export const Slides = addTimeoutToService(SlidesService);

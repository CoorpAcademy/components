import mapValues from 'lodash/fp/mapValues';
import addTimeout from '../utils/add-timeout';

import * as AnswersService from './answers';
import * as CluesService from './clues';
import * as ExitNodesService from './exit-nodes';
import * as ProgressionsService from './progressions';
import * as RecommendationsService from './recommendations';
import * as SlidesService from './slides';

const TIMEOUT = 500;
const addTimeoutToService = mapValues(addTimeout(TIMEOUT));

export const Answers = addTimeoutToService(AnswersService);
export const Clues = addTimeoutToService(CluesService);
export const ExitNodes = addTimeoutToService(ExitNodesService);
export const Progressions = addTimeoutToService(ProgressionsService);
export const Recommendations = addTimeoutToService(RecommendationsService);
export const Slides = addTimeoutToService(SlidesService);

import {
  Analytics as AnalyticsService,
  Answers as AnswersService,
  Clues as CluesService,
  Coach as CoachService,
  Comments as CommentsService,
  Content as ContentService,
  ExitNodes as ExitNodesService,
  LeaderBoard as LeaderBoardService,
  Location as LocationService,
  Progressions as ProgressionsService,
  Recommendations as RecommendationsService
} from '@coorpacademy/player-services/es';
import curryN from 'lodash/fp/curryN';
import mapValues from 'lodash/fp/mapValues';

const TIMEOUT = 0;

const addTimeout = curryN(2, (timeout, fun) => (...args) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(fun(...args));
    }, timeout)
  )
);

const addTimeoutToService = mapValues(addTimeout(TIMEOUT));

// export const Logger = console; // eslint-disable-line no-console
// export const Recommendations = addTimeoutToService(RecommendationsService);
// export const Slides = addTimeoutToService(SlidesService);

const Services = fixtures => {
  return {
    Analytics: addTimeoutToService(AnalyticsService),
    Answers: addTimeoutToService(AnswersService(fixtures)),
    Clues: addTimeoutToService(CluesService(fixtures)),
    Coach: addTimeoutToService(CoachService),
    Comments: addTimeoutToService(CommentsService),
    Content: addTimeoutToService(ContentService(fixtures)),
    ExitNodes: addTimeoutToService(ExitNodesService(fixtures)),
    LeaderBoard: addTimeoutToService(LeaderBoardService),
    Location: addTimeoutToService(LocationService),
    Progressions: addTimeoutToService(ProgressionsService(fixtures))
  };
};

export default Services;

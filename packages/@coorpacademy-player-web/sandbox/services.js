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

// export const Slides = addTimeoutToService(SlidesService);

const Services = (fixtures, extension) => {
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
    Logger: console,
    Progressions: addTimeoutToService(ProgressionsService(fixtures)),
    Recommendations: addTimeoutToService(RecommendationsService(fixtures))
  };
};

export default Services;

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

// export const Analytics = addTimeoutToService(AnalyticsService);
// export const Answers = addTimeoutToService(AnswersService);
// export const Clues = addTimeoutToService(CluesService);
// export const Coach = addTimeoutToService(CoachService);
// export const Comments = addTimeoutToService(CommentsService);
// export const Content = addTimeoutToService(ContentService);
// export const ExitNodes = addTimeoutToService(ExitNodesService);
// export const LeaderBoard = addTimeoutToService(LeaderBoardService);
// export const Location = addTimeoutToService(LocationService); // eslint-disable-line no-shadow
// export const Logger = console; // eslint-disable-line no-console
// export const Progressions = addTimeoutToService(ProgressionsService);
// export const Recommendations = addTimeoutToService(RecommendationsService);

const Services = fixtures => {
  return {
    Content: addTimeoutToService(ContentService(fixtures)),
    Progressions: addTimeoutToService(ProgressionsService(fixtures))
  };
};

export default Services;

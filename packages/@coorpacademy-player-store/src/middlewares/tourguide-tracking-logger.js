import {
  TOURGUIDE_TRACK_COMPLETED,
  TOURGUIDE_TRACK_DISMISSED,
  TOURGUIDE_TRACK_STARTED,
  TOURGUIDE_TRACK_STEP_VIEWED
} from '../actions/ui/tourguide-tracking';

const TRACKING_ACTIONS = new Set([
  TOURGUIDE_TRACK_STARTED,
  TOURGUIDE_TRACK_STEP_VIEWED,
  TOURGUIDE_TRACK_COMPLETED,
  TOURGUIDE_TRACK_DISMISSED
]);

const logTourguideAction = (Logger, action) => {
  if (!Logger || typeof Logger.info !== 'function') {
    return;
  }

  Logger.info(
    {
      details: {
        type: action.type,
        payload: action.payload
      }
    },
    'tourguide tracking'
  );
};

const createHandler = (Logger, next) => action => {
  if (TRACKING_ACTIONS.has(action.type)) {
    logTourguideAction(Logger, action);
  }

  return next(action);
};

const createLoggerMiddleware = Logger =>
  function tourguideTrackingLogger() {
    return function tourguideTrackingNext(next) {
      return createHandler(Logger, next);
    };
  };

const logger = ({services}) => createLoggerMiddleware(services?.Logger);

export default logger;

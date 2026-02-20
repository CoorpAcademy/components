import test from 'ava';
import {applyMiddleware, createStore} from 'redux';
import {
  TOURGUIDE_TRACK_COMPLETED,
  TOURGUIDE_TRACK_STARTED
} from '../../actions/ui/tourguide-tracking';
import tourguideTrackingLogger from '../tourguide-tracking-logger';

const createStoreWithLogger = Logger => {
  const middleware = tourguideTrackingLogger({services: {Logger}});
  return createStore((state = {}) => state, applyMiddleware(middleware));
};

test('logs tracking actions', t => {
  let calls = 0;
  const stepTracking = {stepRef: 'step-a', stepNumber: 1, totalSteps: 3};
  const logger = {
    info: (message, payload) => {
      calls += 1;
      t.deepEqual(payload, {
        details: {
          type: TOURGUIDE_TRACK_STARTED,
          payload: {group: 'g', ...stepTracking}
        }
      });
      t.is(message, 'tourguide tracking');
    }
  };
  const store = createStoreWithLogger(logger);
  store.dispatch({type: TOURGUIDE_TRACK_STARTED, payload: {group: 'g', ...stepTracking}});
  t.is(calls, 1);
});

test('does not log non-tracking actions', t => {
  let calls = 0;
  const logger = {
    info: () => {
      calls += 1;
    }
  };
  const store = createStoreWithLogger(logger);
  store.dispatch({type: 'ui/other/action'});
  t.is(calls, 0);
});

test('does not throw when Logger is missing or invalid', t => {
  const stepTracking = {stepRef: 'step-b', stepNumber: 2, totalSteps: 3};
  const store = createStoreWithLogger(undefined);
  t.notThrows(() => {
    store.dispatch({type: TOURGUIDE_TRACK_COMPLETED, payload: {group: 'g', ...stepTracking}});
  });

  const storeWithBadLogger = createStoreWithLogger({});
  t.notThrows(() => {
    storeWithBadLogger.dispatch({
      type: TOURGUIDE_TRACK_COMPLETED,
      payload: {group: 'g', ...stepTracking}
    });
  });
});

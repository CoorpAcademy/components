import get from 'lodash/fp/get';
import {showGameOver} from '../utils/state-extract';
import {put, call, race, take, select} from 'redux-saga/effects';

export const POLL_START = '@@polling/start';
export const POLL_STOP = '@@polling/stop';
export const POLL_TIMEOUT = '@@polling/timeout';
export const POLL_RECEPTION = '@@polling/reception';
export const POLL_RECEPTION_MYSELF = '@@polling/reception-myself';
export const POLL_FAILURE = '@@polling/failure';

const pollingReceived = (progressionId, currentView, payload) => ({
  type: POLL_RECEPTION,
  meta: {progressionId, currentView},
  payload
});

const pollingFailed = (progressionId, err) => ({
  type: POLL_FAILURE,
  meta: {progressionId},
  payload: err
});

const pollingTimeout = progressionId => ({
  type: POLL_TIMEOUT,
  meta: {progressionId, info: 'polling will restart automatically'}
});

function createWorker({services}) {
  const {Progressions} = services;

  return function(action) {
    return function* pollingWorker() {
      const {meta: {progressionId}} = action;

      // eslint-disable-next-line fp/no-loops
      while (true) {
        try {
          const payload = yield Progressions.waitForRefresh(progressionId);
          const {userId} = payload;
          const currentView = yield select(get(['ui', 'route', progressionId]));
          const currentUserId = yield select(get(['ui', 'current', 'userId']));

          if (currentUserId === userId) {
            yield put({type: POLL_RECEPTION_MYSELF});
          } else {
            yield put(pollingReceived(progressionId, currentView, payload));

            const state = yield select();
            const gameOver = showGameOver(state);

            if (gameOver) {
              yield put({type: POLL_STOP});
            }
          }
        } catch (err) {
          if (err.status === -1) {
            yield put(pollingTimeout(progressionId));
          } else {
            yield put(pollingFailed(progressionId, err));
          }
        }
      }
    };
  };
}

export function createPollingSaga(options) {
  const worker = createWorker(options);

  return function* watcher() {
    // eslint-disable-next-line fp/no-loops
    while (true) {
      const action = yield take(POLL_START);
      yield race([call(worker(action)), take(POLL_STOP)]);
    }
  };
}

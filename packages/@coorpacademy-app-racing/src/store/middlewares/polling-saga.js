import reduce from 'lodash/fp/reduce';
import get from 'lodash/fp/get';
import {delay} from 'redux-saga';
import {showGameOver} from '../utils/state-extract';
import {seeQuestion} from '../actions/ui/location';
import {put, call, race, take, select} from 'redux-saga/effects';

export const POLL_START = '@@polling/start';
export const POLL_STOP = '@@polling/stop';
export const POLL_TIMEOUT = '@@polling/timeout';
export const POLL_RECEPTION = '@@polling/reception';
export const POLL_RECEPTION_MYSELF = '@@polling/reception-myself';
export const POLL_FAILURE = '@@polling/failure';

export const TIMER_LAST_ON = '@@timer/last/on';
export const TIMER_LAST_OFF = '@@timer/last/off';

const TRANSITION_TIME_ON_LAST = 2500;

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

function lastTeammateJustAnswered(progression, teamIndex) {
  const teammates = get(['state', 'teams', teamIndex, 'players'], progression);
  const questionNum = get(['state', 'users', teammates[0], 'questionNum'], progression);

  const _lastTeammateJustAnswered = reduce(
    (result, playerId) => {
      const player = get(['state', 'users', playerId], progression);
      const _questionNum = get('questionNum', player);
      return result && questionNum === _questionNum;
    },
    true,
    teammates
  );

  return _lastTeammateJustAnswered;
}

function createWorker({services}) {
  const {Progressions} = services;

  return function(action) {
    return function* pollingWorker() {
      const {meta: {progressionId}} = action;

      // eslint-disable-next-line fp/no-loops
      while (true) {
        try {
          const payload = yield Progressions.waitForRefresh(progressionId);
          const {progression, teamIndex, userId} = payload;
          const currentUserId = yield select(get(['ui', 'current', 'userId']));

          if (currentUserId === userId) {
            yield put({type: POLL_RECEPTION_MYSELF});
          } else {
            const currentView = yield select(get(['ui', 'route', progressionId]));
            yield put(pollingReceived(progressionId, currentView, payload));
          }

          const state = yield select();
          const gameOver = showGameOver(state);
          if (gameOver) {
            yield put({type: POLL_STOP});
          }

          const isLast = lastTeammateJustAnswered(progression, teamIndex);
          if (isLast) {
            yield put({type: TIMER_LAST_ON});
            yield call(delay, TRANSITION_TIME_ON_LAST);
            yield put({type: TIMER_LAST_OFF});
            yield put(seeQuestion);
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

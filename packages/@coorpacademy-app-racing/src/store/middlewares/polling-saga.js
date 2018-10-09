import get from 'lodash/fp/get';
import {getVictors} from '../utils/state-extract';
import {syncWithTeammates} from '../actions/ui/route';
import {syncProgression} from '../actions/ui/progressions';
import {all, put, call, race, take, select} from 'redux-saga/effects';

const POLL_START = '@@polling/start';
const POLL_STOP = '@@polling/stop';
const POLL_TIMEOUT = '@@polling/timeout';
const POLL_FAILURE = '@@polling/failure';
const POLL_RECEPTION_MYSELF = '@@polling/reception-myself';
const POLL_RECEPTION_NOT_USEFULL = '@@polling/reception-not-useful';

export const CHECK_READY_FOR_NEXT_QUESTION = '@@polling/check-ready-for-next-question';
export const POLL_RECEPTION = '@@polling/reception';

export const SYNC_AND_POLL_REQUEST = '@@polling/SYNC_AND_POLL_REQUEST';
export const SYNC_AND_POLL_SUCCESS = '@@polling/SYNC_AND_POLL_SUCCESS';
export const SYNC_AND_POLL_FAILURE = '@@polling/SYNC_AND_POLL_FAILURE';

export const startPolling = progressionId => ({
  type: POLL_START,
  meta: {progressionId}
});

export const stopPolling = progressionId => ({
  type: POLL_STOP,
  meta: {progressionId}
});

export const checkReadyForNextQuestion = (currentUserId, currentView, progression) => ({
  type: CHECK_READY_FOR_NEXT_QUESTION,
  meta: {currentUserId, currentView, progression}
});

const pollingReceived = (progressionId, currentUserId, currentView, payload) => ({
  type: POLL_RECEPTION,
  meta: {progressionId, currentUserId, currentView},
  payload
});

const pollingFailed = (progressionId, err) => ({
  type: POLL_FAILURE,
  meta: {progressionId},
  payload: {err}
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
          const {progression} = payload;
          const currentUserId = yield select(get(['ui', 'current', 'userId']));
          const currentProgression = yield select(
            get(['data', 'progressions', 'entities', progressionId])
          );

          if (progression.actions.length <= currentProgression.actions.length) {
            yield put({type: POLL_RECEPTION_NOT_USEFULL});
          } else {
            const currentView = yield select(get(['ui', 'route', progressionId]));
            const newActions = progression.actions.slice(currentProgression.actions.length);

            let requireProgressionSync = true;
            let mayRequireTeamSync = false;

            yield all(
              // eslint-disable-next-line no-loop-func
              newActions.map(function*(newAction) {
                const [authorId] = newAction.authors;

                if (currentUserId === authorId) {
                  requireProgressionSync = false;
                  yield put({type: POLL_RECEPTION_MYSELF});
                } else {
                  const currentUser = get(['state', 'users', currentUserId], progression);
                  const author = get(['state', 'users', authorId], progression);
                  const currentTeam = get('team', currentUser);
                  const authorTeam = get('team', author);

                  if (currentTeam === authorTeam) {
                    mayRequireTeamSync = true;
                  }
                }
              })
            );

            if (requireProgressionSync) {
              yield put(pollingReceived(progressionId, currentUserId, currentView, payload));
            }

            const state = yield select();
            const gameOver = getVictors(state) !== null;

            if (gameOver) {
              yield put({type: POLL_STOP}); // race loop exit
            }

            if (mayRequireTeamSync) {
              yield put(syncWithTeammates(payload.progression, true));
            }
          }
        } catch (err) {
          if (err.status === -1) {
            yield put(pollingTimeout(progressionId));
          } else {
            console.error(err);
            yield put(pollingFailed(progressionId, err));
          }

          yield put(syncProgression(progressionId));
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

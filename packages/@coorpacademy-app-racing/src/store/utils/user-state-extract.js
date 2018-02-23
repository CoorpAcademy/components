import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import last from 'lodash/fp/last';
import partial from 'lodash/fp/partial';
import tail from 'lodash/fp/tail';
import mapValues from 'lodash/fp/mapValues';
import * as stateExtract from './state-extract';

export const getUserState = (userId, state) =>
  get(['data', 'progressions', 'entities', progressionId, 'state', 'users', userId], state);

export const getUserMergedState = (userId, state) => {
  const progressionId = stateExtract.getCurrentProgressionId(state);
  const userState = getUserState(userId, state);
  return set(['data', 'progressions', 'entities', progressionId, 'state'], userState, state);
};

const userStateExtract = mapValues(getter => function (userId) {
  const state = last(arguments);
  const mergedState = getUserMergedState(userId, state);
  const params = set(arguments.length - 2, mergedState, tail(arguments));

  return partial(getter, params)();
}, stateExtract);

export const getCurrentUserId = get(['ui', 'current', 'userId']);

export const getCurrentUserState = state => getUserState(getCurrentUserId(state), state);
export const getCurrentUserMergedState = state => getUserMergedState(getCurrentUserId(state), state);

export default userStateExtract;

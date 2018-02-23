import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import mapValues from 'lodash/fp/mapValues';
import * as stateExtract from './state-extract';

export const getUserState = (userId, state) =>
  get(['data', 'progressions', 'entities', progressionId, 'state', 'users', userId], state);

const userStateExtract = mapValues(getter => (userId, state) => {
  const progressionId = stateExtract.getCurrentProgressionId(state);
  const userState = get(['data', 'progressions', 'entities', progressionId, 'state', 'users', userId], state);

  return getter(set(['data', 'progressions', 'entities', progressionId, 'state'], userState, state));
}, stateExtract);

export const getCurrentUserId = get(['ui', 'current', 'userId']);

export const getCurrentUserState = state => getUserState(getCurrentUserId(state), state);

export default userStateExtract;

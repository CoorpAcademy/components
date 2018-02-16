import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import mapValues from 'lodash/fp/mapValues';
import * as stateExtract from './state-extract';

const userStateExtract = mapValues(getter => (userId, state) => {
  const progressionId = stateExtract.getCurrentProgressionId(state);
  const userState = get(['data', 'progressions', 'entities', progressionId, 'state', 'users', userId], state);

  return getter(set(['data', 'progressions', 'entities', progressionId, 'state'], userState, state));
}, stateExtract);

export default userStateExtract;

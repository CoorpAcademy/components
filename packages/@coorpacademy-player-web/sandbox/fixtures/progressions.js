import {reduce, set} from 'lodash/fp';
import {createState} from '@coorpacademy/progression-engine';
import progressionsData from './data/progressions';

const progressionStore = reduce(
  (progressionMap, progression) => {
    const newState = createState(progression);
    progressionMap.set(progression._id, set('state', newState, progression));
    return progressionMap;
  },
  new Map(),
  progressionsData
);

// eslint-disable-next-line require-await
const findById = async id => {
  if (!progressionStore.has(id)) return Promise.reject(new Error('Progression not found'));
  return Promise.resolve(progressionStore.get(id));
};

const getAll = () => {
  return Promise.resolve([...progressionStore.values()]);
};

const save = progression => {
  progressionStore.set(progression._id, progression);
  return Promise.resolve(progression);
};

export {save, getAll, findById};

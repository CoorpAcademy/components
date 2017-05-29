import uniqueId from 'lodash/fp/uniqueId';
import pipe from 'lodash/fp/pipe';
import update from 'lodash/fp/update';
import reduce from 'lodash/fp/reduce';
import progressionsData from './progressions.data';

const generateId = () => uniqueId('progression');
const progressions = reduce(
  (map, progression) => map.set(progression.id, progression),
  new Map(),
  progressionsData
);

export const findById = id => {
  if (progressions.has(id)) return Promise.resolve(progressions.get(id));
  return Promise.reject(new Error('Progression not found'));
};
export const find = () => {
  return Promise.resolve(Array.from(progressions.entries()));
};

export const createProgression = progression => {
  const id = generateId();
  progressions.set(id, {
    ...progression,
    id,
    actions: []
  });

  return findById(id);
};

export const createAnswer = async (progressionId, answer) =>
  pipe(update('actions', (actions = []) => [...actions, answer]), progression => {
    progressions.set(progressionId, progression);
    return findById(progressionId);
  })(await findById(progressionId));

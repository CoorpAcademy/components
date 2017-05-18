import uniqueId from 'lodash/fp/uniqueId';
import pipe from 'lodash/fp/pipe';
import update from 'lodash/fp/update';

const generateId = uniqueId('progression');

const progressions = new Map();
progressions.set('0', {id: '0', actions: [], content: {ref: '0'}});

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

// @flow strict

import {reduce, set} from 'lodash/fp';
import {createState} from '@coorpacademy/progression-engine';
import type {State, Progression} from '@coorpacademy/progression-engine';
import progressionsData from './data/progressions';

const progressionStore = reduce(
  (
    progressionMap: Map<string, Progression>,
    progression: Progression
  ): Map<string, Progression> => {
    const newState: State = createState(progression);
    if (!progression._id) {
      return progressionMap;
    }

    progressionMap.set(progression._id, set('state', newState, progression));
    return progressionMap;
  },
  new Map(),
  progressionsData
);

// eslint-disable-next-line require-await
const findById = async (id: string): Promise<Progression | void> => {
  return progressionStore.get(id);
};

const getAll = (): Array<Progression> => {
  return [...progressionStore.values()];
};

const save = (progression: Progression): Promise<Progression> => {
  if (!progression._id) return Promise.reject(new Error());
  progressionStore.set(progression._id, progression);
  return Promise.resolve(progression);
};

export {save, getAll, findById};

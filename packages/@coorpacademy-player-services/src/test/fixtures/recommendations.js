// @flow strict

import reduce from 'lodash/fp/reduce';
import _find from 'lodash/fp/find';

import type {Level} from '@coorpacademy/player-store';
import type {Recommendation} from '../../definitions';
import levelsData from './data/levels';
import recommendations from './data/recommendations';

const levels: Map<string, Level> = reduce(
  (map, object) => map.set(object.ref, object),
  new Map(),
  levelsData
);

const find = (type: string, ref: string): Promise<Array<Recommendation>> => {
  return Promise.resolve(recommendations);
};

const getNextLevel = (ref: string): Level | void => {
  const _level = levels.get(ref);
  if (!_level) {
    return undefined;
  }

  const {
    name,
    level
  }: {
    name: string,
    level: string
  } = _level;
  if (level === 'coach') {
    return undefined;
  }
  return _find(
    {
      name,
      level: level === 'base' ? 'advanced' : 'coach'
    },
    levelsData
  );
};

export {find, getNextLevel};

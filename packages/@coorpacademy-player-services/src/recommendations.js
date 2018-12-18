// @flow

import type {Fixtures, Level, Recommendation} from './types';

const find = (fixtures: Fixtures) => (
  type: string,
  ref: string
): Promise<Array<Recommendation>> => {
  const {findRecommendations} = fixtures;
  const recommendations = findRecommendations(type, ref);
  return Promise.resolve(recommendations);
};

const getNext = (fixtures: Fixtures) => (
  type: 'chapter' | 'level',
  ref: string
): Promise<void | Level> => {
  const {getNextLevel} = fixtures;
  switch (type) {
    case 'level':
      return Promise.resolve(getNextLevel(ref));
    case 'chapter':
    default:
      return Promise.resolve(undefined);
  }
};

const Recommendations = (fixtures: Fixtures) => ({
  find: find(fixtures),
  getNext: getNext(fixtures)
});

export default Recommendations;

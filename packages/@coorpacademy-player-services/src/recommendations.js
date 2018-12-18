// @flow

import type {Recommendation} from './types';

const find = fixtures => (type: string, ref: string): Promise<Recommendation> => {
  const {findRecommendations} = fixtures;
  const recommendations = findRecommendations(type, ref);
  return Promise.resolve(recommendations);
};

const getNext = fixtures => (type: string, ref: string) => {
  const {getNextLevel} = fixtures;
  switch (type) {
    case 'chapter':
      return Promise.resolve(undefined);
    case 'level':
      return Promise.resolve(getNextLevel(ref));
  }
};

// $FlowFixMe
const Recommendations = fixtures => ({
  find: find(fixtures),
  getNext: getNext(fixtures)
});

export default Recommendations;

// @flow

import type {ContentType} from '@coorpacademy/progression-engine';
import type {Fixtures, Level, Recommendation} from './definitions';
import {CONTENT_TYPE} from './definitions';
import type {RecommendationsService} from '.';

const find = (fixtures: Fixtures) => (
  type: ContentType,
  ref: string
): Promise<Array<Recommendation>> => {
  const {findRecommendations} = fixtures;
  const recommendations = findRecommendations(type, ref);
  return Promise.resolve(recommendations);
};

const getNext = (fixtures: Fixtures) => (type: ContentType, ref: string): Promise<void | Level> => {
  const {getNextLevel} = fixtures;
  switch (type) {
    case CONTENT_TYPE.LEVEL:
      return Promise.resolve(getNextLevel(ref));
    case CONTENT_TYPE.CHAPTER:
    default:
      return Promise.resolve(undefined);
  }
};

const Recommendations = (fixtures: Fixtures): RecommendationsService => ({
  find: find(fixtures),
  getNext: getNext(fixtures)
});

export default Recommendations;

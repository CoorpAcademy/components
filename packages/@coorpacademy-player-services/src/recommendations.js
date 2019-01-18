// @flow strict

import type {ContentType} from '@coorpacademy/progression-engine';
import type {Fixtures, LevelAPI, RecommendationAPI} from './definitions';
import {CONTENT_TYPE} from './definitions';

type FindRecommendations = (type: ContentType, ref: string) => Promise<Array<RecommendationAPI>>;
type GetNextRecommendation = (type: ContentType, ref: string) => Promise<void | LevelAPI>;

type RecommendationsService = {|
  find: FindRecommendations,
  getNext: GetNextRecommendation
|};

const find = (fixtures: Fixtures): FindRecommendations => (
  type: ContentType,
  ref: string
): Promise<Array<RecommendationAPI>> => {
  const {findRecommendations} = fixtures;
  const recommendations = findRecommendations(type, ref);
  return Promise.resolve(recommendations);
};

const getNext = (fixtures: Fixtures): GetNextRecommendation => (
  type: ContentType,
  ref: string
): Promise<void | LevelAPI> => {
  const {getNextLevel} = fixtures;
  switch (type) {
    case CONTENT_TYPE.LEVEL:
      return Promise.resolve(getNextLevel(ref));
    case CONTENT_TYPE.CHAPTER:
    default:
      return Promise.resolve(undefined);
  }
};

const createRecommendationsService = (fixtures: Fixtures): RecommendationsService => ({
  find: find(fixtures),
  getNext: getNext(fixtures)
});

export type {RecommendationsService};
export default createRecommendationsService;

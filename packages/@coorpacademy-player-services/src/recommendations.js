// @flow strict

import type {ContentType} from '@coorpacademy/progression-engine';
import type {DataLayer, LevelAPI, RecommendationAPI} from './definitions';
import {CONTENT_TYPE} from './definitions';

type FindRecommendations = (type: ContentType, ref: string) => Promise<Array<RecommendationAPI>>;
type GetNextRecommendation = (type: ContentType, ref: string) => Promise<void | LevelAPI>;

type RecommendationsService = {|
  find: FindRecommendations,
  getNext: GetNextRecommendation
|};

const find = (contentService: DataLayer): FindRecommendations => (
  type: ContentType,
  ref: string
): Promise<Array<RecommendationAPI>> => {
  const {findRecommendations} = contentService;
  const recommendations = findRecommendations(type, ref);
  return Promise.resolve(recommendations);
};

const getNext = (contentService: DataLayer): GetNextRecommendation => (
  type: ContentType,
  ref: string
): Promise<void | LevelAPI> => {
  const {getNextLevel} = contentService;
  switch (type) {
    case CONTENT_TYPE.LEVEL:
      return Promise.resolve(getNextLevel(ref));
    case CONTENT_TYPE.CHAPTER:
    default:
      return Promise.resolve(undefined);
  }
};

const createRecommendationsService = (contentService: DataLayer): RecommendationsService => ({
  find: find(contentService),
  getNext: getNext(contentService)
});

export type {RecommendationsService};
export default createRecommendationsService;

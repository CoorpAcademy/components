// @flow strict

import type {ContentType} from '@coorpacademy/progression-engine';
import type {ChapterAPI, DataLayer, LevelAPI, RecommendationAPI} from './definitions';
import {CONTENT_TYPE} from './definitions';

type FindRecommendations = (type: ContentType, ref: string) => Promise<Array<RecommendationAPI>>;
type GetNextRecommendation = (
  type: ContentType,
  ref: string
) => Promise<void | ChapterAPI | LevelAPI>;

type RecommendationsService = {|
  find: FindRecommendations,
  getNext: GetNextRecommendation
|};

const find = (dataLayer: DataLayer): FindRecommendations => (
  type: ContentType,
  ref: string
): Promise<Array<RecommendationAPI>> => {
  const {findRecommendations} = dataLayer;
  const recommendations = findRecommendations(type, ref);
  return Promise.resolve(recommendations);
};

const getNext = (dataLayer: DataLayer): GetNextRecommendation => (
  type: ContentType,
  ref: string
): Promise<void | ChapterAPI | LevelAPI> => {
  switch (type) {
    case CONTENT_TYPE.LEVEL: {
      const {getNextLevel} = dataLayer;
      return Promise.resolve(getNextLevel(ref));
    }
    case CONTENT_TYPE.CHAPTER: {
      const {getNextChapter} = dataLayer;
      return Promise.resolve(getNextChapter(ref));
    }
    default:
      return Promise.resolve(undefined);
  }
};

const createRecommendationsService = (dataLayer: DataLayer): RecommendationsService => ({
  find: find(dataLayer),
  getNext: getNext(dataLayer)
});

export type {RecommendationsService};
export default createRecommendationsService;

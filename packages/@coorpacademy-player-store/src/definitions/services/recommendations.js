// @flow strict

import type {ContentType} from '@coorpacademy/progression-engine';
import type {Level, Recommendation} from '../models';

type RecommendationResult =
  | Array<Recommendation>
  | {|
      cards: Array<Recommendation>,
      context?: {[string]: mixed}
    |};
type FindRecommendations = (type: ContentType, ref: string) => Promise<RecommendationResult | void>;
type GetNextRecommendation = (type: ContentType, ref: string) => Promise<void | Level>;

type RecommendationsService = {|
  find: FindRecommendations,
  getNext: GetNextRecommendation
|};

export type {
  FindRecommendations,
  GetNextRecommendation,
  RecommendationResult,
  RecommendationsService
};

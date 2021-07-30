// @flow strict

import type {ContentType} from '@coorpacademy/progression-engine';
import type {Level, Recommendation} from '../models';

type FindRecommendations = (type: ContentType, ref: string) => Promise<Array<Recommendation>>;
type GetNextRecommendation = (type: ContentType, ref: string) => Promise<void | Level>;

type RecommendationsService = {|
  find: FindRecommendations,
  getNext: GetNextRecommendation
|};

export type {FindRecommendations, GetNextRecommendation, RecommendationsService};

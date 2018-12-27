// @flow strict

type FindRecommendations = (type: ContentType, ref: string) => Promise<Array<Recommendation>>;
type GetNextRecommendation = (type: ContentType, ref: string) => Promise<void | Level>;

type RecommendationsService = {|
  find: FindRecommendations,
  getNext: GetNextRecommendation
|};

export type {FindRecommendations, GetNextRecommendation, RecommendationsService};

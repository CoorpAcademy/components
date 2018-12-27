// @flow strict

type FindSlideById = (slideId: string) => Promise<Slide>;

type SlidesService = {|
  findById: FindSlideById
|};

export type {FindSlideById, SlidesService};

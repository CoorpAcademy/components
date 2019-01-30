// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {DataLayer} from './definitions';

type FindSlideById = (slideId: string) => Promise<Slide>;

type SlidesService = {|
  findById: FindSlideById
|};

const findById = (contentService: DataLayer): FindSlideById => async (
  slideId: string
): Promise<Slide> => {
  const {findSlideById} = contentService;
  const slide = await findSlideById(slideId);
  return slide;
};

const createSlidesService = (contentService: DataLayer): SlidesService => ({
  findById: findById(contentService)
});

export type {SlidesService};
export default createSlidesService;

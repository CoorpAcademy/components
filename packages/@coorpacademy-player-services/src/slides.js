// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {ContentService} from './definitions';

type FindSlideById = (slideId: string) => Promise<Slide>;

type SlidesService = {|
  findById: FindSlideById
|};

const findById = (contentService: ContentService): FindSlideById => async (
  slideId: string
): Promise<Slide> => {
  const {findSlideById} = contentService;
  const slide = await findSlideById(slideId);
  return slide;
};

const createSlidesService = (contentService: ContentService): SlidesService => ({
  findById: findById(contentService)
});

export type {SlidesService};
export default createSlidesService;

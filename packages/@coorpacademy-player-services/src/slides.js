// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {Fixtures} from './definitions';

const findById = (fixtures: Fixtures): FindSlideById => async (slideId: string): Promise<Slide> => {
  const {findSlideById} = fixtures;
  const slide = await findSlideById(slideId);
  return slide;
};

const createSlidesService = (fixtures: Fixtures): SlidesService => ({
  findById: findById(fixtures)
});

export type {SlidesService};
export default createSlidesService;

// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {Fixtures} from './definitions';

type FindSlideById = (slideId: string) => Promise<Slide>;

type SlidesService = {|
  findById: FindSlideById
|};

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

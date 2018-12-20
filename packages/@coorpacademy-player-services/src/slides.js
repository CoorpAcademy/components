// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {Fixtures} from './definitions';
import type {SlidesService} from '.';

const findById = (fixtures: Fixtures) => async (slideId: string): Promise<Slide> => {
  const {findSlideById} = fixtures;
  const slide = await findSlideById(slideId);
  return slide;
};

const Slides = (fixtures: Fixtures): SlidesService => ({
  findById: findById(fixtures)
});

export default Slides;

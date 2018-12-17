// @flow

import type {Slide} from './types';

const findById = fixtures => async (slideId): Slide => {
  const {findSlideById} = fixtures;
  const slide = await findSlideById(slideId);
  return slide;
};

const Slides = fixtures => ({
  findById: findById(fixtures)
});

export default Slides;

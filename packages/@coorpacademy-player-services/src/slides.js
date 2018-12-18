// @flow

import type {Slide} from './types';

const findById = fixtures => async (slideId: string): Promise<Slide> => {
  const {findSlideById} = fixtures;
  const slide = await findSlideById(slideId);
  return slide;
};

// $FlowFixMe
const Slides = fixtures => ({
  findById: findById(fixtures)
});

export default Slides;

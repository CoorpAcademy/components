// @flow
import type {Slide, Content} from '../../../types';

const getSlide = (slides: Array<Slide>, content: ?Content): Slide => {
  const slide = slides.find(s => s._id === (content && content.ref));
  if (!slide) {
    throw new Error('Could not find slide when setting up the test');
  }
  return slide;
};

export default getSlide;

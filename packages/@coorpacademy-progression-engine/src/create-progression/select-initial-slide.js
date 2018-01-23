// @flow
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import sortBy from 'lodash/fp/sortBy';
import shuffle from 'lodash/fp/shuffle';
import type {Slide, SlidePool} from '../types';

const sortByPosition = sortBy(
  (slide: Slide) => (typeof slide.position === 'number' ? -slide.position : 0)
);

const selectInitialSlide = (slidePools: Array<SlidePool>): ?Slide => {
  if (slidePools.length === 0) {
    return null;
  }

  return pipe(head, get('slides'), shuffle, sortByPosition, head)(slidePools);
};

export default selectInitialSlide;

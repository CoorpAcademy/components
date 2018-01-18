// @flow
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import sortBy from 'lodash/fp/sortBy';
import shuffle from 'lodash/fp/shuffle';
import type {Slide, SlidePool} from '../types';

const sortByPosition = sortBy(
  (slide: Slide) => (typeof slide.position === 'number' ? -slide.position : 0)
);

const selectRule = (rules: Array<SlidePool>): ?Slide => {
  if (rules.length === 0) {
    return null;
  }

  return pipe(shuffle, sortByPosition, head)(rules[0].slides);
};

export default selectRule;

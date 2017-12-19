// @flow
import __ from 'lodash/fp/__';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import includes from 'lodash/fp/includes';
import indexOf from 'lodash/fp/indexOf';
import intersection from 'lodash/fp/intersection';
import isEmpty from 'lodash/fp/isEmpty';
import isNumber from 'lodash/fp/isNumber';
import last from 'lodash/fp/last';
import map from 'lodash/fp/map';
import negate from 'lodash/fp/negate';
import pipe from 'lodash/fp/pipe';
import sortBy from 'lodash/fp/sortBy';
import shuffle from 'lodash/fp/shuffle';
import type {Config, Slide, SlidePool, State} from '../../common/types';

const sortByPosition = sortBy(({position}) => (isNumber(position) ? -position : 0));
const pickNextSlide = pipe(shuffle, sortByPosition, head);

const nextSlidePool = (config: Config, slidePools: Array<SlidePool>, state: State): SlidePool => {
  const lastSlideRef = pipe(get('slides'), last)(state);
  const currentChapterPool = find(({slides}) => find({_id: lastSlideRef}, slides), slidePools);
  const slidesAnsweredForThisChapter = intersection(
    state.slides,
    map('_id', currentChapterPool.slides)
  );

  if (slidesAnsweredForThisChapter.length >= config.slidesToComplete) {
    const indexOfCurrentChapter = indexOf(
      currentChapterPool.chapterId,
      map('chapterId', slidePools)
    );
    return slidePools[indexOfCurrentChapter + 1];
  }

  return currentChapterPool;
};

const getSlidePool = (config: Config, slidePools: Array<SlidePool>, state: State): SlidePool =>
  isEmpty(get('slides', state)) ? head(slidePools) : nextSlidePool(config, slidePools, state);

export default function selectNextSlide(
  config: Config,
  slidePools: Array<SlidePool>,
  state: State
): Slide | null {
  const slidePool = getSlidePool(config, slidePools, state);

  // If user has answered all questions, return success endpoint
  if (!slidePool) {
    return null;
  }

  const remainingSlides = filter(
    pipe(get('_id'), negate(includes(__, state.slides))),
    slidePool.slides
  );
  const nextSlide = pipe(pickNextSlide, get('_id'))(remainingSlides);
  return nextSlide;
}

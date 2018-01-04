// @flow
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import pipe from 'lodash/fp/pipe';
import shuffle from 'lodash/fp/shuffle';
import first from 'lodash/fp/first';
import sortBy from 'lodash/fp/sortBy';
import negate from 'lodash/fp/negate';
import head from 'lodash/fp/head';
import isEmpty from 'lodash/fp/isEmpty';
import indexOf from 'lodash/fp/indexOf';
import last from 'lodash/fp/last';
import filter from 'lodash/fp/filter';
import includes from 'lodash/fp/includes';
import intersection from 'lodash/fp/intersection';
import type {State, Slide, Content, Engine, Config} from '../types';
import getConfig from '../config';

const isAlive = (state: State): boolean => state.lives > 0;
const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

type SlidePool = {
  chapterId: string,
  slides: Array<Slide>
};

const nextSlidePool = (config: Config, slidePools: Array<SlidePool>, state: State): SlidePool => {
  const lastSlideRef = pipe(get('slides'), last)(state);
  const currentChapterPool =
    find(({slides}) => find({_id: lastSlideRef}, slides), slidePools) || first(slidePools);
  const slidesAnsweredForThisChapter = intersection(
    state.slides,
    map('_id')(currentChapterPool.slides)
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

const sortByPosition = sortBy(
  (slide: Slide) => (typeof slide.position === 'number' ? -slide.position : 0)
);

const pickNextSlide = pipe(shuffle, sortByPosition, head);

export default function computeNextStep(
  engine: Engine,
  slidePools: Array<{chapterId: string, slides: Array<Slide>}>,
  state: State
): Content {
  const config = (getConfig(engine): Config);
  // if no more lives, return failure endpoint
  if (!isAlive(state)) {
    return !stepIsAlreadyExtraLife(state) && hasRemainingLifeRequests(state)
      ? {ref: 'extraLife', type: 'node'}
      : {ref: 'failExitNode', type: 'failure'};
  }

  const slidePool = getSlidePool(config, slidePools, state);

  // If user has answered all questions, return success endpoint
  if (!slidePool) {
    return {
      ref: 'successExitNode',
      type: 'success'
    };
  }

  const remainingSlides = filter(
    pipe(get('_id'), negate((slideId: string) => includes(slideId, state.slides))),
    slidePool.slides
  );
  const nextSlide = pipe(pickNextSlide, get('_id'))(remainingSlides);

  // with next slide return content object
  return {
    ref: nextSlide,
    type: 'slide'
  };
}

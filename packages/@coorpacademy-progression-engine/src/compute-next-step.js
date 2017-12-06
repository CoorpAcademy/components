// @flow
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import includes from 'lodash/fp/includes';
import pipe from 'lodash/fp/pipe';
import sample from 'lodash/fp/sample';
import indexOf from 'lodash/fp/indexOf';
import last from 'lodash/fp/last';
import without from 'lodash/fp/without';
import intersection from 'lodash/fp/intersection';
import type {State, Content, Engine, Config} from './types';
import getConfig from './config';

const isAlive = (state: State): boolean => state.lives > 0;
const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

const getSlidePool = (
  config: Config,
  slidePools: Array<{chapterId: string, slides: Array<string>}>,
  state: State
): {chapterId: string, slides: Array<string>} => {
  const lastSlideRef = pipe(get('slides'), last)(state);
  const currentChapterPool = find(({slides}) => includes(lastSlideRef, slides), slidePools);

  const slidesAnsweredForThisChapter = intersection(state.slides, currentChapterPool.slides);
  if (slidesAnsweredForThisChapter.length >= config.slidesToComplete) {
    const indexOfCurrentChapter = indexOf(
      currentChapterPool.chapterId,
      map('chapterId', slidePools)
    );
    return slidePools[indexOfCurrentChapter + 1];
  }
  return currentChapterPool;
};

export default function computeNextStep(
  engine: Engine,
  slidePools: Array<{chapterId: string, slides: Array<string>}>,
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

  const remainingSlides = without(state.slides, slidePool.slides);
  const nextSlide = sample(remainingSlides);

  // with next slide return content object
  return {
    ref: nextSlide,
    type: 'slide'
  };
}

import {head, pipe, reduce, values} from 'lodash/fp';

import slidesData from './data/slides';

const answerStore = pipe(
  values,
  reduce(
    (clueMap, slide) => clueMap.set(slide._id, head(slide.question.content.answers)),
    new Map()
  )
)(slidesData);

const getCorrectAnswer = slideId => answerStore.get(slideId);

export {getCorrectAnswer};

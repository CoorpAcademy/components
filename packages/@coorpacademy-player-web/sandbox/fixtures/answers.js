import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import values from 'lodash/fp/values';

import slidesData from './data/slides';

const answerStore = pipe(
  values,
  reduce(
    (clueMap, slide) => clueMap.set(slide._id, head(slide.question.content.answers)),
    new Map()
  )
)(slidesData);

const getCorrectAnswer = slideId => answerStore.get(slideId);

// eslint-disable-next-line import/prefer-default-export
export {getCorrectAnswer};

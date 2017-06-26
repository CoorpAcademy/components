import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import unset from 'lodash/fp/unset';
import slidesData from './slides.data';

const slideStore = pipe(
  map(pipe(unset('clue'), unset('question.content.answers'))),
  reduce((slideMap, slide) => slideMap.set(slide._id, slide), new Map())
)(slidesData);

// eslint-disable-next-line import/prefer-default-export,require-await
export const findById = async id => {
  if (!slideStore.has(id)) throw new Error('Slide not found');
  return slideStore.get(id);
};

import reduce from 'lodash/fp/reduce';
import slidesData from './slides.data';

const slides = reduce((map, slide) => map.set(slide.id, slide), new Map(), slidesData);

const findById = id => {
  if (slides.has(id)) return Promise.resolve(slides.get(id));
  return Promise.reject(new Error('Slide not found'));
};

export {findById}; // eslint-disable-line import/prefer-default-export

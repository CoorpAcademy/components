import reduce from 'lodash/fp/reduce';
import slidesData from './slides.data';

const slides = reduce((map, slide) => map.set(slide.ref, slide), new Map(), slidesData);

const findByRef = ref => {
  if (slides.has(ref)) return Promise.resolve(slides.get(ref));
  return Promise.reject(new Error('Slide not found'));
};

export {findByRef}; // eslint-disable-line import/prefer-default-export

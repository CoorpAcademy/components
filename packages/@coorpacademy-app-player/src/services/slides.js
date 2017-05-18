const slides = new Map();
slides.set('0', {});
slides.set('1', {});
slides.set('2', {});

const findById = id => {
  if (slides.has(id)) return Promise.resolve(slides.get(id));
  return Promise.reject(new Error('Slide not found'));
};

export {findById}; // eslint-disable-line import/prefer-default-export

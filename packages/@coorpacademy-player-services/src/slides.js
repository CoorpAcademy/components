const findById = fixtures => async slideId => {
  const {findSlideById} = fixtures;
  const slide = await findSlideById(slideId);
  return slide;
};

const Slides = fixtures => ({
  findById: findById(fixtures)
});

export default Slides;

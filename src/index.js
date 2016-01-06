import slide from './Slide';
import defaultH from './h';
import _partial from 'lodash.partial';

export default requireDeps => {
  return {
    createSlide: requireDeps ? _partial(slide, defaultH) : slide,
    h: defaultH
  }
};

import { createSlide } from '../../src/bundle-with-virtual-dom';

const skin = {
  primary: '#F0F'
};

const Slide = createSlide({skin});

export default state => Slide(state.question)

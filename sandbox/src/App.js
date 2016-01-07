import { createSlide } from '../../src/bundle-with-virtual-dom';

const skin = {
  primary: '#0F0'
};

const Slide = createSlide({skin});

export default state => Slide(state.question)

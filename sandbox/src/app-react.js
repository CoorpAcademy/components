import { createSlide } from '../../src/bundle-with-react';

const skin = {
  primary: '#F0F'
};

const Slide = createSlide({skin});

export default state => Slide(state.question);

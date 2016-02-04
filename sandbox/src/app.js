import { createSlide } from '../../src';

const state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?a'
  }
};

const skin = {
  primary: '#F0F'
};

export default (h) => (props) => {
  const Slide = createSlide(h, {skin});
  return Slide(state.question);
}

import { createSlide } from '../../src';

const state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

export default (h, {skin}) => (props) => {
  const Slide = createSlide(h, {skin});
  return Slide(state.question);
}

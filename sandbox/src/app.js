import { createSlide } from '../../src';

const state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

const skin = {
  primary: '#F0F'
};

export default (renderer) => {
  const Slide = createSlide(renderer, skin);
  return (props) => Slide({
    ...state.question,
    onChange: value => console.log(value),
    onValidate: value => console.log('validate')
  });
};

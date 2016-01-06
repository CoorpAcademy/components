import components from '../../src/bundle-with-deps';
const h = components.h
const skin = {
  primary: '#0F0'
};

const Slide = components.createSlide({skin});

export default state => <Slide {...state.question}/>

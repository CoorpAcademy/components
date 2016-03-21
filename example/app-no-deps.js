import bundle from '../src/bundle-with-deps';
const h = bundle.h;
const skin = {
  primary: '#0F0'
};

const Slide = bundle.createSlide({skin});

export default state => <Slide {...state.question}/>;

import h from '../src/h';
import bundle from '../src/bundle';

const skin = {
  primary: '#0F0'
};

const Slide = bundle.createSlide(h, {skin});

export default state => <Slide {...state.question}/>;

import h from '../../src/h';
import components from '../../src/bundle';

const skin = {
  primary: '#0F0'
};

const Slide = components.createSlide(h, {skin});

export default state => <Slide {...state.question}/>

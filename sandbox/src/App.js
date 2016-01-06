console.log('[sandbox]');
import h from '../../src/h';
import { createSlide } from '../../src/index';

const skin = {
  primary: '#0F0'
};

const Slide = createSlide(h, {skin});

export default state => <Slide {...state.question}/>

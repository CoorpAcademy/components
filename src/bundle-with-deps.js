import * as components from './index';
import h from './h';
import _partial from 'lodash.partial';

const createSlide = _partial(components.createSlide, h);

export default {
  createSlide,
  h
}

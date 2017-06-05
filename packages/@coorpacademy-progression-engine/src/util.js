// @flow
import {type State} from './types';

export const isAlive = (state: State): boolean => state.lives > 0;

export const hasFinished = (maxSlides: number, state: State): boolean =>
  state.slides.length === maxSlides;

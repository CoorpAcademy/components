// @flow
import random from 'lodash/fp/random';
import {type Progression, type Slide} from './types';

export default function computeNextStep(progression: Progression, slides: Array<Slide>): Slide {
  const index = random(0, slides.length - 1);
  return slides[index];
}

import random from 'lodash/fp/random';

export default function computeNextStep(progression, slides, action) {
  const index = random(0, slides.length - 1);
  return slides[index];
}

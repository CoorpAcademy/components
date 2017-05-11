import test from 'ava';
import computeNextStep from '../compute-next-step';

test('should return the next slide (TMP)', t => {
  const progression = Object.freeze({});
  const slides = ['1.A'];
  const action = Object.freeze({});

  t.deepEqual(computeNextStep(progression, slides, action), '1.A');
});

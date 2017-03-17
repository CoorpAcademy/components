import test from 'ava';
import closestStep from '../closest-step';
import steps from './fixtures/steps';

const width = 236;

test('should find closest step and leave eventX on pan', t => {
  const {x, step} = closestStep({
    eventX: 126,
    width,
    steps
  });

  t.is(x, 126);
  t.is(step, 5);
});

test('should set x as closest stepX on snap', t => {
  const {x, step} = closestStep({
    eventX: 126,
    width,
    steps,
    snap: true
  });

  t.is(x, 118);
  t.is(step, 5);
});

test('should set x as closest stepX on snap (handles at same point)', t => {
  const {x, step} = closestStep({
    eventX: 110,
    width,
    steps,
    snap: true
  });

  t.is(x, 118);
  t.is(step, 5);
});

test('should set x as farthest stepX (left) on snap and forceRange', t => {
  const {x, step} = closestStep({
    eventX: 110,
    limit: 118,
    width,
    steps,
    side: 'left',
    snap: true,
    forceRange: true
  });

  t.is(x, 94.4);
  t.is(step, 4);
});

test('should set x as farthest stepX (right) on snap and forceRange', t => {
  const {x, step} = closestStep({
    eventX: 98,
    limit: 94.4,
    width,
    steps,
    side: 'right',
    snap: true,
    forceRange: true
  });

  t.is(x, 118);
  t.is(step, 5);
});

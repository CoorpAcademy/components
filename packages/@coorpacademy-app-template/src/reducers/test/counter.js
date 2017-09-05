import test from 'ava';
import {decrement, increment} from '../../actions';
import counter from '../counter';

test('should have an initial value of 0', t => {
  const state = undefined;
  const action = {type: Math.random()};
  t.is(counter(state, action), 0);
});

test('should return state when type is unknown', t => {
  const state = 678;
  const action = {type: Math.random()};
  t.is(counter(state, action), 678);
});

test('should decrement value by 1 when decrement action is given', t => {
  const action = decrement();
  t.is(counter(3, action), 2);
  t.is(counter(1, action), 0);
  t.is(counter(0, action), -1);
  t.is(counter(1000, action), 999);
});

test('should increment value by 1 when increment action is given', t => {
  const action = increment();
  t.is(counter(2, action), 3);
  t.is(counter(0, action), 1);
  t.is(counter(-1, action), 0);
  t.is(counter(999, action), 1000);
});

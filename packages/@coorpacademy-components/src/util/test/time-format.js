import test from 'ava';
import {formatMinutes} from '../time-format';

test('should format minutes correctly', t => {
  t.is(formatMinutes(0), '0min');
  t.is(formatMinutes(59), '59min');
  t.is(formatMinutes(60), '1h');
  t.is(formatMinutes(61), '1h 01min');
  t.is(formatMinutes(120), '2h');
});

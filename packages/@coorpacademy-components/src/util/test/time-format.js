import test from 'ava';
import {formatMinutes} from '../time-format';

test('should format minutes correctly', t => {
  const minutes1 = 60;
  const timeString1 = '1h ';

  const minutes2 = 59;
  const timeString2 = '59min';

  const minutes3 = 61;
  const timeString3 = '1h 01min';

  t.is(formatMinutes(minutes1), timeString1);
  t.is(formatMinutes(minutes2), timeString2);
  t.is(formatMinutes(minutes3), timeString3);
});

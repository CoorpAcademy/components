import test from 'ava';
import { stopPropagation } from '../../util/bubbling';

test('should call stopPropagation', t => {
  const event = {stopPropagation: () => true};
  stopPropagation(event);
});


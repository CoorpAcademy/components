import test from 'ava';
import { stopPropagation } from '../bubbling';

test('should call stopPropagation', t => {
  const event = {stopPropagation: () => true};
  stopPropagation(event);
});

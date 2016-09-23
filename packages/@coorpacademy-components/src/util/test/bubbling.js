import test from 'ava';
import stopPropagation from '../bubbling';

test('should call stopPropagation', t => {
  const customEvent = {stopPropagation: () => true};
  stopPropagation(customEvent);
});

import test from 'ava';
import {isMobile} from '../check-is-mobile';

test('should return true', t => {
  t.truthy(isMobile('iphone'));
});

test('should return false', t => {
  t.falsy(isMobile('noiphone'));
});

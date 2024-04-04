import test from 'ava';
import {isMobile} from '../check-is-mobile';

test('should return true', t => {
  t.truthy(isMobile('iphone'));
});

test('should return false if useragent is not mobile', t => {
  t.falsy(isMobile('noiphone'));
});

test('should return false if useragent is undefined', t => {
  t.falsy(isMobile(undefined));
});

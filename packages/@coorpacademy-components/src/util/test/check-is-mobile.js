import test from 'ava';
import {isMobile} from '../check-is-mobile';

// Mock global objects
const mockWindow = {
  ontouchstart: undefined,
  innerWidth: 1024
};

const mockNavigator = {
  maxTouchPoints: 0,
  msMaxTouchPoints: 0,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
};

// Replace global objects with mocks
Object.defineProperty(global, 'window', {
  value: mockWindow,
  writable: true,
  configurable: true
});

Object.defineProperty(global, 'navigator', {
  value: mockNavigator,
  writable: true,
  configurable: true
});

// Reset mocks before and after each test
test.beforeEach(() => {
  global.window.ontouchstart = undefined;
  global.window.innerWidth = 1024;
  global.navigator.maxTouchPoints = 0;
  global.navigator.msMaxTouchPoints = 0;
  global.navigator.userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
});

test('should return false for non-mobile devices', t => {
  t.falsy(isMobile(navigator.userAgent));
});

test('should return true for small screen devices', t => {
  global.window.innerWidth = 768;
  t.truthy(isMobile(navigator.userAgent));
});

test('should return true for touch devices with mobile user agent', t => {
  global.window.ontouchstart = true;
  global.navigator.userAgent =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';
  t.truthy(isMobile(navigator.userAgent));
});

test('should return true for devices with maxTouchPoints and mobile user agent', t => {
  global.navigator.maxTouchPoints = 5;
  global.navigator.userAgent =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';
  t.truthy(isMobile(navigator.userAgent));
});

test('should return true for devices with msMaxTouchPoints and mobile user agent', t => {
  global.navigator.msMaxTouchPoints = 5;
  global.navigator.userAgent =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';
  t.truthy(isMobile(navigator.userAgent));
});

test('should return false for touch devices without mobile user agent', t => {
  global.window.ontouchstart = true;
  t.falsy(isMobile(navigator.userAgent));
});

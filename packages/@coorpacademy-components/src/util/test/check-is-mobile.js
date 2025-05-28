import test from 'ava';
import {isMobile} from '../check-is-mobile';

// Mock global objects
const mockWindow = {
  ontouchstart: undefined
};

const mockNavigator = {
  maxTouchPoints: 0,
  msMaxTouchPoints: 0
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
  global.navigator.maxTouchPoints = 0;
  global.navigator.msMaxTouchPoints = 0;
});

test('should return false for non-touch devices', t => {
  t.falsy(isMobile());
});

test('should return true for touch devices', t => {
  global.window.ontouchstart = true;
  t.truthy(isMobile());
});

test('should return true for devices with maxTouchPoints', t => {
  global.navigator.maxTouchPoints = 5;
  t.truthy(isMobile());
});

test('should return true for devices with msMaxTouchPoints', t => {
  global.msMaxTouchPoints = 5;
  t.truthy(isMobile());
});

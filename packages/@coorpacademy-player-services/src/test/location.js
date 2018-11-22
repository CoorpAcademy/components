import test from 'ava';
import * as Location from '../location'; // eslint-disable-line no-shadow

test('should reload page on retry', t => {
  t.plan(1);
  global.window = {
    location: {
      reload: () => t.pass()
    }
  };
  Location.retry();
});

test('should reload page on exit', t => {
  t.plan(1);
  global.window = {
    location: {
      reload: () => t.pass()
    }
  };
  Location.exit();
});

test('should reload page on back', t => {
  t.plan(1);
  global.window = {
    location: {
      reload: () => t.pass()
    }
  };
  Location.back();
});

test('should reload page on nextLevel', t => {
  t.plan(1);
  global.window = {
    location: {
      reload: () => t.pass()
    }
  };
  Location.nextLevel();
});

test('should reload page on seeComment', t => {
  t.plan(1);
  global.window = {
    location: {
      reload: () => t.pass()
    }
  };
  Location.seeComment();
});

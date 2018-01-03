// @flow
import test from 'ava';
import checkCondition from '../condition-operators';

const testCondition = (t, [opNormal, opNegative]) => <T>(
  expectedResult: boolean,
  expectedValues: Array<T>,
  value: T
) => {
  t.is(checkCondition(opNormal, expectedValues, value), expectedResult);
  t.is(checkCondition(opNegative, expectedValues, value), !expectedResult);
};

test('should return true for IN (false for NOT_IN) condition if value is among the expected values', t => {
  const check = testCondition(t, ['IN', 'NOT_IN']);

  check(true, [1, 2, 3], 1);
  check(true, [1, 2, 3], 2);
  check(true, [1, 2, 3], 3);
  check(true, ['foo', 'bar', 'baz'], 'bar');
  check(true, [['foo', 'bar']], ['foo', 'bar']);
});

test('should return false for IN (true for NOT_IN) condition if value is not among the expected values', t => {
  const check = testCondition(t, ['IN', 'NOT_IN']);

  check(false, [1, 2, 3], 4);
  check(false, [1, 2, 3], -1);
  check(false, [1, 2, 3], 'no');
  check(false, ['foo', 'bar', 'baz'], 'no');
  check(false, ['foo', 'bar', 'baz'], 1);
  check(false, [['foo', 'bar']], ['foo', 'baz']);
  check(false, [['foo', 'bar']], ['bar', 'foo']);
});

test('should return true for EQUALS (false for NOT_EQUALS) condition if value is among the first expected value', t => {
  const check = testCondition(t, ['EQUALS', 'NOT_EQUALS']);

  check(true, [1], 1);
  check(true, [1, 2, 3], 1);
  check(true, ['foo'], 'foo');
  check(true, [['foo', 'bar']], ['foo', 'bar']);
});

test('should return false for EQUALS (true for NOT_EQUALS) condition if value is not the first expected value', t => {
  const check = testCondition(t, ['EQUALS', 'NOT_EQUALS']);

  check(false, [1], 4);
  check(false, [1, 4], 4);
  check(false, [1], -1);
  check(false, [1], 'no');
  check(false, ['foo', 'bar', 'baz'], 'bar');
  check(false, ['foo', 'bar', 'baz'], 1);
  check(false, [['foo', 'bar']], ['foo', 'baz']);
  check(false, [['foo', 'bar']], ['bar', 'foo']);
});

test('should return true for BETWEEN (false for NOT_BETWEEN) condition if value is between the two first elements (included)', t => {
  const check = testCondition(t, ['BETWEEN', 'NOT_BETWEEN']);

  check(true, [5, 10], 8);
  check(true, [5, 10], 5);
  check(true, [5, 10], 10);
  check(true, [10, 5], 8);
  check(true, [-100, 0], -8);
});

test('should return "false" for BETWEEN (false for NOT_BETWEEN) condition if value is not between the two first elements', t => {
  const check = testCondition(t, ['BETWEEN', 'NOT_BETWEEN']);

  check(false, [5, 10], 4);
  check(false, [5, 10], 10.001);
  check(false, [10, 5], 3);
  check(false, [10, 5], 13);
  check(false, [-100, 0], 8);
});

test('should return true for LT (false for GTE) condition if value is less than expected value', t => {
  const check = testCondition(t, ['LT', 'GTE']);

  check(true, [1], 0);
  check(true, [1], -10);
  check(true, [10], -10);
});

test('should return false for LT (true for GTE) condition if value is greater or equal than expected value', t => {
  const check = testCondition(t, ['LT', 'GTE']);

  check(false, [1], 10);
  check(false, [1], 1);
  check(false, [-5], 0);
  check(false, [-10], 10);
});

test('should return true for GT (false for LTE) condition if value is greater than expected value', t => {
  const check = testCondition(t, ['GT', 'LTE']);

  check(true, [1], 10);
  check(true, [-5], 0);
  check(true, [-10], 10);
});

test('should return false for GT (true for GTE) condition if value is less or equal than expected value', t => {
  const check = testCondition(t, ['GT', 'LTE']);

  check(false, [1], 0);
  check(false, [1], -10);
  check(false, [1], 1);
  check(false, [10], -10);
});

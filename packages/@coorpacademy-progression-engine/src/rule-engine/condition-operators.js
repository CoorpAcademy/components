// @flow
import {gt, isEqual, lt, negate, sortBy} from 'lodash/fp';

const IN = <T>(expectedValues: Array<T>, value: T): boolean => {
  return expectedValues.some(isEqual(value));
};

const NOT_IN: <T>(expectedValues: Array<T>, value: T) => boolean = negate(IN);

const EQUALS = <T>(expectedValues: Array<T>, value: T): boolean => {
  return isEqual(expectedValues[0])(value);
};

const NOT_EQUALS: <T>(expectedValues: Array<T>, value: T) => boolean = negate(EQUALS);

const LT = <T>(expectedValues: Array<T>, value: T): boolean => {
  return lt(value)(expectedValues[0]);
};

const GT = <T>(expectedValues: Array<T>, value: T): boolean => {
  return gt(value)(expectedValues[0]);
};

const LTE: <T>(expectedValues: Array<T>, value: T) => boolean = negate(GT);
const GTE: <T>(expectedValues: Array<T>, value: T) => boolean = negate(LT);

const BETWEEN = <T>(expectedValues: Array<T>, value: T): boolean => {
  const [min: T, max: T]: Array<T> = sortBy(v => v)(expectedValues);
  return GTE([min], value) && LTE([max], value);
};

const NOT_BETWEEN: <T>(expectedValues: Array<T>, value: T) => boolean = negate(BETWEEN);

const operators = {
  BETWEEN,
  EQUALS,
  GT,
  GTE,
  IN,
  LT,
  LTE,
  NOT_BETWEEN,
  NOT_EQUALS,
  NOT_IN
};

export type OperatorKeys = $Keys<typeof operators>;

const checkCondition = <T>(
  operatorKey: OperatorKeys,
  expectedValues: Array<T>,
  value: ?T
): boolean => {
  if (value === null || value === undefined) return false;
  return operators[operatorKey](expectedValues, value);
};

export default checkCondition;

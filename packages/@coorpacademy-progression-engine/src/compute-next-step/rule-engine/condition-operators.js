// @flow
import sortBy from 'lodash/fp/sortBy';
import negate from 'lodash/fp/negate';
import isEqual from 'lodash/fp/isEqual';

// eslint-disable-next-line flowtype/no-weak-types
const IN = (expectedValues: Array<any>, value: any): boolean => {
  // TODO We may need to look at whether the order of items is important.
  // We need to extract that from the slide or add an addition operator for when the order matters.
  // Or maybe this is not important anymore, but we need to take a look at this before shipping.
  return expectedValues.some(isEqual(value));
};

// eslint-disable-next-line flowtype/no-weak-types
const EQUALS = (expectedValues: Array<any>, value: any): boolean => {
  return isEqual(expectedValues[0], value);
};

const BETWEEN = (expectedValues: Array<number>, value: number): boolean => {
  const [min, max] = sortBy(v => v, expectedValues);
  return min <= value && value <= max;
};

const LT = (expectedValues: Array<number>, value: number): boolean => {
  return value < expectedValues[0];
};

const GT = (expectedValues: Array<number>, value: number): boolean => {
  return value > expectedValues[0];
};

const operators = {
  IN,
  NOT_IN: negate(IN),
  EQUALS,
  NOT_EQUALS: negate(EQUALS),
  BETWEEN,
  NOT_BETWEEN: negate(BETWEEN),
  LT,
  GTE: negate(LT),
  GT,
  LTE: negate(GT)
};

const checkCondition = (
  operator: $Keys<typeof operators>,
  expectedValues: any, // eslint-disable-line flowtype/no-weak-types
  value: any // eslint-disable-line flowtype/no-weak-types
): boolean => {
  return operators[operator](expectedValues, value);
};

export default checkCondition;

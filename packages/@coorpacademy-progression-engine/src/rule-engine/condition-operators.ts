import gt from 'lodash/fp/gt';
import isEqual from 'lodash/fp/isEqual';
import lt from 'lodash/fp/lt';
import negate from 'lodash/fp/negate';
import sortBy from 'lodash/fp/sortBy';

const IN = <T>(expectedValues: T[], value: T): boolean => {
  return expectedValues.some(isEqual(value));
};

const NOT_IN: <T>(expectedValues: T[], value: T) => boolean = negate(IN);

const EQUALS = <T>(expectedValues: T[], value: T): boolean => {
  return isEqual(expectedValues[0])(value);
};

const NOT_EQUALS: <T>(expectedValues: T[], value: T) => boolean = negate(EQUALS);

const LT = <T>(expectedValues: T[], value: T): boolean => {
  return lt(value)(expectedValues[0]);
};

const GT = <T>(expectedValues: T[], value: T): boolean => {
  return gt(value)(expectedValues[0]);
};

const LTE: <T>(expectedValues: T[], value: T) => boolean = negate(GT);
const GTE: <T>(expectedValues: T[], value: T) => boolean = negate(LT);

const BETWEEN = <T>(expectedValues: T[], value: T): boolean => {
  const [min, max]: T[] = sortBy<T>(v => v)(expectedValues);
  return GTE([min], value) && LTE([max], value);
};

const NOT_BETWEEN: <T>(expectedValues: T[], value: T) => boolean = negate(BETWEEN);

export type OPERATORS = "BETWEEN" | "EQUALS" | "GT" | "GTE" | "IN" | "LT" | "LTE" | "NOT_BETWEEN" | "NOT_EQUALS" | "NOT_IN";

const checkCondition = <T>(
  operator: OPERATORS,
  expectedValues: T[],
  value: T | void
): boolean => {
  if (value === null || value === undefined) return false;

  switch(operator) {
    case "BETWEEN": {
      return BETWEEN(expectedValues, value);
    }
    case "EQUALS": {
      return EQUALS(expectedValues, value);
    }
    case "GT": {
      return GT(expectedValues, value);
    }
    case "GTE": {
      return GTE(expectedValues, value);
    }
    case "IN": {
      return IN(expectedValues, value);
    }
    case "LT": {
      return LT(expectedValues, value);
    }
    case "LTE": {
      return LTE(expectedValues, value);
    }
    case "NOT_BETWEEN": {
      return NOT_BETWEEN(expectedValues, value);
    }
    case "NOT_EQUALS": {
      return NOT_EQUALS(expectedValues, value);
    }
    case "NOT_IN": {
      return NOT_IN(expectedValues, value);
    }
    default: {
      return false;
    }
  }
};

export default checkCondition;

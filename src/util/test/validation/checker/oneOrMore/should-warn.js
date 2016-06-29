import test from 'ava';
import { checker } from '../../../../validation';
import { createFailure } from '../../macros';

const conditions = checker.shape({
  children: checker.oneOrMore
});
const props = null;

const validationFails = createFailure(conditions);

/* eslint-disable */
test('with no child', validationFails, props, null);
test('with empty array', validationFails, props, []);
test('with undefined children', validationFails);
/* eslint-enable */

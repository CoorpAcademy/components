import test from 'ava';
import { checker } from '../../../../validation';
import { createFailure } from '../../macros';

const conditions = checker.shape({
  props: checker.none
});

const validationFails = createFailure(conditions);

/* eslint-disable */
test('with object', validationFails, {foo: true});
test('with boolean', validationFails, false);
test('with array not empty', validationFails, ['foo']);
test('with array of many entries', validationFails, ['foo', 'bar']);
test('with a string', validationFails, 'polo');
/* eslint-enable */

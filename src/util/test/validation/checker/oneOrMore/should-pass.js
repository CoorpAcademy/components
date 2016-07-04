import test from 'ava';
import { checker } from '../../../../validation';
import { createSuccess } from '../../macros';

const conditions = checker.shape({
  children: checker.oneOrMore
});

const validationSucceed = createSuccess(conditions);
const props = null;

/* eslint-disable */
test('with children === [false]', validationSucceed, props, [false]);
test('with [{}]', validationSucceed, props, [{}]);
test('with many children', validationSucceed, props, ['foo', 'bar']);
/* eslint-enable */

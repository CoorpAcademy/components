import test from 'ava';
import { checker } from '../../../../validation';
import { createSuccess } from '../../macros';

const conditions = checker.shape({
  children: checker.one
});

const validationSucceed = createSuccess(conditions);
const props = null;

test('with children === [false]', validationSucceed, props, [false]);
test('with [{}]', validationSucceed, props, [{}]);
test('with ["foo"]', validationSucceed, props, ['foo']);

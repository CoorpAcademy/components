import test from 'ava';
import {checker} from '../../../../validation';
import {createFailure} from '../../macros';

const conditions = checker.shape({
  children: checker.one
});
const props = null;

const validationFails = createFailure(conditions);

test('with no child', validationFails, props, null);
test('with empty array', validationFails, props, []);
test('with undefined children', validationFails);
test('with many children', validationFails, props, ['foo', 'bar']);

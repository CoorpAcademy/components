import test from 'ava';
import {checker} from '../../../../validation';
import {createSuccess} from '../../macros';

const conditions = checker.shape({
  children: checker.many
});

const validationSucceed = createSuccess(conditions);
const props = null;

test('with ["foo", "bar"]', validationSucceed, props, ['foo', 'bar']);
test('with ["foo", {}]', validationSucceed, props, ['foo', {}]);

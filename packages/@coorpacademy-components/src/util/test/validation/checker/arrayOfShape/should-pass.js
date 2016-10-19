import test from 'ava';
import {checker} from '../../../../validation';
import {createSuccess} from '../../macros';

const conditions = checker.shape({
  props: checker.arrayOf(checker.shape({
    foo: checker.string,
    bar: checker.string.optional
  })).optional
});

const validationSucceed = createSuccess(conditions);

const foo = 'foo';
const bar = 'bar';

test('should validate null value', validationSucceed);
test('should validate empty array', validationSucceed, []);
test('should validate array with valid shape', validationSucceed, [{foo, bar}]);
test('should validate array with valid shape without optional value', validationSucceed, [{foo}]);

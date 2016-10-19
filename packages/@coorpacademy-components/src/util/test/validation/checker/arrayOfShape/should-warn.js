import test from 'ava';
import {checker} from '../../../../validation';
import {createFailure} from '../../macros';

const conditions = checker.shape({
  props: checker.arrayOf(checker.shape({
    foo: checker.string.optional,
    bar: checker.string
  }))
});

const foo = 'foo';

const validationFails = createFailure(conditions);
test('should throw error if array isn\'t defined', validationFails);
test('should throw error if type is not valid', validationFails, [foo]);
test('should throw error if shape is not valid', validationFails, [{foo}]);

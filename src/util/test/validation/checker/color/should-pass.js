import test from 'ava';
import { checker } from '../../../../validation';
import { createSuccess } from '../../macros';

const conditions = checker.shape({
  props: checker.color.optional
});

const validationSucceed = createSuccess(conditions);

test('with no color as it is optional here', validationSucceed);
test('with #123', validationSucceed, '#123');
test('with #ddd', validationSucceed, '#ddd');
test('with #123123', validationSucceed, '#123213');
test('with #dedede', validationSucceed, '#dedede');

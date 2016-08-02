import test from 'ava';
import { checker } from '../../../../validation';
import { createSuccess } from '../../macros';

const conditions = checker.shape({
  props: checker.none
});

const validationSucceed = createSuccess(conditions);

/* eslint-disable */
test('with props === undefined', validationSucceed, undefined);
test('with props === null', validationSucceed, null);
test('with empty array', validationSucceed, []);
test('with empty object', validationSucceed, {});
test('with [null]', validationSucceed, [null]);
test('with [undefined]', validationSucceed, [undefined]);
/* eslint-enable */

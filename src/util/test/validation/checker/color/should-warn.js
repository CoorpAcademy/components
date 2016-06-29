import test from 'ava';
import { checker } from '../../../../validation';
import { createFailure } from '../../macros';

const conditions = checker.shape({
  children: checker.color
});

const validationFails = createFailure(conditions);
test('with no child', validationFails);

/* eslint-disable */
test('with []', validationFails, []);
test('with {}', validationFails, {});
test('with "plop"', validationFails, 'plop');
test('with "#11"', validationFails, '#11');
test('with "#11g"', validationFails, '#11g');
test('with "#1122"', validationFails, '#1122');
test('with "#1122334"', validationFails, '#1122334');
test('with "#112233d"', validationFails, '#112233d');
/* eslint-enable */

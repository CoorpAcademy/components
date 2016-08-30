import test from 'ava';
import { checker } from '../../../../validation';
import { createFailure } from '../../macros';

const conditions = checker.shape({
  children: checker.url
});

const validationFails = createFailure(conditions);
const test1 = 'http:plop.com';
const test2 = 'www.plop.com/plip/ee';
const test3 = 'plup';

test('with no child', validationFails);

/* eslint-disable */
test(`with ${test1}`, validationFails, test1);
test(`with ${test2}`, validationFails, test2);
test(`with ${test3}`, validationFails, test3);
/* eslint-enable */

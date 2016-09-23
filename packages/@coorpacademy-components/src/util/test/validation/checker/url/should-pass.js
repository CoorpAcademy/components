import test from 'ava';
import {checker} from '../../../../validation';
import {createSuccess} from '../../macros';

const conditions = checker.shape({
  props: checker.url
});

const validationSucceed = createSuccess(conditions);
const test1 = 'http://plop.com';
const test2 = 'http://www.plop.com/plip/ee';
const test3 = 'http://plop.plup?test=123';

test(`with ${test1}`, validationSucceed, `${test1}`);
test(`with ${test2}`, validationSucceed, `${test2}`);
test(`with ${test3}`, validationSucceed, `${test3}`);

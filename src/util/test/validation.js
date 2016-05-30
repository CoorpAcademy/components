import test from 'ava';
import { checker, createValidate } from '../validation';

test('should provide a vaildate function', t => {
  const conditions = checker.shape({});
  const validate = createValidate(conditions);
  t.pass();
});

test('[.oneOrMore] and [.none] rule should pass', t => {
  t.plan(2);
  const conditions = checker.shape({
    props: checker.none,
    children: checker.oneOrMore
  });

  const validate = createValidate(conditions);
  t.pass();

  validate(undefined, [{}]);
  validate(null, [{}]);
  validate([], [{}]);
  validate({}, [{}]);
  t.pass();
});

test('[.oneOrMore] rule should fail with no child', t => {
  const conditions = checker.shape({
    children: checker.oneOrMore
  });

  const validate = createValidate(conditions);

  try {
    validate();
    t.fail();
  }
  catch (error) {
  }

});

test('[.none] rule should fail', t => {
  const conditions = checker.shape({
    props: checker.none
  });

  const validate = createValidate(conditions);

  try {
    validate({foo: true});
    t.fail();
  }
  catch (error) {
    console.log(err);
  }

  try {
    validate(false);
    t.fail();
  }
  catch (error) {
  }

  try {
    validate(['foo']);
    t.fail();
  }
  catch (error) {
  }
});

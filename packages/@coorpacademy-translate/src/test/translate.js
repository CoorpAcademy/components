import test from 'ava';
import createTranslate from '../translate';

test('should create translate function', t => {
  const translate = createTranslate({
    'f{{oo}}': 'b{{ar}}'
  });

  t.deepEqual(translate('f{{oo}}', {ar: 'ar'}), 'bar');
});

test('should use key if any locales match', t => {
  const translate = createTranslate({
    'f{{oo}}': 'f{{oo}}'
  });

  t.deepEqual(translate('f{{oo}}', {oo: 'oo'}), 'foo');
});

test("shouldn't replace if any data match", t => {
  const translate = createTranslate({
    'f{{oo}}': 'f{{oo}}'
  });

  t.deepEqual(translate('f{{oo}}'), 'f{{oo}}');
});

test('should accept empty string value', t => {
  const translate = createTranslate({
    foo: ''
  });

  t.deepEqual(translate('foo'), '');
});

test("should throw error if template isn't a string", t => {
  const translate = createTranslate({
    foo: 0
  });

  t.throws(() => translate('foo'));
  t.throws(() => translate('bar'));
});

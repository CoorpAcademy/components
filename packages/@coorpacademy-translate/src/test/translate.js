import test from 'ava';
import createTranslate from '../translate';

test('should create translate function', t => {
  const translate = createTranslate({
    'f{{oo}}': 'b{{ar}}'
  });

  t.is(translate('f{{oo}}', {ar: 'ar'}), 'bar');
});

test('should use key if any locales match', t => {
  const translate = createTranslate({
    'f{{oo}}': 'f{{oo}}'
  });

  t.is(translate('f{{oo}}', {oo: 'oo'}), 'foo');
});

test("shouldn't replace if any data match", t => {
  const translate = createTranslate({
    'f{{oo}}': 'f{{oo}}'
  });

  t.is(translate('f{{oo}}'), 'f{{oo}}');
});

test('should accept empty string value', t => {
  const translate = createTranslate({
    foo: ''
  });

  t.is(translate('foo'), '');
});

test('should use the regular key when count property is passed and equal to 1 or not a number', t => {
  const translate = createTranslate({
    foo_none: 'I have no apples',
    foo_plural: 'I have {{count}} apples',
    foo: 'I have {{count}} apple'
  });

  t.is(translate('foo', {count: 1}), 'I have 1 apple');
  t.is(translate('foo', {count: NaN}), 'I have NaN apple');
  t.is(translate('foo', {count: 'not a number'}), 'I have not a number apple');
});

test('should use the plural key when count property is passed and greater than 1 or negative', t => {
  const translate = createTranslate({
    foo_none: 'I have no apples',
    foo_plural: 'I have {{count}} apples',
    foo: 'I have {{count}} apple'
  });

  t.is(translate('foo', {count: 2}), 'I have 2 apples');
  t.is(translate('foo', {count: 3}), 'I have 3 apples');
  t.is(translate('foo', {count: 100}), 'I have 100 apples');
  t.is(translate('foo', {count: -1}), 'I have -1 apples');
  t.is(translate('foo', {count: -2}), 'I have -2 apples');
  t.is(translate('foo', {count: -100}), 'I have -100 apples');
});

test('should use the none key when count property is passed and equal to 0', t => {
  const translate = createTranslate({
    foo_none: 'I have no apples',
    foo_plural: 'I have {{count}} apples',
    foo: 'I have {{count}} apple'
  });

  t.is(translate('foo', {count: 0}), 'I have no apples');
});

test('should use the regular key when plural key should be used but does not exist', t => {
  const translate = createTranslate({
    foo_none: 'I have no apples',
    foo: 'I have {{count}} apple'
  });

  t.is(translate('foo', {count: 2}), 'I have 2 apple');
});

test('should use the regular key when none key should be used but does not exist', t => {
  const translate = createTranslate({
    foo_plural: 'I have {{count}} apples',
    foo: 'I have {{count}} apple'
  });

  t.is(translate('foo', {count: 0}), 'I have 0 apple');
});

test("should throw error if template isn't a string", t => {
  const translate = createTranslate({
    foo: 0
  });

  t.throws(() => translate('foo'), 'Key foo not found!');
});

test("should throw error if template couldn't be found", t => {
  const translate = createTranslate({
    foo: 'Foo'
  });

  t.throws(() => translate('bar'), 'Key bar not found!');
});

import test from 'ava';
import addClassName from '../add-class-name';

test(' › should merge classNames', t => {
  const child = {
    properties: {
      className: 'foo'
    }
  };

  const wrapped = addClassName('bar')(child);
  t.is(wrapped, 'foo bar');
});

test(' › should init classNames', t => {
  const child = {};
  const wrapped = addClassName('foo')(child);
  t.is(wrapped, 'foo');
});

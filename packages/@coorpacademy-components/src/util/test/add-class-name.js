import test from 'ava';
import React from 'react';
import addClassName from '../add-class-name';

test('should merge classNames', t => {
  const result = addClassName('bar')({className: 'foo'});
  t.is(result.className, 'foo bar');
});

test('should init classNames', t => {
  const result = addClassName('foo')({});
  t.is(result.className, 'foo');
});

test('should add a className to an element', t => {
  const className = 'foo';
  const element = <h1 {...addClassName('bar')({className})} />;
  t.is(element.props.className, 'foo bar');
});

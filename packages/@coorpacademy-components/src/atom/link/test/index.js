import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {once} from 'lodash/fp';
import Link from '..';

browserEnv();

test('should call listeners within props', t => {
  t.plan(7);

  const props = {
    onClick: once(() => t.pass()),
    onMouseEnter: once(() => t.pass()),
    onMouseLeave: once(() => t.pass())
  };

  const {container} = render(<Link {...props} />);
  const link = container.querySelector('[data-name="link"]');
  t.truthy(link);
  fireEvent.mouseEnter(link);
  t.truthy(link);
  fireEvent.click(link);
  t.truthy(link);
  fireEvent.mouseLeave(link);
  t.truthy(link);
});

test('should not get href attribute if no href props is passed', t => {
  const props = {
    onClick: once(() => t.pass()),
    onMouseEnter: once(() => t.pass()),
    onMouseLeave: once(() => t.pass())
  };

  const {container} = render(<Link {...props} />);
  const link = container.querySelector('[data-name="link"]');

  const hrefValue = link.getAttribute('href');
  t.is(hrefValue, null);
});

test('should not get href attribute if disabled props is passed', t => {
  const props = {
    disabled: true,
    href: 'href',
    onClick: once(() => t.pass()),
    onMouseEnter: once(() => t.pass()),
    onMouseLeave: once(() => t.pass())
  };

  const {container} = render(<Link {...props} />);
  const link = container.querySelector('[data-name="link"]');

  const hrefValue = link.getAttribute('href');
  t.is(hrefValue, null);
});

test('should get href attribute corresponding to href props', t => {
  const props = {
    href: 'href',
    onClick: once(() => t.pass()),
    onMouseEnter: once(() => t.pass()),
    onMouseLeave: once(() => t.pass())
  };

  const {container} = render(<Link {...props} />);
  const link = container.querySelector('[data-name="link"]');

  const hrefValue = link.getAttribute('href');
  t.is(hrefValue, 'href');
});

test('should forward boolean and named download attributes', t => {
  const {container: booleanContainer} = render(<Link href="template.xlsx" download />);
  const booleanLink = booleanContainer.querySelector('[data-name="link"]');
  t.is(booleanLink.getAttribute('download'), '');

  const {container: namedContainer} = render(
    <Link href="template.xlsx" download="assignment-learners-template.xlsx" />
  );
  const namedLink = namedContainer.querySelector('[data-name="link"]');
  t.is(namedLink.getAttribute('download'), 'assignment-learners-template.xlsx');
});

import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Accordion from '..';
import fixture from './fixtures/all-are-openable';
import onlyOneFixture from './fixtures/only-one';

browserEnv();

test('should open/close accordion', t => {
  t.plan(11);

  const {container} = render(<Accordion {...fixture.props}>{fixture.children}</Accordion>);
  const partHeaders = container.querySelectorAll('.part__header');
  const partOpenHeaders = container.querySelectorAll('.part__openHeader');

  t.true(partHeaders.length > 0);
  t.true(partOpenHeaders.length > 0);

  fireEvent.click(partHeaders[1]);
  t.falsy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[0]);
  t.truthy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[0]);
  t.falsy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[2]);
  t.truthy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[2]);
  t.falsy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[1]);
  t.truthy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[1]);
  t.falsy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[0]);
  fireEvent.click(partHeaders[1]);
  fireEvent.click(partHeaders[2]);

  t.truthy(container.querySelector('.part__openHeader'));
  t.is(container.querySelectorAll('.part__openHeader').length, 3);
});

test('should open/close accordion - only one open', t => {
  t.plan(12);

  const {container} = render(
    <Accordion {...onlyOneFixture.props}>{onlyOneFixture.children}</Accordion>
  );

  const partHeaders = container.querySelectorAll('.part__header');
  const partOpenHeaders = container.querySelectorAll('.part__openHeader');

  t.true(partHeaders.length > 0);
  t.true(partOpenHeaders.length > 0);

  fireEvent.click(partHeaders[1]);
  t.is(container.querySelectorAll('.part__openHeader').length, 0);
  t.falsy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[0]);
  t.is(container.querySelectorAll('.part__openHeader').length, 1);
  t.truthy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[1]);
  t.is(container.querySelectorAll('.part__openHeader').length, 1);
  t.truthy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[2]);
  t.is(container.querySelectorAll('.part__openHeader').length, 1);
  t.truthy(container.querySelector('.part__openHeader'));

  fireEvent.click(partHeaders[2]);
  t.is(container.querySelectorAll('.part__openHeader').length, 0);
  t.falsy(container.querySelector('.part__openHeader'));
});

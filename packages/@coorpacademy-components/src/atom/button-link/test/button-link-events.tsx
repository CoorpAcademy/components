import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ButtonLink from '..';
import defaultFixture from './fixtures/button-primary-icon-left';
import submitButtonFixture from './fixtures/button-primary-no-icon-on-submit';

browserEnv();

test('should launch onClick & onKeyDown on click & keydown events', t => {
  t.plan(4);

  const props = {
    ...defaultFixture.props,
    onClick: () => t.pass(),
    onKeyDown: () => t.pass()
  };

  const {container} = render(<ButtonLink {...props} />);

  const button = container.querySelector(`[data-name="${defaultFixture.props['data-name']}"]`);
  t.truthy(button);

  fireEvent.click(button as Element);
  fireEvent.keyDown(button as Element, {key: 'Enter'});

  t.pass();
});

test('should launch onSubmit on click event', t => {
  t.plan(3);

  const props = {
    ...defaultFixture.props,
    onSubmit: () => {
      t.pass();
    }
  };

  const {container} = render(<ButtonLink {...props} />);

  const button = container.querySelector(`[data-name="${submitButtonFixture.props['data-name']}"]`);
  t.truthy(button);

  fireEvent.submit(button as Element);

  t.pass();
});

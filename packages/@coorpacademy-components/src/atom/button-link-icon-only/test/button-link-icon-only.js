import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ButtonLinkIconOnly from '..';
import defaultFixture from './fixtures/button-icon-bullet';

browserEnv();

test('should launch onClick on click event for ButtonLinkIconOnly', t => {
  t.plan(3);

  const props = {
    ...defaultFixture.props,
    onClick: () => t.pass()
  };

  const {container} = render(<ButtonLinkIconOnly {...props} />);

  const bulletButton = container.querySelector('[data-name="bullet-button"]');
  t.truthy(bulletButton);

  fireEvent.click(bulletButton);

  t.pass();
});

test('should mount ButtonLinkIconOnly even if the className does not exist', t => {
  const {container} = render(
    <ButtonLinkIconOnly {...defaultFixture.props} className={'noClass'} />
  );

  const bulletButton = container.querySelector('[data-name="bullet-button"]');
  t.truthy(bulletButton);

  t.pass();
});

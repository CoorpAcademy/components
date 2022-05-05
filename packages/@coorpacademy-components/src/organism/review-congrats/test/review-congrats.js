import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, cleanup, fireEvent, waitFor} from '@testing-library/react';
import ReviewCongrats from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test.afterEach(cleanup);

test('should click on skill link', async t => {
  const {container, unmount} = render(<ReviewCongrats {...defaultFixture.props} />);
  const wrapper = container.querySelectorAll('[data-name="review-congrats"]');
  t.truthy(wrapper);

  await waitFor(() => {
    const skillLink = container.querySelector('[data-name="revise-skill-link"]');
    t.truthy(skillLink);
    if (skillLink)
      t.notThrows(() => {
        return fireEvent.click(skillLink);
      });
  });

  unmount();

  t.pass();
});

test('should click on revise link', async t => {
  const {container, unmount} = render(<ReviewCongrats {...defaultFixture.props} />);
  const wrapper = container.querySelectorAll('[data-name="review-congrats"]');
  t.truthy(wrapper);

  await waitFor(() => {
    const reviseLink = container.querySelector('[data-name="revise-link"]');
    t.truthy(reviseLink);
    if (reviseLink)
      t.notThrows(() => {
        return fireEvent.click(reviseLink);
      });
  });

  unmount();

  t.pass();
});

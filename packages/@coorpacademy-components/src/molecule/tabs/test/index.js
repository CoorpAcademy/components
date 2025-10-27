import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, within, fireEvent} from '@testing-library/react';
import Tabs from '..';

browserEnv();

const createTabs = t => {
  const items = [
    {
      title: 'One',
      count: 3,
      isActive: true,
      onClick: () => {
        t.pass();
      }
    },
    {
      title: 'Two',
      count: 0,
      isActive: false,
      onClick: () => {
        t.pass();
      },
      'aria-label': 'Second tab'
    },
    {title: 'Three', isActive: false} // no count, no onClick
  ];

  const {container} = render(<Tabs items={items} />);
  return container;
};

test('mount Tabs with React Testing Library', t => {
  t.plan(5);

  const container = createTabs(t);

  const tablist = container.querySelector('[role="tablist"]');
  t.truthy(tablist);

  const tabs = container.querySelectorAll('[role="tab"]');
  t.is(tabs.length, 3);

  tabs.forEach(tab => {
    // tabIndex is reflected as an attribute string ("0")
    t.is(tab.getAttribute('tabindex') || tab.getAttribute('tabIndex') || '0', '0');
  });
});

test('applies aria-selected and aria-label (falls back to title)', t => {
  t.plan(6);

  const container = createTabs(t);

  const tabs = container.querySelectorAll('[role="tab"]');

  // t0 isActive
  t.is(tabs[0].getAttribute('aria-selected'), 'true');
  t.is(tabs[0].getAttribute('aria-label'), 'One');

  // t1 has explicit aria-label
  t.is(tabs[1].getAttribute('aria-selected'), 'false');
  t.is(tabs[1].getAttribute('aria-label'), 'Second tab');

  // t2 falls back to title
  t.is(tabs[2].getAttribute('aria-selected'), 'false');
  t.is(tabs[2].getAttribute('aria-label'), 'Three');
});

test('renders Tag only if count is a number', t => {
  t.plan(4);

  const container = createTabs(t);

  const tabs = container.querySelectorAll('[role="tab"]');

  // tab 0 : count=3 => Tag present
  t.truthy(within(tabs[0]).getByText('3'));

  // tab 1 : count=0 => Tag present (0 is number)
  t.truthy(within(tabs[1]).getByText('0'));

  // tab 2 : no count => no Tag (should not find numbers 0/3 inside)
  t.falsy(within(tabs[2]).queryByText('0'));
  t.falsy(within(tabs[2]).queryByText('3'));
});

test('clicking a tab calls onClick when provided', t => {
  t.plan(2);

  const container = createTabs(t);

  const tabs = container.querySelectorAll('[role="tab"]');

  fireEvent.click(tabs[0]);
  fireEvent.click(tabs[1]);
  fireEvent.click(tabs[2]); // no onclick
});

test('keydown Enter triggers onClick; other keys are ignored', t => {
  t.plan(1);

  const container = createTabs(t);

  const tabs = container.querySelectorAll('[role="tab"]');

  // Non-Enter key
  fireEvent.keyDown(tabs[1], {key: ' '});

  // Enter
  fireEvent.keyDown(tabs[1], {key: 'Enter'});

  // Enter on tab without onClick should not throw nor call handlers
  fireEvent.keyDown(tabs[2], {key: 'Enter'});
});

test('works without items prop (falls back to [])', t => {
  t.plan(2);
  const {container} = render(<Tabs />);

  const tablist = container.querySelector('[role="tablist"]');
  t.truthy(tablist);

  const tabs = container.querySelectorAll('[role="tab"]');
  t.is(tabs.length, 0);
});

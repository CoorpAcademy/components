import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import Dashboard from '..';
import fixture from './fixtures/with-assignments';
import empty from './fixtures/empty-assignments';

browserEnv();

test('assignments section renders prop title, subtitle, icon, three cards and count', t => {
  const view = render(<Dashboard {...fixture.props} />, {wrapper: wrappingComponent});
  t.truthy(view.container.querySelector('[data-name="cardsList"]'));
  t.truthy(view.getByText('Assigned to you'));
  t.truthy(view.getByText('Your next learning deadlines'));
  t.truthy(view.container.querySelector('[data-icon="clipboard-list"]'));
  t.truthy(view.getByText('3'));
  ['Safety level', 'Leadership level', 'Security certification'].forEach(title => {
    t.truthy(view.getByText(title));
  });
  [
    'To complete',
    'Due soon',
    'Overdue',
    'Ends 30 October',
    'Ends 20 October',
    'Ended 10 October'
  ].forEach(text => {
    t.truthy(view.getByText(text));
  });
  t.is(view.container.querySelectorAll('[data-name="card"]').length, 3);
  view.unmount();
});

test('empty assignments section retains zero count, message and page link', t => {
  [[], undefined].forEach(cards => {
    let clicks = 0;
    const section = empty.props.sections[0];
    const view = render(
      <Dashboard
        {...empty.props}
        sections={[
          {
            ...section,
            cards,
            emptyState: {
              ...section.emptyState,
              link: {
                ...section.emptyState.link,
                onClick: () => {
                  clicks++;
                }
              }
            }
          }
        ]}
      />,
      {wrapper: wrappingComponent}
    );
    t.truthy(view.getByText('0'));
    t.truthy(view.getByText('You have no assignments yet'));
    t.truthy(view.container.querySelector('[data-icon="clipboard-list"]'));
    const link = view.getByRole('link', {name: 'View all assignments'});
    t.is(link.getAttribute('href'), '/my-assignments');
    fireEvent.click(link);
    t.is(clicks, 1);
    t.is(view.container.querySelectorAll('[data-name="card"]').length, 0);
    view.unmount();
  });
});

test('section updates its count and hides empty copy when supplied cards arrive', t => {
  const section = {
    ...empty.props.sections[0],
    icon: {iconName: 'clock'},
    cards: undefined,
    emptyState: undefined
  };
  const view = render(<Dashboard {...empty.props} sections={[section]} />, {
    wrapper: wrappingComponent
  });
  t.truthy(view.getByText('0'));
  t.truthy(view.container.querySelector('[data-icon="clock"]'));
  t.falsy(view.container.querySelector('[data-icon="clipboard-list"]'));
  t.falsy(view.queryByRole('link', {name: 'View all assignments'}));
  view.rerender(
    <Dashboard
      {...empty.props}
      sections={[{...section, emptyState: {message: 'Nothing assigned < & >'}}]}
    />
  );
  t.truthy(view.getByText('Nothing assigned < & >'));
  t.falsy(view.queryByRole('link', {name: 'View all assignments'}));
  const emptyState = {
    message: 'Nothing assigned < & >',
    link: {label: 'Open assigned learning', href: '#assignments'}
  };
  view.rerender(<Dashboard {...empty.props} sections={[{...section, emptyState}]} />);
  const link = view.getByRole('link', {name: 'Open assigned learning'});
  t.is(link.getAttribute('href'), '#assignments');
  t.notThrows(() => fireEvent.click(link));
  view.rerender(
    <Dashboard
      {...empty.props}
      sections={[{...section, emptyState, cards: [fixture.props.sections[0].cards[0]]}]}
    />
  );
  t.truthy(view.getByText('1'));
  t.truthy(view.getByText('Safety level'));
  t.is(view.container.querySelectorAll('[data-name="card"]').length, 1);
  t.falsy(view.queryByText('Nothing assigned < & >'));
  t.falsy(view.queryByRole('link', {name: 'Open assigned learning'}));
  view.rerender(<Dashboard {...empty.props} sections={[{...section, emptyState}]} />);
  t.truthy(view.getByText('0'));
  t.falsy(view.queryByText('Safety level'));
  t.truthy(view.getByText('Nothing assigned < & >'));
  view.unmount();
});

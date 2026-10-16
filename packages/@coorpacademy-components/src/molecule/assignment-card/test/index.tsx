import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import tagStyle from '../../../atom/tag/style.css';
import notificationStyle from '../../card/notification.css';
import card from '../../card/test/fixtures/default';
import AssignmentCard from '..';
import shared from './fixtures/shared-content';

browserEnv();

test('each due state shows supplied text, distinct tag style and end date', t => {
  [
    {state: 'todo', message: 'To complete', style: tagStyle.defaultStyle},
    {state: 'dueSoon', message: 'Due within seven days', style: tagStyle.warning},
    {state: 'overdue', message: 'Deadline passed', style: tagStyle.failure},
    {state: 'done', message: 'Completed', style: tagStyle.success}
  ].forEach(({state, message, style}) => {
    const view = render(
      <AssignmentCard
        {...card.props}
        dueState={state}
        notification={{message, icon: 'addFavorite'}}
        endDateLabel="Ends 24 October"
      />,
      {wrapper: wrappingComponent}
    );
    const badge = view.getByText(message).closest('[data-name^="content-tag-"]');
    t.truthy(badge);
    style.split(' ').forEach((className: string) => t.true(badge?.classList.contains(className)));
    t.truthy(view.getByText('Ends 24 October'));
    view.unmount();
  });
});

test('due badge stays visible and its click reaches the card callback', t => {
  let clicks = 0;
  const view = render(
    <AssignmentCard
      {...card.props}
      dueState="dueSoon"
      notification={{message: 'Almost due', icon: 'addFavorite'}}
      onClick={() => {
        clicks++;
      }}
    />,
    {wrapper: wrappingComponent}
  );
  const badge = view.getByText('Almost due');
  const notification = badge.closest('[data-name="notification"]');
  t.true(notification?.classList.contains(notificationStyle.dueNotification));
  t.false(notification?.classList.contains(notificationStyle.showOverlay));
  t.false(notification?.classList.contains(notificationStyle.notificationWrapper));
  fireEvent.click(badge);
  t.is(clicks, 1);
  view.unmount();
});

test('shared content renders one card and both assignment titles', t => {
  const view = render(<AssignmentCard {...shared.props} />, {wrapper: wrappingComponent});
  t.is(view.container.querySelectorAll('[data-name="card"]').length, 1);
  t.truthy(view.getByText('Safety < essentials & onboarding'));
  t.truthy(
    view.getByText('Leadership & development for distributed teams with a long assignment name')
  );
  t.is(view.getAllByText('Ends 30 October').length, 1);
  t.false(view.container.innerHTML.includes('Safety < essentials'));
  view.unmount();
});

test('catalogue props and click callbacks survive assignment decoration', t => {
  let clicks = 0;
  let favorites = 0;
  const view = render(
    <AssignmentCard
      {...card.props}
      dueState="overdue"
      notification={{message: 'Overdue', icon: 'overdue'}}
      onClick={() => {
        clicks++;
      }}
      onFavoriteClick={() => {
        favorites++;
      }}
    />,
    {wrapper: wrappingComponent}
  );
  t.truthy(view.getByText('From Mass'));
  t.true(
    (
      view.container.querySelector('[data-name="cover"]') as HTMLElement
    ).style.backgroundImage.includes(card.props.image)
  );
  t.is((view.getByRole('progressbar') as HTMLElement).style.width, '65%');
  fireEvent.click(view.getByTestId('favorite-button'));
  t.is(favorites, 1);
  t.is(clicks, 0);
  fireEvent.click(view.container.querySelector('[data-name="card"]') as Element);
  t.is(clicks, 1);
  view.rerender(
    <AssignmentCard
      {...card.props}
      disabled
      onClick={() => {
        clicks++;
      }}
    />
  );
  const locked = view.container.querySelector('[data-name="card"]') as Element;
  t.is(locked.getAttribute('data-lock'), 'true');
  fireEvent.click(locked);
  t.is(clicks, 2);
  view.rerender(
    <AssignmentCard
      {...card.props}
      onClick={undefined}
      dueState="unknown"
      notification={{message: 'Added to favorites', icon: 'addFavorite'}}
    />
  );
  t.notThrows(() => fireEvent.click(view.container.querySelector('[data-name="card"]') as Element));
  t.truthy(view.getByText('Added to favorites'));
  t.falsy(view.container.querySelector('[data-type="unknown"]'));
  view.rerender(<AssignmentCard {...card.props} onClick={undefined} notification={undefined} />);
  t.notThrows(() => fireEvent.click(view.container.querySelector('[data-name="card"]') as Element));
  view.unmount();
});

test('missing notification and unsupported due states never invent a badge or date', t => {
  [undefined, 'unknown', 'constructor', 'todo', 'dueSoon', 'overdue', 'done'].forEach(dueState => {
    const view = render(
      <AssignmentCard
        {...card.props}
        dueState={dueState}
        notification={undefined}
        onClick={undefined}
      />,
      {wrapper: wrappingComponent}
    );
    t.truthy(view.getByText('From Mass'));
    t.falsy(view.container.querySelector('[data-name="notification"]'));
    t.falsy(view.queryByRole('list'));
    t.notThrows(() => fireEvent.click(view.getByText('From Mass')));
    view.unmount();
  });
});

test('immutable metadata preserves duplicate titles and clears on an ordinary-card rerender', t => {
  const notification = Object.freeze({message: 'Translated deadline', icon: 'overdue'});
  const assignments = [
    Object.freeze({title: 'Same assignment < & >'}),
    Object.freeze({title: 'Same assignment < & >'})
  ];
  Object.freeze(assignments);
  const props = Object.freeze({
    ...card.props,
    dueState: 'done',
    notification,
    assignments,
    endDateLabel: 'Finished on the supplied date'
  });
  const view = render(<AssignmentCard {...props} />, {wrapper: wrappingComponent});
  t.is(view.getAllByRole('listitem').length, 2);
  t.deepEqual(
    view.getAllByRole('listitem').map(item => item.textContent),
    ['Same assignment < & >', 'Same assignment < & >']
  );
  t.is(view.container.querySelectorAll('[data-name="card"]').length, 1);
  const badge = view.getByText('Translated deadline').closest('[data-name^="content-tag-"]');
  tagStyle.success
    .split(' ')
    .forEach((className: string) => t.true(badge?.classList.contains(className)));
  t.truthy(view.getByText('Finished on the supplied date'));
  t.is(notification.icon, 'overdue');
  view.rerender(<AssignmentCard {...card.props} />);
  t.falsy(view.queryByText('Translated deadline'));
  t.falsy(view.queryByText('Finished on the supplied date'));
  t.falsy(view.queryByRole('list'));
  view.unmount();
});

test('unknown states suppress due notifications and retain both favorite overlays', t => {
  let clicks = 0;
  const onClick = () => {
    clicks++;
  };
  const view = render(
    <AssignmentCard
      {...card.props}
      dueState="overdue"
      notification={{message: 'Old overdue badge', icon: 'overdue'}}
      onClick={onClick}
    />,
    {wrapper: wrappingComponent}
  );
  t.truthy(view.getByText('Old overdue badge'));
  [undefined, 'unknown', 'constructor'].forEach(dueState => {
    view.rerender(
      <AssignmentCard
        {...card.props}
        dueState={dueState}
        notification={{message: 'Unsupported deadline', icon: 'done'}}
        onClick={onClick}
      />
    );
    t.falsy(view.queryByText('Old overdue badge'));
    t.falsy(view.queryByText('Unsupported deadline'));
    t.falsy(view.container.querySelector('[data-name="notification"]'));
  });
  ['addFavorite', 'removeFavorite'].forEach(icon => {
    view.rerender(
      <AssignmentCard
        {...card.props}
        dueState="unknown"
        notification={{message: 'Favorite changed', icon}}
        onClick={onClick}
      />
    );
    const message = view.getByText('Favorite changed');
    const overlay = message.closest('[data-name="notification"]');
    t.is(overlay?.getAttribute('data-type'), icon);
    t.false(overlay?.classList.contains(notificationStyle.dueNotification));
    fireEvent.click(message);
    t.is(clicks, 0);
  });
  fireEvent.click(view.getByText('From Mass'));
  t.is(clicks, 1);
  view.unmount();
});

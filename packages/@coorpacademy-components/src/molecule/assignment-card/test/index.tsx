import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import notificationStyle from '../../card/notification.css';
import style from '../style.css';
import card from '../../card/test/fixtures/default';
import AssignmentCard from '..';
import shared from './fixtures/shared-content';
import overdueCertification from './fixtures/overdue';

browserEnv();

test('each due state shows supplied text, distinct tag style and end date', t => {
  [
    {state: 'todo', message: 'To complete', className: style.todo},
    {state: 'dueSoon', message: 'Due within seven days', className: style.dueSoon},
    {state: 'overdue', message: 'Deadline passed', className: style.overdue},
    {state: 'done', message: 'Completed', className: style.done}
  ].forEach(({state, message, className}) => {
    const view = render(
      <AssignmentCard
        {...card.props}
        dueState={state}
        notification={{message, icon: 'addFavorite'}}
        endDateLabel="Ends 24 October"
      />,
      {wrapper: wrappingComponent}
    );
    // @adw asg-cmp-04#R1: the due pill is the card's own opaque pill, not a back-office tag over the image.
    const badge = view.getByText(message).closest('[data-name="due-state"]');
    t.truthy(badge);
    t.is(badge?.getAttribute('data-type'), state);
    t.true(badge?.classList.contains(style.duePill));
    t.true(badge?.classList.contains(className));
    t.falsy(view.getByText(message).closest('[data-name^="content-tag-"]'));
    t.falsy(view.getByText(message).closest('[data-name="notification"]'));
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
  t.truthy(badge.closest('[data-name="due-state"]'));
  t.falsy(view.container.querySelector('[data-name="notification"]'));
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
    t.falsy(view.container.querySelector('[data-name="due-state"]'));
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
  const badge = view.getByText('Translated deadline').closest('[data-name="due-state"]');
  t.true(badge?.classList.contains(style.done));
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
    t.falsy(view.container.querySelector('[data-name="due-state"]'));
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
    t.true(overlay?.classList.contains(notificationStyle.notificationWrapper));
    t.falsy(view.container.querySelector('[data-name="due-state"]'));
    fireEvent.click(message);
    t.is(clicks, 0);
  });
  fireEvent.click(view.getByText('From Mass'));
  t.is(clicks, 1);
  view.unmount();
});

// @adw asg-cmp-04#R1: a certification assignment renders the certification card, not a course card.
test('a certification assignment renders the certification card with its pill, date and assignments', t => {
  let clicks = 0;
  const view = render(
    <AssignmentCard
      {...overdueCertification.props}
      onClick={() => {
        clicks++;
      }}
    />,
    {wrapper: wrappingComponent}
  );
  const {certificationCard} = overdueCertification.props;
  t.truthy(view.container.querySelector('[data-name^="certification-card-"]'));
  t.falsy(view.container.querySelector('[data-name="card"]'));
  t.is(
    view.getByText(certificationCard.goal.title).getAttribute('data-name'),
    'certification-title'
  );
  t.falsy(view.queryByText("5'learning"));
  t.is(
    view.getByText('Overdue').closest('[data-name="due-state"]')?.getAttribute('data-type'),
    'overdue'
  );
  t.truthy(view.getByText('Ended 10 October'));
  t.truthy(view.getByText('Safety onboarding'));
  fireEvent.click(view.getByText(certificationCard.goal.title));
  t.is(clicks, 1);
  view.unmount();
});

// @adw asg-cmp-04#R1: course and level assignments keep the catalogue card and its light title.
test('a course assignment keeps the catalogue card', t => {
  const view = render(
    <AssignmentCard
      {...card.props}
      type="course"
      dueState="todo"
      notification={{message: 'To complete', icon: 'todo'}}
    />,
    {
      wrapper: wrappingComponent
    }
  );
  t.truthy(view.container.querySelector('[data-name="card"]'));
  t.falsy(view.container.querySelector('[data-name^="certification-card-"]'));
  view.unmount();
});

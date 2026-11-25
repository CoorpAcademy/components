import test from 'ava';
import React from 'react';
import {forEach} from 'lodash/fp';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import PersonTags from '..';
import {people, translate} from '../../../test/helpers/population-owners';
import {Person} from '../types';

browserEnv();
test.afterEach.always(cleanup);

test.serial('the same You identity is rendered for editor and informational details', t => {
  const editor = render(<PersonTags users={[people[0]]} mode="remove" translate={translate} />);
  const details = render(<PersonTags users={[people[0]]} translate={translate} />);
  t.is(
    editor.container.querySelector('[data-name="person-tag"]')?.firstElementChild?.outerHTML,
    details.container.querySelector('[data-name="person-tag"]')?.firstElementChild?.outerHTML
  );
  t.true(details.container.textContent?.includes('You'));
  t.is(details.container.querySelectorAll('button').length, 0);
});

test.serial('removal calls the bound callback without an event and waits for new props', t => {
  const calls: unknown[][] = [];
  const user = {...people[0], onRemove: (...args: unknown[]) => calls.push(args)};
  const view = render(<PersonTags users={[user]} translate={translate} mode="remove" />);
  fireEvent.click(view.getByRole('button', {name: 'Remove owner alex.martin'}));
  t.deepEqual(calls, [[]]);
  t.truthy(view.getByText('alex.martin'));
  view.rerender(<PersonTags users={[]} translate={translate} mode="remove" />);
  t.truthy(view.getByText('No owners selected'));
  t.is(view.queryByText('alex.martin'), null);
});

test.serial('read-only details do not expose callbacks supplied for another view', t => {
  const view = render(<PersonTags users={people} translate={translate} />);
  t.is(view.queryAllByRole('button').length, 0);
  t.is(view.getAllByRole('listitem').length, 3);
});

test.serial('deactivated owners keep their identity, warning and manual removal', t => {
  const view = render(
    <PersonTags users={[{...people[1], deactivated: true}]} translate={translate} mode="remove" />
  );
  t.truthy(view.getByText('Deactivated'));
  t.truthy(view.container.querySelector('[data-icon="eye-slash"]'));
  t.truthy(view.getByRole('button', {name: 'Remove owner morgan.taylor'}));
});

test.serial('unknown and ambiguous accounts retain their login and distinct descriptions', t => {
  const users: Person[] = [
    {...people[0], current: false, status: 'unknown'},
    {...people[1], status: 'ambiguous'}
  ];
  const view = render(<PersonTags users={users} translate={translate} mode="remove" />);
  t.truthy(view.getByText('Account not found'));
  t.truthy(view.getByText('Multiple accounts found'));
  t.truthy(view.getByText('alex.martin'));
  t.truthy(view.getByText('morgan.taylor'));
  t.is(view.getAllByRole('button').length, 2);
});

test.serial('unresolved accounts can be shown when a detailed status is unavailable', t => {
  const view = render(
    <PersonTags users={[{...people[1], unresolved: true}]} translate={translate} />
  );
  t.truthy(view.getByText('Account not found'));
});

test.serial('only a selectable available suggestion calls its callback', t => {
  const calls: unknown[][] = [];
  const active = {...people[1], onSelect: (...args: unknown[]) => calls.push(args)};
  const unavailable: Person[] = [
    {
      ...people[0],
      current: false,
      status: 'deactivated',
      onSelect: () => t.fail('deactivated selected')
    },
    {...people[2], status: 'ambiguous', onSelect: () => t.fail('ambiguous selected')}
  ];
  const view = render(
    <PersonTags users={[active, ...unavailable]} translate={translate} mode="select" />
  );
  forEach(button => fireEvent.click(button), view.getAllByRole('button'));
  t.deepEqual(calls, [[]]);
  t.is(view.container.querySelectorAll('button:disabled').length, 2);
});

test.serial('a suggestion without an action is disabled', t => {
  const view = render(
    <PersonTags
      users={[{id: 'none', name: 'No Action', login: 'no.action'}]}
      translate={translate}
      mode="select"
    />
  );
  t.true((view.getByRole('button') as HTMLButtonElement).disabled);
});

test.serial('disabled views prevent selection and removal', t => {
  const user = {
    ...people[1],
    onSelect: () => t.fail('selected while disabled'),
    onRemove: () => t.fail('removed while disabled')
  };
  const view = render(<PersonTags users={[user]} translate={translate} mode="select" disabled />);
  fireEvent.click(view.getByRole('button'));
  t.true((view.getByRole('button') as HTMLButtonElement).disabled);
  view.rerender(<PersonTags users={[user]} translate={translate} mode="remove" disabled />);
  fireEvent.click(view.getByRole('button'));
  t.true((view.getByRole('button') as HTMLButtonElement).disabled);
});

test.serial('missing remove actions leave a readable identity without a fake control', t => {
  const view = render(
    <PersonTags
      users={[{id: 'known', name: 'Known Owner', login: 'known.owner'}]}
      translate={translate}
      mode="remove"
    />
  );
  t.truthy(view.getByText('Known Owner'));
  t.is(view.queryByRole('button'), null);
});

test.serial(
  'long names and logins are rendered as text without truncation or HTML execution',
  t => {
    const name = 'Alexandra Maximiliana de la Tour et du Bois <img src=x onerror=alert(1)>';
    const login = 'alexandra.maximiliana.very.long.login@example.invalid';
    const view = render(<PersonTags users={[{id: 'long', name, login}]} translate={translate} />);
    t.truthy(view.getByText(name));
    t.truthy(view.getByText(login));
    t.is(view.container.querySelector('img'), null);
  }
);

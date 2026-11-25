import test from 'ava';
import React, {useState} from 'react';
import browserEnv from 'browser-env';
import forEach from 'lodash/fp/forEach';
import {cleanup, fireEvent, render} from '@testing-library/react';
import SelectMultiple from '..';
import {wrappingComponent} from '../../../test/helpers/render-component';

browserEnv();
test.afterEach.always(cleanup);
const options = [
  {name: 'Management', value: 'management', selected: true},
  {name: 'Culture', value: 'culture', selected: false},
  {name: 'Customer experience', value: 'customers', selected: false}
];
const mount = props =>
  render(<SelectMultiple {...props} theme="coorpmanager" />, {wrapper: wrappingComponent});

test.serial(
  'accessible single selection opens, moves, selects and restores focus with the keyboard',
  t => {
    const changes = [];
    const view = mount({
      'aria-label': 'Field',
      title: 'Field',
      options,
      onChange: choice => changes.push(choice.value)
    });
    const trigger = view.getByRole('combobox', {name: 'Field'});
    t.is(trigger.getAttribute('aria-expanded'), 'false');
    fireEvent.keyDown(trigger, {key: 'ArrowDown'});
    t.is(document.activeElement.textContent, 'Management');
    fireEvent.keyDown(document.activeElement, {key: 'ArrowDown'});
    t.is(document.activeElement.textContent, 'Culture');
    fireEvent.keyDown(document.activeElement, {key: 'Enter'});
    t.deepEqual(changes, ['culture']);
    t.is(document.activeElement, trigger);
    t.is(trigger.getAttribute('aria-expanded'), 'false');
    fireEvent.keyDown(trigger, {key: 'Enter'});
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    t.is(trigger.getAttribute('aria-expanded'), 'false');
  }
);

const Searchable = () => {
  const [choices, setChoices] = useState(options);
  const [query, setQuery] = useState('');
  return (
    <SelectMultiple
      theme="coorpmanager"
      multiple
      title="Playlists"
      aria-label="Playlists"
      options={choices}
      search={{
        value: query,
        onChange: setQuery,
        label: 'Search playlists',
        emptyLabel: 'No results'
      }}
      onChange={selected =>
        setChoices(
          choices.map(choice => ({
            ...choice,
            selected: selected.some(item => item.value === choice.value)
          }))
        )
      }
    />
  );
};

test.serial('searching a multi-selection retains choices outside the filter', t => {
  const view = render(<Searchable />, {wrapper: wrappingComponent});
  fireEvent.click(view.getByRole('button', {name: 'Playlists'}));
  const search = view.getByRole('textbox', {name: 'Search playlists'});
  t.is(document.activeElement, search);
  fireEvent.change(search, {target: {value: 'Culture'}});
  t.is(view.queryByRole('checkbox', {name: 'Management'}), null);
  fireEvent.click(view.getByRole('checkbox', {name: 'Culture'}));
  fireEvent.change(search, {target: {value: ''}});
  t.true(view.getByRole('checkbox', {name: 'Management'}).checked);
  t.true(view.getByRole('checkbox', {name: 'Culture'}).checked);
  fireEvent.change(search, {target: {value: 'missing'}});
  t.truthy(view.getByText('No results'));
});

test.serial('disabling an open selector closes it and prevents further choices', t => {
  let changes = 0;
  const props = {
    theme: 'coorpmanager',
    'aria-label': 'Field',
    title: 'Field',
    options,
    onChange: () => {
      changes++;
    }
  };
  const view = mount(props);
  fireEvent.click(view.getByRole('combobox', {name: 'Field'}));
  view.rerender(<SelectMultiple {...props} disabled />);
  const trigger = view.getByRole('combobox', {name: 'Field'});
  t.is(trigger.getAttribute('aria-expanded'), 'false');
  fireEvent.click(trigger);
  t.is(trigger.getAttribute('aria-expanded'), 'false');
  t.is(changes, 0);
});

test.serial(
  'opening an existing single choice focuses that choice rather than changing the value',
  t => {
    const changes = [];
    const view = mount({
      'aria-label': 'Field',
      title: 'Field',
      options: options.map(choice => ({...choice, selected: choice.value === 'culture'})),
      onChange: choice => changes.push(choice.value)
    });
    fireEvent.keyDown(view.getByRole('combobox', {name: 'Field'}), {key: 'ArrowDown'});
    t.is(document.activeElement.textContent, 'Culture');
    fireEvent.keyDown(document.activeElement, {key: 'Enter'});
    t.deepEqual(changes, ['culture']);
  }
);

test.serial('ArrowUp from the search field focuses the last visible choice', t => {
  const view = render(<Searchable />, {wrapper: wrappingComponent});
  fireEvent.click(view.getByRole('button', {name: 'Playlists'}));
  const search = view.getByRole('textbox', {name: 'Search playlists'});
  fireEvent.keyDown(search, {key: 'ArrowUp'});
  t.is(document.activeElement, view.getByRole('checkbox', {name: 'Customer experience'}));
  fireEvent.keyDown(document.activeElement, {key: 'ArrowDown'});
  t.is(document.activeElement, view.getByRole('checkbox', {name: 'Management'}));
  fireEvent.keyDown(document.activeElement, {key: 'Escape'});
  t.is(document.activeElement, view.getByRole('button', {name: 'Playlists'}));
});

test.serial('a name search is case-insensitive and keeps the count next to its option', t => {
  const view = mount({
    multiple: true,
    title: 'Catalogue playlists',
    'aria-label': 'Catalogue playlists',
    selectionLabel: '1 playlist selected',
    options: [
      {
        name: 'Leadership essentials',
        value: 'leadership',
        selected: true,
        rightLabel: '14 contents'
      },
      {name: 'Former playlist', value: 'former', selected: true, rightLabel: 0, warning: true}
    ],
    search: {
      value: 'SHIP',
      label: 'Search catalogue',
      emptyLabel: 'No results',
      onChange: () => {}
    },
    onChange: () => {}
  });
  fireEvent.click(view.getByRole('button', {name: 'Catalogue playlists'}));
  t.truthy(view.getByRole('checkbox', {name: 'Leadership essentials'}));
  t.truthy(view.getByText('14 contents'));
  t.is(view.queryByRole('checkbox', {name: 'Former playlist'}), null);
  t.truthy(view.getByText('1 playlist selected'));
});

test.serial('leaving the selector closes it without changing the selected values', t => {
  let changes = 0;
  const view = mount({
    multiple: true,
    title: 'Playlists',
    'aria-label': 'Playlists',
    options,
    onChange: () => changes++
  });
  const trigger = view.getByRole('button', {name: 'Playlists'});
  fireEvent.click(trigger);
  fireEvent.blur(view.getByRole('checkbox', {name: 'Management'}), {relatedTarget: document.body});
  t.is(trigger.getAttribute('aria-expanded'), 'false');
  t.is(changes, 0);
});

test.serial('clicking a native checkbox label keeps search and selection usable', t => {
  const view = render(<Searchable />, {wrapper: wrappingComponent});
  const trigger = view.getByRole('button', {name: 'Playlists'});
  fireEvent.click(trigger);
  const search = view.getByRole('textbox', {name: 'Search playlists'});
  const checkbox = view.getByRole('checkbox', {name: 'Culture'});
  // jsdom does not perform the native label-mousedown focus default action.
  if (fireEvent.mouseDown(checkbox.closest('label'))) {
    fireEvent.blur(search, {relatedTarget: null});
  }
  fireEvent.click(checkbox.closest('label'));
  t.is(trigger.getAttribute('aria-expanded'), 'true');
  t.true(checkbox.checked);
  fireEvent.change(search, {target: {value: 'customer'}});
  const next = view.getByRole('checkbox', {name: 'Customer experience'});
  if (fireEvent.mouseDown(next.closest('label'))) {
    fireEvent.blur(search, {relatedTarget: null});
  }
  fireEvent.click(next.closest('label'));
  t.true(next.checked);
  t.is(trigger.getAttribute('aria-expanded'), 'true');
});

test.serial('a null-relatedTarget blur closes after focus really leaves the selector', t => {
  const view = render(<Searchable />, {wrapper: wrappingComponent});
  const trigger = view.getByRole('button', {name: 'Playlists'});
  fireEvent.click(trigger);
  fireEvent.blur(view.getByRole('textbox', {name: 'Search playlists'}), {relatedTarget: null});
  t.is(trigger.getAttribute('aria-expanded'), 'false');
});

forEach(
  theme => {
    forEach(
      key => {
        test.serial(`single choice selects once with ${key} in ${theme || 'default'} theme`, t => {
          const changes = [];
          const view = render(
            <SelectMultiple
              theme={theme}
              title="Field"
              aria-label="Field"
              options={options}
              onChange={choice => changes.push(choice.value)}
            />,
            {wrapper: wrappingComponent}
          );
          const trigger = view.getByRole('combobox', {name: 'Field'});
          fireEvent.keyDown(trigger, {key: 'ArrowDown'});
          fireEvent.keyDown(document.activeElement, {key});
          t.deepEqual(changes, ['management']);
          t.is(document.activeElement, trigger);
        });
      },
      ['Enter', ' ']
    );
    test.serial(
      `single-choice arrows skip nested checkbox controls in ${theme || 'default'} theme`,
      t => {
        const view = render(
          <SelectMultiple
            theme={theme}
            title="Field"
            aria-label="Field"
            options={options}
            onChange={() => {}}
          />,
          {wrapper: wrappingComponent}
        );
        fireEvent.keyDown(view.getByRole('combobox', {name: 'Field'}), {key: 'ArrowDown'});
        fireEvent.keyDown(document.activeElement, {key: 'ArrowDown'});
        t.is(document.activeElement.getAttribute('role'), 'option');
        t.is(document.activeElement.textContent, 'Culture');
      }
    );
  },
  [undefined, 'setup', 'cockpit', 'sidebar']
);

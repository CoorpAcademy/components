import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import SelectMultiple from '..';

browserEnv();
test.afterEach.always(cleanup);

const options = [
  {name: 'Empty playlist', value: 'empty', selected: true, disabled: true},
  {name: 'Available playlist', value: 'available', selected: false},
  {name: 'Unknown count', value: 'unknown', selected: false, disabled: true},
  {name: 'Another playlist', value: 'another', selected: false}
];

test.serial('single-select skips disabled options on opening and arrow navigation', t => {
  const changes = [];
  const view = render(
    <SelectMultiple
      theme="coorpmanager"
      aria-label="Playlist"
      options={options}
      onChange={choice => changes.push(choice.value)}
    />
  );
  const trigger = view.getByRole('combobox', {name: 'Playlist'});
  trigger.focus();
  fireEvent.keyDown(trigger, {key: 'ArrowDown'});
  t.is(document.activeElement.textContent, 'Available playlist');
  fireEvent.keyDown(document.activeElement, {key: 'ArrowDown'});
  t.is(document.activeElement.textContent, 'Another playlist');
  fireEvent.keyDown(document.activeElement, {key: 'ArrowDown'});
  t.is(document.activeElement.textContent, 'Available playlist');
  fireEvent.click(view.getByRole('option', {name: 'Unknown count'}));
  t.deepEqual(changes, []);
  fireEvent.keyDown(document.activeElement, {key: 'Enter'});
  t.deepEqual(changes, ['available']);
});

test.serial('multiple-select skips disabled checkboxes without hiding their labels', t => {
  const view = render(
    <SelectMultiple
      theme="coorpmanager"
      multiple
      aria-label="Playlists"
      options={options}
      onChange={() => t.fail('No selection expected')}
    />
  );
  fireEvent.click(view.getByRole('button', {name: 'Playlists'}));
  t.true(view.getByRole('checkbox', {name: 'Empty playlist'}).disabled);
  t.true(view.getByRole('checkbox', {name: 'Unknown count'}).disabled);
  t.is(document.activeElement.name, 'Available playlist');
  fireEvent.keyDown(document.activeElement, {key: 'ArrowDown'});
  t.is(document.activeElement.name, 'Another playlist');
  fireEvent.keyDown(document.activeElement, {key: 'ArrowUp'});
  t.is(document.activeElement.name, 'Available playlist');
});

test.serial('an entirely disabled single-select list keeps focus on its trigger', t => {
  const view = render(
    <SelectMultiple
      theme="coorpmanager"
      aria-label="Playlist"
      options={[options[0], options[2]]}
      onChange={() => t.fail('No selection expected')}
    />
  );
  const trigger = view.getByRole('combobox', {name: 'Playlist'});
  trigger.focus();
  fireEvent.keyDown(trigger, {key: 'ArrowDown'});
  fireEvent.keyDown(trigger, {key: 'ArrowDown'});
  t.is(document.activeElement, trigger);
});

test.serial('existing non-Coorpmanager checkboxes also receive per-option disabled state', t => {
  const view = render(
    <SelectMultiple options={options} multiple onChange={() => t.fail('No selection expected')} />
  );
  const blocked = view.container.querySelector('input[data-name="Empty playlist"]');
  t.true(blocked.disabled);
  blocked.click();
  t.true(blocked.checked);
  t.false(view.container.querySelector('input[data-name="Available playlist"]').disabled);
});

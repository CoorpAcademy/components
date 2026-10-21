import fs from 'fs';
import path from 'path';
import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import Tag from '../../../atom/tag';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentAudience from '..';
import combined, {rows} from './fixtures/combined';
import everyoneOn from './fixtures/everyone-on';
import idle from './fixtures/idle';
import populationsOnly from './fixtures/populations-only';
import individualsWithChips from './fixtures/individuals-with-chips';
import uploadDone from './fixtures/upload-done';
import uploadDoneExpanded from './fixtures/upload-done-expanded';
import uploadLoading from './fixtures/upload-loading';
import uploadError from './fixtures/upload-error';
import duplicateLogin from './fixtures/upload-done-duplicate-login';

browserEnv();
test.afterEach.always(cleanup);

const mount = props => render(<AssignmentAudience {...props} />, {wrapper: wrappingComponent});
const block = (view, name) => view.container.querySelector(`[data-name="${name}"]`);
const fixtures = {
  combined,
  everyoneOn,
  idle,
  populationsOnly,
  individualsWithChips,
  uploadDone,
  uploadDoneExpanded,
  uploadLoading,
  uploadError
};

// Every word a user can read or hear: text plus the readable attributes.
const readable = container =>
  [
    container.textContent,
    ...[...container.querySelectorAll('[aria-label],[title],[placeholder],[alt]')].flatMap(node =>
      ['aria-label', 'title', 'placeholder', 'alt'].map(name => node.getAttribute(name) || '')
    )
  ].join(' ');

test.serial('R1: renders as a titled page section from its own props, with no wizard host', t => {
  const view = mount(combined.props);
  const region = view.getByRole('region', {name: combined.props.title});
  t.truthy(within(region).getByText(combined.props.subtitle));
  ['everyone', 'populations', 'upload', 'individuals', 'estimated-audience'].forEach(name =>
    t.truthy(block(view, name), name)
  );
  const wizard = fs.readFileSync(path.join(__dirname, '../../wizard-contents/index.js'), 'utf8');
  t.false(wizard.includes('assignment-audience'));
  t.false(wizard.includes('AssignmentAudience'));
});

test.serial('R2: everyone disables populations, upload and individuals, with an explanation', t => {
  const view = mount(everyoneOn.props);
  t.truthy(view.getByText(everyoneOn.props.disabledExplanation));
  t.true(block(view, 'audience-sources').disabled);
  // Disabled through <fieldset disabled> (browsers disable every descendant control; this
  // jsdom does not compute :disabled through a fieldset, so the test asserts the containment).
  const sources = block(view, 'audience-sources');
  t.is(block(view, 'upload').querySelector('input[type="file"]').closest('fieldset'), sources);
  t.is(view.getByTestId('autocomplete-input').closest('fieldset'), sources);
  block(view, 'populations')
    .querySelectorAll('input')
    .forEach(input => t.is(input.closest('fieldset'), sources));
  t.is(block(view, 'everyone').querySelector('input').closest('fieldset'), null);
});

test.serial('R2: with everyone off, the sources are enabled and there is no explanation', t => {
  const view = mount(combined.props);
  t.false(block(view, 'audience-sources').disabled);
  t.is(view.queryByText(combined.props.disabledExplanation), null);
});

test.serial('R3: toggling everyone calls onChange with the new value', t => {
  const calls = [];
  const view = mount({
    ...combined.props,
    everyone: {...combined.props.everyone, onChange: value => calls.push(value)}
  });
  fireEvent.click(block(view, 'everyone').querySelector('input'));
  t.deepEqual(calls, [true]);
});

test.serial('each selected population shows as a chip with its count', t => {
  const view = mount(combined.props);
  const chips = block(view, 'population-chips');
  t.truthy(within(chips).getByText('Managers FR'));
  t.truthy(within(chips).getByText('412'));
  t.truthy(within(chips).getByText('Managers DE'));
  t.truthy(within(chips).getByText('236'));
  t.is(within(chips).queryByText('Sales EMEA'), null);
});

test.serial('removing a population chip calls onChange with the other selected options', t => {
  const calls = [];
  const view = mount({
    ...combined.props,
    populations: {...combined.props.populations, onChange: value => calls.push(value)}
  });
  fireEvent.click(within(block(view, 'population-chips')).getByText('Managers FR'));
  t.deepEqual(
    calls[0].map(option => option.value),
    ['managers-de']
  );
});

test.serial('R3: selecting a population calls onChange with the selected options', t => {
  const calls = [];
  const view = mount({
    ...combined.props,
    populations: {...combined.props.populations, onChange: value => calls.push(value)}
  });
  fireEvent.click(block(view, 'populations').querySelector('[data-name="select-languages"]'));
  fireEvent.click(block(view, 'populations').querySelectorAll('input[type="checkbox"]')[2]);
  t.deepEqual(
    calls[0].map(option => option.value),
    ['managers-fr', 'managers-de', 'sales-emea']
  );
});

test.serial('R3: choosing or dropping a file calls onUpload with the first file', t => {
  const files = [];
  const upload = {...idle.props.upload, onUpload: file => files.push(file)};
  const view = mount({...idle.props, upload});
  const xlsx = new window.File(['login'], 'a.xlsx');
  const csv = new window.File(['login'], 'b.csv');
  // A drop on the native input lands as a change event, like a browse.
  fireEvent.change(block(view, 'upload').querySelector('input[type="file"]'), {
    target: {files: [xlsx, csv]}
  });
  t.deepEqual(files, [xlsx]);
});

test.serial('R3: no upload while everyone is on or a file is being checked', t => {
  const files = [];
  const onUpload = file => files.push(file);
  const file = new window.File(['login'], 'a.xlsx');
  [
    {...everyoneOn.props, upload: {...everyoneOn.props.upload, onUpload}},
    {...uploadLoading.props, upload: {...uploadLoading.props.upload, onUpload}}
  ].forEach(props => {
    const view = mount(props);
    const input = view.container.querySelector('input[type="file"]');
    if (input) fireEvent.change(input, {target: {files: [file]}});
    cleanup();
  });
  t.deepEqual(files, []);
});

test.serial('the template link points at the template, and is disabled while everyone is on', t => {
  const enabled = mount(idle.props);
  const link = enabled.getByRole('link', {name: idle.props.upload.templateLink.label});
  t.is(link.getAttribute('href'), idle.props.upload.templateLink.href);
  cleanup();
  const off = mount(everyoneOn.props);
  t.true(off.getByRole('button', {name: everyoneOn.props.upload.templateLink.label}).disabled);
});

test.serial('R3: the file input accepts xlsx, xls and csv', t => {
  const view = mount(idle.props);
  t.is(block(view, 'upload').querySelector('input[type="file"]').accept, '.xlsx,.xls,.csv');
});

test.serial('R3: Replace, Remove and the rows toggle call their callbacks', t => {
  const calls = [];
  const upload = {
    ...uploadDone.props.upload,
    onReplace: () => calls.push('replace'),
    onRemove: () => calls.push('remove'),
    onToggleRows: () => calls.push('toggle')
  };
  const view = mount({...uploadDone.props, upload});
  fireEvent.click(view.getByRole('button', {name: upload.replaceLabel}));
  fireEvent.click(view.getByRole('button', {name: upload.removeLabel}));
  fireEvent.click(view.getByRole('button', {name: upload.toggleLabel}));
  t.deepEqual(calls, ['replace', 'remove', 'toggle']);
});

test.serial('R3: searching, adding and removing a learner call their callbacks', t => {
  const queries = [];
  const added = [];
  const removed = [];
  const individuals = {
    ...individualsWithChips.props.individuals,
    onSearch: query => queries.push(query),
    onAdd: learner => added.push(learner),
    onRemove: id => removed.push(id)
  };
  const view = mount({...individualsWithChips.props, individuals});
  const input = view.getByTestId('autocomplete-input');
  fireEvent.input(input, {target: {value: 'marc'}});
  t.deepEqual(queries, ['marc']);
  fireEvent.focus(input);
  fireEvent.click(view.getAllByRole('option')[1]);
  t.deepEqual(added, [individuals.suggestions[1]]);
  fireEvent.click(view.getByText('Pedro Costa'));
  t.deepEqual(removed, ['u2']);
});

test.serial('R3: a learner chip shows the name and the login', t => {
  const view = mount(combined.props);
  const chips = block(view, 'individuals');
  combined.props.individuals.selected.forEach(({label, login}) => {
    t.truthy(within(chips).getByText(label));
    t.truthy(within(chips).getByText(login));
  });
});

test.serial('R4: the upload summary shows the four counts as tags and the kept line', t => {
  const view = mount(uploadDone.props);
  const summary = block(view, 'upload-summary');
  const {summary: labels} = uploadDone.props.upload;
  [
    ['valid', 'success'],
    ['unknown', 'failure'],
    ['ambiguous', 'warning'],
    ['inactive', 'warning']
  ].forEach(([status, type], index) => {
    const expected = render(<Tag type={type} label={labels[status]} />);
    t.is(summary.children[index].innerHTML, expected.container.innerHTML, status);
    expected.unmount();
  });
  t.truthy(view.getByText(uploadDone.props.upload.keptLabel));
  t.truthy(view.getByText(uploadDone.props.upload.file.name));
});

test.serial(
  'R4: the rows table is collapsed until expanded, then lists each login with its status',
  t => {
    const collapsed = mount(uploadDone.props);
    t.is(block(collapsed, 'upload-rows'), null);
    t.is(
      collapsed
        .getByRole('button', {name: uploadDone.props.upload.toggleLabel})
        .getAttribute('aria-expanded'),
      'false'
    );
    cleanup();
    const expanded = mount(uploadDoneExpanded.props);
    const table = block(expanded, 'upload-rows');
    const cells = [...table.querySelectorAll('tbody tr')].map(tr =>
      [...tr.querySelectorAll('td')].map(td => td.textContent)
    );
    const {statusLabels} = uploadDoneExpanded.props.upload;
    t.deepEqual(
      cells,
      rows.map(({login, status}) => [login, statusLabels[status]])
    );
    t.deepEqual(
      [...table.querySelectorAll('th')].map(th => th.textContent),
      ['Login', 'Status']
    );
  }
);

test.serial('the same login twice in a file renders two rows', t => {
  const view = mount(duplicateLogin.props);
  const logins = [...block(view, 'upload-rows').querySelectorAll('tbody tr td:first-child')].map(
    td => td.textContent
  );
  t.is(logins.filter(login => login === 'jdoe').length, 2);
  t.is(logins.length, duplicateLogin.props.upload.rows.length);
});

test.serial('R4: loading and error states', t => {
  const loading = mount(uploadLoading.props);
  t.is(block(loading, 'upload-dropzone').getAttribute('aria-busy'), 'true');
  t.is(block(loading, 'upload-summary'), null);
  cleanup();
  const error = mount(uploadError.props);
  t.is(error.getByRole('alert').textContent, uploadError.props.upload.error);
  t.is(block(error, 'upload-summary'), null);
});

test.serial('R4: no email and no "group" anywhere: no prop, no label, no column', t => {
  t.false(
    fs.readFileSync(path.join(__dirname, '../index.js'), 'utf8').toLowerCase().includes('email')
  );
  Object.entries(fixtures).forEach(([name, fixture]) => {
    const view = mount(fixture.props);
    const words = readable(view.container).toLowerCase();
    t.false(words.includes('email'), name);
    t.notRegex(words, /\bgroups?\b/, name);
    t.false(words.includes('undefined'), name);
    t.false(JSON.stringify(fixture.props).toLowerCase().includes('email'), name);
    cleanup();
  });
});

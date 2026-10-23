import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import Tag from '../../../atom/tag';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentAudience from '..';
import combined from './fixtures/combined';
import everyoneOn from './fixtures/everyone-on';
import idle from './fixtures/idle';
import individualsWithChips from './fixtures/individuals-with-chips';
import uploadDone from './fixtures/upload-done';
import uploadDoneAllValid from './fixtures/upload-done-all-valid';
import uploadLoading from './fixtures/upload-loading';
import uploadError from './fixtures/upload-error';
import everyoneOnWithSources from './fixtures/everyone-on-with-sources';

browserEnv();
test.afterEach.always(cleanup);

const mount = props => render(<AssignmentAudience {...props} />, {wrapper: wrappingComponent});
const block = (view, name) => view.container.querySelector(`[data-name="${name}"]`);
test.serial('renders as a titled page section from its own props', t => {
  const view = mount(combined.props);
  const region = view.getByRole('region', {name: combined.props.title});
  t.truthy(within(region).getByText(combined.props.subtitle));
  ['everyone', 'populations', 'upload', 'individuals', 'estimated-audience'].forEach(name =>
    t.truthy(block(view, name), name)
  );
});

test.serial('the section title is a level-2 heading and each block title a level-3 one', t => {
  const view = mount(combined.props);
  t.truthy(view.getByRole('heading', {level: 2, name: combined.props.title}));
  const {everyone, populations, upload, individuals} = combined.props;
  [everyone, populations, upload, individuals].forEach(({title}) =>
    t.truthy(view.getByRole('heading', {level: 3, name: title}), title)
  );
});

test.serial('removable chips are named by the remove label and their name', t => {
  const view = mount(combined.props);
  const {populations, individuals} = combined.props;
  t.truthy(view.getByRole('button', {name: `${populations.removeLabel} Managers FR`}));
  t.truthy(view.getByRole('button', {name: `${individuals.removeLabel} Camille Durand`}));
});

test.serial('the disabled sources are described by the explanation', t => {
  const on = mount(everyoneOn.props);
  const sources = block(on, 'audience-sources');
  const explanation = on.getByText(everyoneOn.props.disabledExplanation);
  t.truthy(explanation.id);
  t.is(sources.getAttribute('aria-describedby'), explanation.id);
  cleanup();
  const off = mount(combined.props);
  t.is(block(off, 'audience-sources').getAttribute('aria-describedby'), null);
});

test.serial('everyone disables populations, upload and individuals, with an explanation', t => {
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

test.serial('with everyone on, population and learner chips cannot be removed', t => {
  const calls = [];
  const view = mount({
    ...everyoneOnWithSources.props,
    populations: {...everyoneOnWithSources.props.populations, onChange: () => calls.push('pop')},
    individuals: {...everyoneOnWithSources.props.individuals, onRemove: () => calls.push('learner')}
  });
  t.is(
    within(block(view, 'audience-sources')).queryAllByRole('button', {
      name: /Managers|Camille|Pedro/
    }).length,
    0
  );
  fireEvent.click(within(block(view, 'population-chips')).getByText('Managers FR'));
  fireEvent.click(view.getByText('Camille Durand'));
  t.deepEqual(calls, []);
});

test.serial('a chip shows its remove cross only while it can be removed', t => {
  const crosses = props =>
    mount(props).container.querySelectorAll('[data-name^="chip-"] > :last-child:not(div)').length;
  t.is(crosses(combined.props), 4);
  cleanup();
  t.is(crosses(everyoneOnWithSources.props), 0);
});

test.serial('with everyone off, the sources are enabled and there is no explanation', t => {
  const view = mount(combined.props);
  t.false(block(view, 'audience-sources').disabled);
  t.is(view.queryByText(combined.props.disabledExplanation), null);
});

test.serial('toggling everyone calls onChange with the new value', t => {
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

test.serial('selecting a population calls onChange with the selected options', t => {
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

test.serial('choosing or dropping a file calls onUpload with the first file', t => {
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

test.serial('no upload while everyone is on or a file is being checked', t => {
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

test.serial('the empty state is the Coorpmanager uploader, accepting xlsx, xls and csv', t => {
  const view = mount(idle.props);
  const uploader = block(view, 'upload').querySelector('[data-name="drag-and-drop-wrapper"]');
  t.truthy(uploader);
  t.truthy(within(uploader).getByText(idle.props.upload.dropzone.dropLabel));
  t.truthy(within(uploader).getByText(idle.props.upload.dropzone.description));
  t.is(
    uploader.querySelector('input[type="file"]').accept,
    'text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
});

test.serial('Remove and the report download call their callbacks; there is no Replace', t => {
  const calls = [];
  const upload = {
    ...uploadDone.props.upload,
    onRemove: () => calls.push('remove'),
    report: {...uploadDone.props.upload.report, onDownload: () => calls.push('download')}
  };
  const view = mount({...uploadDone.props, upload});
  t.is(view.queryByRole('button', {name: 'Replace'}), null);
  fireEvent.click(view.getByRole('button', {name: upload.removeLabel}));
  fireEvent.click(view.getByRole('button', {name: upload.report.label}));
  t.deepEqual(calls, ['remove', 'download']);
});

test.serial('searching, adding and removing a learner call their callbacks', t => {
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

test.serial('a learner chip shows the name and the login', t => {
  const view = mount(combined.props);
  const chips = block(view, 'individuals');
  combined.props.individuals.selected.forEach(({label, login}) => {
    t.truthy(within(chips).getByText(label));
    t.truthy(within(chips).getByText(login));
  });
});

test.serial('the upload summary shows the four counts as tags and the kept line', t => {
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

test.serial('the result lists no rows: the logins not kept are a download, not a table', t => {
  const view = mount(uploadDone.props);
  const result = block(view, 'upload-result');
  t.is(result.querySelector('table'), null);
  t.is(result.querySelector('[aria-expanded]'), null);
  t.truthy(
    within(block(view, 'upload-report')).getByRole('button', {
      name: uploadDone.props.upload.report.label
    })
  );
});

test.serial('nothing to download when every login is kept', t => {
  const view = mount(uploadDoneAllValid.props);
  t.is(block(view, 'upload-report'), null);
  t.truthy(view.getByText(uploadDoneAllValid.props.upload.keptLabel));
});

test.serial('loading shows the uploader loader with its label; its cross cancels the check', t => {
  let removed = 0;
  const upload = {...uploadLoading.props.upload, onRemove: () => removed++};
  const loading = mount({...uploadLoading.props, upload});
  const dropzone = block(loading, 'upload-dropzone');
  t.is(dropzone.getAttribute('aria-busy'), 'true');
  t.truthy(within(dropzone).getByText(upload.dropzone.loadingLabel));
  t.is(block(loading, 'upload-summary'), null);
  fireEvent.click(dropzone.querySelector('[data-name="reset-content-icon"]'));
  t.is(removed, 1);
});

test.serial('an error shows in the uploader and is announced', t => {
  const error = mount(uploadError.props);
  const dropzone = block(error, 'upload-dropzone');
  t.is(dropzone.getAttribute('aria-live'), 'polite');
  t.truthy(within(dropzone).getByText(uploadError.props.upload.error));
  t.is(block(error, 'upload-summary'), null);
});

test.serial('a template preview sits left of the upload: a header and a list, no table', t => {
  [idle, uploadDone].forEach(fixture => {
    const view = mount(fixture.props);
    const preview = block(view, 'upload-template-preview');
    const {header, rows: samples} = fixture.props.upload.templatePreview;
    t.is(preview.closest('table') || preview.querySelector('table'), null);
    t.is(preview.firstChild.textContent, header);
    t.deepEqual(
      [...preview.querySelectorAll('li')].map(item => item.textContent),
      samples
    );
    cleanup();
  });
  const upload = {...idle.props.upload, templatePreview: undefined};
  const without = mount({...idle.props, upload});
  t.is(block(without, 'upload-template-preview'), null);
});

test.serial('the uploaded file shows as a card with its spreadsheet icon', t => {
  const view = mount(uploadDone.props);
  const card = block(view, 'upload-file');
  t.truthy(card.querySelector('svg[data-icon="file-excel"]'));
  t.truthy(within(card).getByText(uploadDone.props.upload.file.name));
  t.truthy(within(card).getByText(uploadDone.props.upload.file.detail));
});

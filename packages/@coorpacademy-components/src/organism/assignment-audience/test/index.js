import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, createEvent, fireEvent, render} from '@testing-library/react';
import AssignmentAudience from '..';
import {wrappingComponent} from '../../../test/helpers/render-component';
import combined from './fixtures/combined';

browserEnv();
test.afterEach.always(cleanup);

const mount = props => render(<AssignmentAudience {...props} />, {wrapper: wrappingComponent});
const section = (view, name) => view.container.querySelector(`[data-name="${name}"]`);
const picker = view => section(view, 'populations').querySelector('[data-name="select-languages"]');
const checkboxes = view => section(view, 'populations').querySelectorAll('input[type="checkbox"]');
const fileInput = view => view.container.querySelector('input[type="file"]');
const everyoneInput = view => section(view, 'everyone').querySelector('input');

test.serial('everyone toggles with a boolean and waits for new props', t => {
  const calls = [];
  const props = {
    ...combined.props,
    everyone: {...combined.props.everyone, onChange: value => calls.push(value)}
  };
  const view = mount(props);
  fireEvent.click(everyoneInput(view));
  t.deepEqual(calls, [true]);
  t.false(everyoneInput(view).checked);
  view.rerender(<AssignmentAudience {...props} everyone={{...props.everyone, value: true}} />);
  t.true(everyoneInput(view).checked);
  fireEvent.click(everyoneInput(view));
  t.deepEqual(calls, [true, false]);
  t.true(everyoneInput(view).checked);
});

test.serial('population selection emits normalized selected options without mutating props', t => {
  const calls = [];
  const options = combined.props.populations.options.map(option => Object.freeze({...option}));
  const props = {
    ...combined.props,
    populations: {...combined.props.populations, options, onChange: value => calls.push(value)}
  };
  const view = mount(props);
  fireEvent.click(picker(view));
  fireEvent.click(checkboxes(view)[1]);
  t.deepEqual(calls, [
    [
      {name: 'Sales', value: 'sales', selected: true},
      {name: 'Engineering', value: 'engineering', selected: true}
    ]
  ]);
  t.false(checkboxes(view)[1].checked);
  view.rerender(
    <AssignmentAudience {...props} populations={{...props.populations, options: calls[0]}} />
  );
  t.true(checkboxes(view)[1].checked);
  fireEvent.click(checkboxes(view)[0]);
  t.deepEqual(calls[1], [{name: 'Engineering', value: 'engineering', selected: true}]);
  t.deepEqual(options, [
    {name: 'Sales', value: 'sales', selected: true},
    {name: 'Engineering', value: 'engineering', selected: false}
  ]);
});

test.serial('file selection and drop each emit exactly the first File', t => {
  const calls = [];
  const view = mount({
    ...combined.props,
    upload: {...combined.props.upload, onUpload: file => calls.push(file)}
  });
  const csv = new window.File(['email'], 'learners.csv', {type: 'text/csv'});
  const xlsx = new window.File(['xlsx'], 'learners.xlsx');
  const input = fileInput(view);
  t.is(input.accept, '.xlsx,.csv');
  t.false(input.multiple);
  fireEvent.change(input, {target: {files: [csv, xlsx]}});
  const dragover = createEvent.dragOver(section(view, 'upload'));
  fireEvent(section(view, 'upload'), dragover);
  t.true(dragover.defaultPrevented);
  const drop = createEvent.drop(input, {dataTransfer: {files: [xlsx, csv]}});
  fireEvent(input, drop);
  t.true(drop.defaultPrevented);
  t.deepEqual(calls, [csv, xlsx]);
  fireEvent.change(input, {target: {files: []}});
  fireEvent.drop(input, {dataTransfer: {files: []}});
  t.is(calls.length, 2);
});

test.serial('search emits one query string including clearing', t => {
  const calls = [];
  const props = {
    ...combined.props,
    individuals: {...combined.props.individuals, value: '', onSearch: value => calls.push(value)}
  };
  const view = mount(props);
  const input = view.getByTestId('autocomplete-input');
  fireEvent.focus(input);
  fireEvent.input(input, {target: {value: 'Alex'}});
  t.deepEqual(calls, ['Alex']);
  view.rerender(
    <AssignmentAudience {...props} individuals={{...props.individuals, value: 'Alex'}} />
  );
  t.is(input.value, 'Alex');
  fireEvent.input(input, {target: {value: ''}});
  t.deepEqual(calls, ['Alex', '']);
  view.rerender(<AssignmentAudience {...props} />);
  t.is(input.value, '');
});

test.serial('learner selection emits original suggestion and removal emits id', t => {
  const added = [];
  const removed = [];
  const props = {
    ...combined.props,
    individuals: {
      ...combined.props.individuals,
      onAdd: value => added.push(value),
      onRemove: id => removed.push(id)
    }
  };
  const view = mount(props);
  fireEvent.focus(view.getByTestId('autocomplete-input'));
  t.is(view.getAllByRole('option').length, 1);
  fireEvent.click(view.getByRole('option'));
  t.is(added.length, 1);
  t.is(added[0], props.individuals.suggestions[0]);
  const chip = view.getByRole('button', {name: 'Sam Lee'});
  fireEvent.click(chip);
  fireEvent.keyDown(chip, {key: 'Enter'});
  fireEvent.keyDown(chip, {key: ' '});
  t.deepEqual(removed, ['sam', 'sam', 'sam']);
  view.rerender(
    <AssignmentAudience
      {...props}
      individuals={{...props.individuals, selected: [...props.individuals.selected, added[0]]}}
    />
  );
  fireEvent.focus(view.getByTestId('autocomplete-input'));
  t.is(view.queryAllByRole('option').length, 0);
  t.is(added.length, 1);
});

test.serial('everyone disables all three inputs and explains why', t => {
  const calls = [];
  const record = value => calls.push(value);
  const props = {
    ...combined.props,
    everyone: {...combined.props.everyone, onChange: record},
    populations: {...combined.props.populations, onChange: record},
    upload: {...combined.props.upload, onUpload: record},
    individuals: {...combined.props.individuals, onSearch: record, onAdd: record, onRemove: record}
  };
  const view = mount(props);
  fireEvent.click(picker(view));
  fireEvent.focus(view.getByTestId('autocomplete-input'));
  view.rerender(<AssignmentAudience {...props} everyone={{...props.everyone, value: true}} />);
  t.truthy(view.getByText('Other audience selections are disabled while everyone is selected.'));
  const disabledInputs = view.container.querySelectorAll('fieldset input');
  t.true(disabledInputs.length >= 4);
  disabledInputs.forEach(input => t.true(input.matches(':disabled')));
  t.false(everyoneInput(view).matches(':disabled'));
  fireEvent.click(picker(view));
  fireEvent.click(checkboxes(view)[1]);
  fireEvent.input(view.getByTestId('autocomplete-input'), {target: {value: 'Other'}});
  const file = new window.File([''], 'learners.csv');
  fireEvent.change(fileInput(view), {target: {files: [file]}});
  fireEvent.drop(section(view, 'upload'), {dataTransfer: {files: [file]}});
  fireEvent.click(view.getByRole('group', {name: 'Sam Lee'}));
  t.is(view.queryAllByRole('option').length, 0);
  t.is(view.queryByRole('button', {name: 'Sam Lee'}), null);
  t.false(view.getByRole('group', {name: 'Sam Lee'}).hasAttribute('tabindex'));
  t.deepEqual(calls, []);
  t.truthy(view.getByText('valid@example.com'));
  view.rerender(<AssignmentAudience {...props} />);
  t.false(fileInput(view).disabled);
  t.false(fileInput(view).closest('fieldset').disabled);
  t.true(checkboxes(view)[0].checked);
  fireEvent.click(checkboxes(view)[1]);
  fireEvent.input(view.getByTestId('autocomplete-input'), {target: {value: 'Alex'}});
  fireEvent.drop(section(view, 'upload'), {dataTransfer: {files: [file]}});
  t.is(calls.length, 3);
  view.rerender(
    <AssignmentAudience
      {...props}
      everyone={{...props.everyone, value: true}}
      disabledExplanation="Everyone takes precedence"
    />
  );
  t.truthy(view.getByText('Everyone takes precedence'));
});

test.serial(
  'loading blocks both upload paths without blocking population or learner selection',
  t => {
    const uploads = [];
    const selections = [];
    const learners = [];
    const view = mount({
      ...combined.props,
      upload: {...combined.props.upload, status: 'loading', onUpload: file => uploads.push(file)},
      populations: {...combined.props.populations, onChange: value => selections.push(value)},
      individuals: {...combined.props.individuals, onAdd: value => learners.push(value)}
    });
    const file = new window.File([''], 'learners.csv');
    t.truthy(view.getByText('Evaluating emails…'));
    const input = fileInput(view);
    if (input) {
      t.true(input.matches(':disabled'));
      fireEvent.change(input, {target: {files: [file]}});
    }
    fireEvent.drop(section(view, 'upload'), {dataTransfer: {files: [file]}});
    fireEvent.click(picker(view));
    fireEvent.click(checkboxes(view)[1]);
    fireEvent.focus(view.getByTestId('autocomplete-input'));
    fireEvent.click(view.getByRole('option'));
    t.deepEqual(uploads, []);
    t.is(selections.length, 1);
    t.is(learners.length, 1);
  }
);

test.serial('preview renders five supplied counters including zero and all row status tags', t => {
  const view = mount({
    ...combined.props,
    upload: {
      ...combined.props.upload,
      rows: [...combined.props.upload.rows, {email: 'pending@example.com', status: 'Pending'}]
    }
  });
  const summary = section(view, 'upload-summary');
  ['Valid: 12', 'Inactive: 2', 'Invalid: 0', 'Not found: 3', 'Shared: 1'].forEach(label =>
    t.true(summary.textContent.includes(label))
  );
  ['Valid', 'Inactive', 'Invalid', 'Not found', 'Shared', 'Pending'].forEach(label =>
    t.truthy(view.container.querySelector(`[data-name="content-tag-${label}"]`))
  );
  t.is(view.getAllByRole('row').length, 7);
  t.truthy(view.getByRole('columnheader', {name: 'Email'}));
  t.truthy(view.getByRole('columnheader', {name: 'Status'}));
  t.truthy(view.getByText('Estimated audience: 42 learners'));
  t.is(
    view.getByRole('link', {name: 'Download template'}).getAttribute('href'),
    '/audience-template.csv'
  );
  t.true(view.getByRole('link', {name: 'Download template'}).hasAttribute('download'));
});

test.serial('error is plain text and permits retry', t => {
  const calls = [];
  const view = mount({
    ...combined.props,
    upload: {
      ...combined.props.upload,
      status: 'error',
      error: '<b>Upload failed</b>',
      onUpload: file => calls.push(file)
    }
  });
  t.truthy(view.getByText('<b>Upload failed</b>'));
  t.is(view.container.querySelector('b'), null);
  t.false(fileInput(view).disabled);
  t.false(fileInput(view).closest('fieldset').disabled);
  const file = new window.File([''], 'retry.csv');
  fireEvent.change(fileInput(view), {target: {files: [file]}});
  t.deepEqual(calls, [file]);
});

test.serial('controlled rerender replaces query selections preview and total', t => {
  const view = mount(combined.props);
  view.rerender(
    <AssignmentAudience
      {...combined.props}
      populations={{
        ...combined.props.populations,
        options: [{name: 'HR', value: 'hr', selected: true}]
      }}
      individuals={{
        ...combined.props.individuals,
        value: 'New query',
        selected: [{id: 'new', label: 'New learner'}]
      }}
      upload={{
        ...combined.props.upload,
        summary: {valid: 99},
        rows: [{email: 'new@example.com', status: 'valid'}]
      }}
      total={{label: 'Estimated audience: 1000 learners'}}
    />
  );
  t.is(view.getByTestId('autocomplete-input').value, 'New query');
  t.is(view.queryByText('Sam Lee'), null);
  t.truthy(view.getByRole('button', {name: 'New learner'}));
  t.truthy(view.getByText('new@example.com'));
  t.is(view.queryByText('valid@example.com'), null);
  t.true(section(view, 'upload-summary').textContent.includes('Valid: 99'));
  t.truthy(view.getByText('Estimated audience: 1000 learners'));
  t.true(checkboxes(view)[0].checked);
});

test.serial('empty arrays and omitted optional upload details render safely', t => {
  const props = {
    ...combined.props,
    populations: {...combined.props.populations, options: []},
    individuals: {...combined.props.individuals, value: undefined, selected: [], suggestions: []},
    upload: {status: 'done'}
  };
  const view = mount(props);
  t.is(view.getByTestId('autocomplete-input').value, '');
  ['Valid: 0', 'Inactive: 0', 'Invalid: 0', 'Not found: 0', 'Shared: 0'].forEach(label =>
    t.true(section(view, 'upload-summary').textContent.includes(label))
  );
  t.is(view.queryAllByRole('row').length, 0);
  view.rerender(<AssignmentAudience {...props} upload={{status: 'idle', error: 'stale error'}} />);
  t.is(view.queryByText('stale error'), null);
  t.is(section(view, 'upload-summary'), null);
  t.truthy(fileInput(view));
});

test.serial('unknown row statuses including object property names render neutral tags', t => {
  const view = mount({
    ...combined.props,
    upload: {
      ...combined.props.upload,
      rows: [{email: 'pending@example.com', status: 'constructor'}]
    }
  });
  const tag = view.container.querySelector('[data-name="content-tag-constructor"]');
  t.truthy(tag);
  t.true(tag.className.includes('defaultStyle'));
});

test.serial('upload transitions hide stale results and allow retry after loading', t => {
  const uploads = [];
  const props = {
    ...combined.props,
    upload: {...combined.props.upload, onUpload: file => uploads.push(file), error: 'Stale error'}
  };
  const view = mount(props);
  t.truthy(section(view, 'upload-preview'));
  t.is(view.queryByRole('alert'), null);
  view.rerender(<AssignmentAudience {...props} upload={{...props.upload, status: 'loading'}} />);
  t.is(section(view, 'upload-preview'), null);
  t.is(section(view, 'upload-summary'), null);
  t.is(view.queryByRole('alert'), null);
  t.is(section(view, 'upload').getAttribute('aria-busy'), 'true');
  t.truthy(view.getByRole('status'));
  const file = new window.File(['email'], 'retry.xlsx');
  const blockedDrop = createEvent.drop(section(view, 'upload'), {dataTransfer: {files: [file]}});
  fireEvent(section(view, 'upload'), blockedDrop);
  t.true(blockedDrop.defaultPrevented);
  t.deepEqual(uploads, []);

  view.rerender(
    <AssignmentAudience {...props} upload={{...props.upload, status: 'error', error: ''}} />
  );
  t.is(view.getByRole('alert').textContent, 'Upload failed');
  t.is(view.queryByRole('status'), null);
  t.is(section(view, 'upload-preview'), null);
  t.is(section(view, 'upload-summary'), null);
  t.is(section(view, 'upload').getAttribute('aria-busy'), 'false');
  t.is(fileInput(view).accept, '.xlsx,.csv');
  fireEvent.change(fileInput(view), {target: {files: [file]}});
  fireEvent.drop(section(view, 'upload'), {dataTransfer: {files: [file]}});
  t.deepEqual(uploads, [file, file]);

  view.rerender(<AssignmentAudience {...props} upload={{...props.upload, status: 'idle'}} />);
  t.is(view.queryByRole('alert'), null);
  t.is(view.queryByRole('status'), null);
  t.is(section(view, 'upload-preview'), null);
  t.is(section(view, 'upload-summary'), null);
  t.is(fileInput(view).accept, '.xlsx,.csv');
});

test.serial('same-name populations remain distinct and the final selection can be cleared', t => {
  const calls = [];
  const updatedCalls = [];
  const options = [
    Object.freeze({name: 'Regional staff', value: 'emea', selected: true}),
    Object.freeze({name: 'Regional staff', value: 'apac', selected: false})
  ];
  const props = {
    ...combined.props,
    populations: {title: 'Populations', options, onChange: value => calls.push(value)}
  };
  const view = mount(props);
  fireEvent.click(picker(view));
  fireEvent.click(checkboxes(view)[0]);
  t.deepEqual(calls, [[]]);
  t.true(checkboxes(view)[0].checked);
  const clearedOptions = options.map(option => ({...option, selected: false}));
  view.rerender(
    <AssignmentAudience
      {...props}
      populations={{
        ...props.populations,
        options: clearedOptions,
        onChange: value => updatedCalls.push(value)
      }}
    />
  );
  t.false(checkboxes(view)[0].checked);
  fireEvent.click(checkboxes(view)[1]);
  t.deepEqual(updatedCalls, [[{name: 'Regional staff', value: 'apac', selected: true}]]);
  t.deepEqual(calls, [[]]);
  t.false(checkboxes(view)[1].checked);
  t.true(options[0].selected);
  t.false(options[1].selected);
});

test.serial('same-name learners are added by keyboard and removed by their own id', async t => {
  const added = [];
  const removed = [];
  const suggestions = Object.freeze([
    Object.freeze({id: 'alex-emea', label: 'Alex Rivers'}),
    Object.freeze({id: 'alex-apac', label: 'Alex Rivers'})
  ]);
  const props = {
    ...combined.props,
    individuals: {
      value: 'Alex',
      suggestions,
      selected: [{id: 'alex-emea', label: 'Alex Rivers (selected)'}],
      onAdd: learner => added.push(learner),
      onRemove: id => removed.push(id)
    }
  };
  const view = mount(props);
  const input = view.getByTestId('autocomplete-input');
  fireEvent.focus(input);
  t.is(view.getAllByRole('option').length, 1);
  t.is(view.getByRole('option').textContent, 'Alex Rivers');
  fireEvent.keyDown(input, {key: 'ArrowDown', keyCode: 40});
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13});
  // Let the autocomplete finish its selection event before the next user interaction.
  await new Promise(resolve => {
    setTimeout(resolve, 0);
  });
  t.is(added.length, 1);
  t.is(added[0], suggestions[1]);
  t.is(input.value, 'Alex');
  t.is(view.queryByRole('button', {name: 'Alex Rivers'}), null);
  view.rerender(
    <AssignmentAudience
      {...props}
      individuals={{...props.individuals, selected: [...props.individuals.selected, added[0]]}}
    />
  );
  fireEvent.focus(input);
  t.is(view.queryAllByRole('option').length, 0);
  fireEvent.click(view.getByRole('button', {name: 'Alex Rivers'}));
  t.deepEqual(removed, ['alex-apac']);
  t.truthy(view.getByRole('button', {name: 'Alex Rivers'}));
  view.rerender(<AssignmentAudience {...props} />);
  t.is(view.queryByRole('button', {name: 'Alex Rivers'}), null);
  t.truthy(view.getByRole('button', {name: 'Alex Rivers (selected)'}));
  fireEvent.blur(input);
  fireEvent.focus(input);
  t.is(view.getAllByRole('option').length, 1);
  t.deepEqual(removed, ['alex-apac']);
});

test.serial('non-file drops are prevented without uploading and later file drops still work', t => {
  const uploads = [];
  const view = mount({
    ...combined.props,
    upload: {...combined.props.upload, onUpload: file => uploads.push(file)}
  });
  const target = section(view, 'upload');
  [undefined, {}, {files: null}, {files: []}].forEach(dataTransfer => {
    const event = createEvent.drop(target, dataTransfer ? {dataTransfer} : {});
    fireEvent(target, event);
    t.true(event.defaultPrevented);
  });
  fireEvent.change(fileInput(view), {target: {files: null}});
  t.deepEqual(uploads, []);
  const file = new window.File(['email'], 'learners.csv');
  const files = {0: file, length: 1, item: index => (index === 0 ? file : null)};
  fireEvent.drop(target, {dataTransfer: {files}});
  t.is(uploads.length, 1);
  t.is(uploads[0], file);
});

test.serial('omitted callbacks leave audience controls safe and controlled', t => {
  const props = {
    ...combined.props,
    everyone: {value: false, label: 'Everyone'},
    populations: {title: 'Populations', options: combined.props.populations.options},
    upload: {status: 'idle'},
    individuals: {
      value: 'Alex',
      suggestions: [{id: 'alex', label: 'Alex Rivers'}],
      selected: [{id: 'sam', label: 'Sam Lee'}]
    }
  };
  const view = mount(props);
  fireEvent.click(everyoneInput(view));
  fireEvent.click(picker(view));
  fireEvent.click(checkboxes(view)[1]);
  const file = new window.File([''], 'learners.csv');
  fireEvent.change(fileInput(view), {target: {files: [file]}});
  fireEvent.drop(section(view, 'upload'), {dataTransfer: {files: [file]}});
  const input = view.getByTestId('autocomplete-input');
  fireEvent.focus(input);
  fireEvent.input(input, {target: {value: 'Other'}});
  fireEvent.click(view.getByRole('option'));
  fireEvent.click(view.getByRole('button', {name: 'Sam Lee'}));
  view.rerender(<AssignmentAudience {...props} />);
  t.false(everyoneInput(view).checked);
  t.true(checkboxes(view)[0].checked);
  t.false(checkboxes(view)[1].checked);
  t.is(input.value, 'Alex');
  t.truthy(view.getByRole('button', {name: 'Sam Lee'}));
  t.is(view.queryByRole('button', {name: 'Alex Rivers'}), null);
  t.is(view.queryByRole('link', {name: 'Download template'}), null);
});

test.serial('duplicate email rows keep their supplied order and individual status tags', t => {
  const view = mount({
    ...combined.props,
    upload: {
      status: 'done',
      rows: [
        {email: 'same@example.com', status: 'shared'},
        {email: 'same@example.com', status: 'invalid'},
        {email: 'same@example.com', status: 'valid'},
        {email: 'same@example.com', status: 'notFound'},
        {email: 'same@example.com', status: 'inactive'},
        {email: '<b>unresolved</b>', status: '<em>Review</em>'}
      ]
    }
  });
  const rows = view.getAllByRole('row').slice(1);
  t.deepEqual(
    rows.map(row => [...row.querySelectorAll('td')].map(cell => cell.textContent)),
    [
      ['same@example.com', 'Shared'],
      ['same@example.com', 'Invalid'],
      ['same@example.com', 'Valid'],
      ['same@example.com', 'Not found'],
      ['same@example.com', 'Inactive'],
      ['<b>unresolved</b>', '<em>Review</em>']
    ]
  );
  ['info', 'failure', 'success', 'failure', 'warning', 'defaultStyle'].forEach((type, index) => {
    const tag = rows[index].querySelector('[data-name^="content-tag-"]');
    t.truthy(tag);
    t.true(tag.className.includes(type));
  });
  t.is(section(view, 'upload-preview').querySelector('b, em'), null);
  t.is(view.getAllByText('same@example.com').length, 5);
  t.deepEqual(
    [...section(view, 'upload-summary').querySelectorAll('li')].map(item => item.textContent),
    ['Valid: 0', 'Inactive: 0', 'Invalid: 0', 'Not found: 0', 'Shared: 0']
  );
});

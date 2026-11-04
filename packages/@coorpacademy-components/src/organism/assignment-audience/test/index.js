import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import Tag from '../../../atom/tag';
import searchStyle from '../../../atom/input-search/style.css';
import chipsStyle from '../../../atom/chips/style.css';
import {wrappingComponent} from '../../../test/helpers/render-component';
import AssignmentAudience from '..';
import combined from './fixtures/combined';
import allUsers from './fixtures/all-users-selected';
import idle from './fixtures/idle';
import individualsWithChips from './fixtures/individuals-with-chips';
import uploadDone from './fixtures/upload-done';
import uploadDoneAllValid from './fixtures/upload-done-all-valid';
import uploadLoading from './fixtures/upload-loading';
import uploadError from './fixtures/upload-error';
import allUsersWithSources from './fixtures/all-users-selected-with-sources';

browserEnv();
test.afterEach.always(cleanup);

const mount = props => render(<AssignmentAudience {...props} />, {wrapper: wrappingComponent});
const block = (view, name) => view.container.querySelector(`[data-name="${name}"]`);
test.serial('choosing or dropping a file calls onUpload with the first file', t => {
  const files = [];
  const upload = {
    ...idle.props.upload,
    onUpload: file => files.push(file)
  };
  const view = mount({...idle.props, upload});
  const xlsx = new window.File(['login'], 'a.xlsx');
  const csv = new window.File(['login'], 'b.csv');
  // A drop on the native input lands as a change event, like a browse.
  fireEvent.change(block(view, 'upload').querySelector('input[type="file"]'), {
    target: {files: [xlsx, csv]}
  });
  t.deepEqual(files, [xlsx]);
});

test.serial('no upload while all users is selected or a file is being checked', t => {
  const files = [];
  const onUpload = file => files.push(file);
  const file = new window.File(['login'], 'a.xlsx');
  [
    {...allUsers.props, upload: {...allUsers.props.upload, onUpload}},
    {
      ...uploadLoading.props,
      upload: {...uploadLoading.props.upload, onUpload}
    }
  ].forEach(props => {
    const view = mount(props);
    const input = view.container.querySelector('input[type="file"]');
    if (input) fireEvent.change(input, {target: {files: [file]}});
    cleanup();
  });
  t.deepEqual(files, []);
});

test.serial(
  'the template link points at the template, and is disabled while all users is selected',
  t => {
    const enabled = mount(idle.props);
    const link = enabled.getByRole('link', {
      name: idle.props.upload.templateLink.label
    });
    t.is(link.getAttribute('href'), idle.props.upload.templateLink.href);
    cleanup();
    const off = mount(allUsers.props);
    t.true(
      off.getByRole('button', {
        name: allUsers.props.upload.templateLink.label
      }).disabled
    );
  }
);

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
    report: {
      ...uploadDone.props.upload.report,
      onDownload: () => calls.push('download')
    }
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

test.serial(
  'two invalid targets show their labels and warning and only the second Remove fires',
  t => {
    const calls = [];
    const invalidLabel = "You can't assign to this population. Remove it to publish.";
    const view = mount({
      title: 'Audience',
      invalidLabel,
      invalidTargets: [
        {
          ref: 'former-fr',
          label: 'Former FR',
          onRemove: () => calls.push('fr')
        },
        {
          ref: 'former-de',
          label: 'Former DE',
          onRemove: () => calls.push('de')
        }
      ]
    });
    const entries = within(block(view, 'invalid-targets')).getAllByText(/Former/);
    t.is(entries.length, 2);
    t.truthy(within(entries[0]).getByText(`Former FR: ${invalidLabel}`));
    t.truthy(within(entries[1]).getByText(`Former DE: ${invalidLabel}`));
    const buttons = within(block(view, 'invalid-targets')).getAllByRole('button', {name: 'Remove'});
    fireEvent.click(buttons[1]);
    t.deepEqual(calls, ['de']);
    t.is(within(block(view, 'invalid-targets')).getAllByRole('button').length, 2);
  }
);

test.serial('invalid targets can render without a warning message', t => {
  const view = mount({
    title: 'Audience',
    invalidTargets: [{ref: 'former', label: 'Former population', onRemove: () => {}}]
  });
  t.truthy(view.getByText('Former population'));
  t.false(view.container.textContent.includes('undefined'));
  cleanup();
  const empty = mount({title: 'Audience', invalidTargets: []});
  t.is(block(empty, 'invalid-targets'), null);
});

test.serial('section error is one line of text, not a banner', t => {
  const view = mount({title: 'Audience', error: 'Choose an audience.'});
  const alert = view.getByRole('alert');
  t.is(alert.tagName, 'P');
  t.is(alert.children.length, 0);
  t.is(alert.textContent, 'Choose an audience.');
});

test.serial('section error is an alert immediately below the title', t => {
  const view = mount({
    title: 'Audience',
    error: 'Choose an audience to publish.'
  });
  const alert = view.getByRole('alert');
  t.truthy(within(alert).getByText('Choose an audience to publish.'));
  t.is(block(view, 'assignment-audience').children[1], alert);
  t.truthy(
    within(alert.previousElementSibling).getByRole('heading', {
      level: 2,
      name: 'Audience'
    })
  );
  cleanup();
  [undefined, ''].forEach(error => {
    const empty = mount({title: 'Audience', error});
    t.is(empty.queryByRole('alert'), null);
    cleanup();
  });
});

const assertControlsDisabled = (t, view) => {
  const controls = [...view.container.querySelectorAll('input, button')];
  t.true(controls.length > 0);
  controls.forEach(control =>
    t.true(control.disabled || Boolean(control.closest('fieldset[disabled]')), control.outerHTML)
  );
};

test.serial(
  'invalid targets remain until removed by props and use updated callbacks after reordering',
  t => {
    const calls = [];
    const first = {
      ref: 'former-fr',
      label: 'Former population',
      onRemove: () => calls.push('old-fr')
    };
    const second = {
      ref: 'former-de',
      label: 'Former population',
      onRemove: () => calls.push('old-de')
    };
    const props = {title: 'Audience', invalidLabel: 'Remove before publishing.'};
    const view = mount({...props, invalidTargets: [first, second]});
    const removeButtons = () =>
      within(block(view, 'invalid-targets')).getAllByRole('button', {name: 'Remove'});
    fireEvent.click(removeButtons()[1]);
    t.deepEqual(calls, ['old-de']);
    t.is(removeButtons().length, 2);

    const updatedFirst = {...first, onRemove: () => calls.push('new-fr')};
    const updatedSecond = {...second, onRemove: () => calls.push('new-de')};
    view.rerender(
      <AssignmentAudience
        {...props}
        invalidLabel="This population is outside your scope."
        invalidTargets={[updatedSecond, updatedFirst]}
      />
    );
    t.is(view.getAllByText('Former population: This population is outside your scope.').length, 2);
    t.is(view.queryByText('Former population: Remove before publishing.'), null);
    fireEvent.click(removeButtons()[0]);
    fireEvent.click(removeButtons()[1]);
    t.deepEqual(calls, ['old-de', 'new-de', 'new-fr']);
    t.is(removeButtons().length, 2);

    view.rerender(<AssignmentAudience {...props} invalidTargets={[updatedFirst]} />);
    t.is(removeButtons().length, 1);
    fireEvent.click(removeButtons()[0]);
    t.deepEqual(calls, ['old-de', 'new-de', 'new-fr', 'new-fr']);
    view.rerender(<AssignmentAudience {...props} invalidTargets={[]} />);
    t.is(block(view, 'invalid-targets'), null);
  }
);

const options = [
  {name: 'Managers FR', value: 'fr', selected: true, count: '412 users'},
  {name: 'Managers DE', value: 'de', selected: false, count: 0},
  {name: 'Sales', value: 'sales', selected: true}
];
const populationProps = (overrides = {}) => ({
  title: 'Populations',
  subtitle: 'Including future learners',
  selectAllLabel: 'Select all',
  unselectAllLabel: 'Unselect all',
  search: {placeholder: 'Find populations', value: '', onChange: () => {}},
  emptyMessages: {firstMessage: 'No populations', secondMessage: 'Try another search'},
  options,
  onChange: () => {},
  ...overrides
});
const picker = populations => ({title: 'Audience', populations});
const chip = (view, name) => within(block(view, 'populations')).getByRole('button', {name});

test.serial('population chips display supplied names and counts before sources', t => {
  const props = {...combined.props, populations: populationProps()};
  const view = mount(props);
  const populations = block(view, 'populations');
  t.truthy(chip(view, 'Managers FR 412 users'));
  t.truthy(chip(view, 'Managers DE 0'));
  t.truthy(chip(view, 'Sales'));
  t.is(populations.querySelectorAll('[role="button"]').length, 3);
  t.is(populations.querySelector('select, [role="combobox"]'), null);
  t.is(block(view, 'population-chips'), null);
  t.is(block(view, 'everyone'), null);
  t.false(block(view, 'audience-sources').contains(populations));
  t.true(Boolean(populations.compareDocumentPosition(block(view, 'audience-sources')) & 4));
  t.is(block(view, 'results').style.maxHeight, '236px');
  t.truthy(view.getByRole('heading', {name: 'Audience', level: 2}));
  [props.populations, props.upload, props.individuals].forEach(({title}) =>
    t.truthy(view.getByRole('heading', {name: title, level: 3}))
  );
});

test.serial('chip toggles preserve payload and order, stay controlled and follow rerenders', t => {
  const calls = [];
  const original = JSON.stringify(options);
  const populations = populationProps({onChange: selected => calls.push(selected)});
  const view = mount(picker(populations));
  t.deepEqual(calls, []);
  fireEvent.click(chip(view, 'Managers DE 0'));
  t.deepEqual(calls[0], [options[0], {...options[1], selected: true}, options[2]]);
  fireEvent.keyDown(chip(view, 'Managers DE 0'), {key: 'Enter'});
  t.deepEqual(calls[1], calls[0]);
  fireEvent.keyDown(chip(view, 'Managers FR 412 users'), {key: ' '});
  t.deepEqual(calls[2], [options[2]]);
  t.is(JSON.stringify(options), original);
  const next = {
    ...populations,
    options: [options[2], {...options[1], selected: true}, options[0]],
    onChange: value => calls.push(['next', value])
  };
  view.rerender(<AssignmentAudience {...picker(next)} />);
  t.is(calls.length, 3);
  fireEvent.click(chip(view, 'Managers FR 412 users'));
  t.deepEqual(calls[3], ['next', [options[2], {...options[1], selected: true}]]);
});

test.serial('search filters names case insensitively and forwards queries and clearing', t => {
  const calls = [];
  const populations = populationProps({
    search: {placeholder: 'Find', value: 'mAnAgErS', onChange: query => calls.push(query)}
  });
  const view = mount(picker(populations));
  t.is(within(block(view, 'populations')).getAllByRole('button').length, 3);
  t.is(view.queryByText('Sales'), null);
  fireEvent.input(view.getByRole('textbox'), {target: {value: 'Sales'}});
  t.deepEqual(calls, ['Sales']);
  t.truthy(view.getByText('Managers FR'));
  const setQuery = value =>
    view.rerender(
      <AssignmentAudience {...picker({...populations, search: {...populations.search, value}})} />
    );
  setQuery('412');
  t.truthy(view.getByText('No populations'));
  t.truthy(view.getByText('Try another search'));
  t.true(view.getByRole('button', {name: 'Select all'}).disabled);
  setQuery('fr');
  t.truthy(view.getByRole('textbox'));
  t.truthy(view.getByRole('button', {name: 'Unselect all'}));
  fireEvent.click(view.container.querySelector(`.${searchStyle.clearIcon}`));
  t.deepEqual(calls, ['Sales', '']);
});

test.serial('bulk selection round trip keeps hidden and locked selections in options order', t => {
  const calls = [];
  const locked = {
    name: 'Managers IT',
    value: 'it',
    selected: false,
    locked: true,
    count: '12 users'
  };
  const populations = populationProps({
    options: [...options, locked],
    search: {value: 'managers'},
    onChange: value => calls.push(value)
  });
  const view = mount(picker(populations));
  fireEvent.click(view.getByRole('button', {name: 'Select all'}));
  const expected = [
    options[0],
    {...options[1], selected: true},
    options[2],
    {...locked, selected: true}
  ];
  t.deepEqual(calls[0], expected);
  view.rerender(<AssignmentAudience {...picker({...populations, options: expected})} />);
  fireEvent.click(view.getByRole('button', {name: 'Unselect all'}));
  t.deepEqual(calls[1], [options[2], {...locked, selected: true}]);
  fireEvent.click(chip(view, 'Managers IT 12 users'));
  fireEvent.keyDown(chip(view, 'Managers IT 12 users'), {key: 'Enter'});
  fireEvent.keyDown(chip(view, 'Managers IT 12 users'), {key: ' '});
  t.is(calls.length, 2);
});

test.serial(
  'all users locks sources and unselecting it releases them with stable description',
  t => {
    const calls = [];
    const all = {name: 'All users', value: 'all', selected: true, all: true};
    const populations = populationProps({options: [all], onChange: value => calls.push(value)});
    const props = {...idle.props, populations, disabledExplanation: 'All learners are included.'};
    const view = mount(props);
    const sources = () => block(view, 'audience-sources');
    const paragraph = view.getByText(props.disabledExplanation);
    const id = paragraph.id;
    t.is(sources().getAttribute('aria-describedby'), id);
    t.true(sources().disabled);
    t.false(block(view, 'populations').closest('fieldset').disabled);
    fireEvent.click(chip(view, 'All users'));
    t.deepEqual(calls, [[]]);
    view.rerender(
      <AssignmentAudience
        {...props}
        populations={{...populations, options: [{...all, selected: false}]}}
      />
    );
    t.false(sources().disabled);
    t.is(sources().getAttribute('aria-describedby'), null);
    t.is(view.queryByText(props.disabledExplanation), null);
    view.rerender(<AssignmentAudience {...props} />);
    t.is(view.getByText(props.disabledExplanation).id, id);
    [undefined, ''].forEach(disabledExplanation => {
      view.rerender(<AssignmentAudience {...props} disabledExplanation={disabledExplanation} />);
      t.is(sources().getAttribute('aria-describedby'), null);
      t.is(view.container.querySelector('[id^="assignment-audience-explanation-"]'), null);
    });
    view.rerender(<AssignmentAudience {...props} upload={undefined} individuals={undefined} />);
    t.truthy(view.getByText(props.disabledExplanation));
    t.is(sources(), null);
  }
);

test.serial('zero single all and locked team options omit controls and empty sources', t => {
  [
    [],
    [{name: 'All users', value: 'all', selected: false, all: true}],
    [{name: 'Sales FR', value: 'sales', selected: false, locked: true}]
  ].forEach(list => {
    const calls = [];
    const view = mount(
      picker(populationProps({options: list, onChange: value => calls.push(value)}))
    );
    t.is(view.queryByRole('textbox'), null);
    t.is(view.queryByRole('button', {name: /Select all|Unselect all/}), null);
    t.is(block(view, 'audience-sources'), null);
    if (list[0]?.locked) {
      const button = chip(view, 'Sales FR');
      fireEvent.click(button);
      fireEvent.keyDown(button, {key: ' '});
      t.deepEqual(calls, []);
      t.truthy(button.querySelector('svg'));
    }
    cleanup();
  });
  [
    {title: 'Audience'},
    {title: 'Audience', total: {label: '0 learners'}},
    {title: 'Audience', invalidTargets: [{ref: 'gone', label: 'Gone', onRemove: () => {}}]}
  ].forEach(props => {
    t.is(block(mount(props), 'audience-sources'), null);
    cleanup();
  });
  ['upload', 'individuals'].forEach(source => {
    t.truthy(
      block(mount({title: 'Audience', [source]: combined.props[source]}), 'audience-sources')
    );
    cleanup();
  });
});

test.serial('global and all source locks release independently and guard callbacks', t => {
  const calls = [];
  const populations = populationProps({
    onChange: value => calls.push(value),
    search: {placeholder: 'Find', value: '', onChange: value => calls.push(value)}
  });
  const props = {
    ...idle.props,
    populations,
    individuals: {...individualsWithChips.props.individuals, onSearch: () => calls.push('learner')},
    invalidTargets: [{ref: 'gone', label: 'Gone', onRemove: () => calls.push('invalid')}]
  };
  const view = mount({...props, disabled: true});
  assertControlsDisabled(t, view);
  fireEvent.click(chip(view, 'Managers DE 0'));
  fireEvent.keyDown(chip(view, 'Managers FR 412 users'), {key: 'Enter'});
  fireEvent.click(view.getByRole('button', {name: 'Select all'}));
  fireEvent.input(view.getByPlaceholderText('Find'), {target: {value: 'ignored'}});
  fireEvent.input(view.getByTestId('autocomplete-input'), {target: {value: 'ignored'}});
  fireEvent.click(within(block(view, 'invalid-targets')).getByRole('button', {name: 'Remove'}));
  t.deepEqual(calls, []);
  view.rerender(<AssignmentAudience {...props} />);
  t.false(block(view, 'audience-sources').disabled);
  fireEvent.click(chip(view, 'Managers DE 0'));
  t.is(calls.length, 1);
  const all = {...options[0], name: 'All users', all: true};
  view.rerender(<AssignmentAudience {...props} populations={{...populations, options: [all]}} />);
  t.true(block(view, 'audience-sources').disabled);
  fireEvent.click(within(block(view, 'invalid-targets')).getByRole('button', {name: 'Remove'}));
  t.is(calls[1], 'invalid');
  view.rerender(
    <AssignmentAudience
      {...props}
      disabled
      populations={{...populations, options: [{...all, selected: false}]}}
    />
  );
  t.true(block(view, 'audience-sources').disabled);
});

test.serial('disabled and ALL guard file template report removal and individual actions', t => {
  [{disabled: true}, {populations: allUsers.props.populations}].forEach(lock => {
    const calls = [];
    const props = {
      ...allUsersWithSources.props,
      populations: combined.props.populations,
      ...lock,
      upload: {
        ...uploadDone.props.upload,
        onRemove: () => calls.push('remove'),
        report: {...uploadDone.props.upload.report, onDownload: () => calls.push('report')},
        onUpload: () => calls.push('upload')
      },
      individuals: {
        ...individualsWithChips.props.individuals,
        onSearch: () => calls.push('search'),
        onAdd: () => calls.push('add'),
        onRemove: () => calls.push('learner')
      }
    };
    const view = mount(props);
    const sources = block(view, 'audience-sources');
    t.true(sources.disabled);
    t.is(view.queryByRole('link', {name: props.upload.templateLink.label}), null);
    [...sources.querySelectorAll('button')].forEach(button => fireEvent.click(button));
    fireEvent.click(view.getByText('Camille Durand'));
    const input = view.getByTestId('autocomplete-input');
    fireEvent.input(input, {target: {value: 'marc'}});
    fireEvent.focus(input);
    t.is(view.queryAllByRole('option').length, 0);
    t.deepEqual(calls, []);
    [idle, uploadLoading].forEach(fixture => {
      view.rerender(
        <AssignmentAudience
          {...props}
          upload={{
            ...fixture.props.upload,
            onUpload: () => calls.push('upload'),
            onRemove: () => calls.push('cancel')
          }}
        />
      );
      const fileInput = view.container.querySelector('input[type="file"]');
      const file = new window.File(['login'], 'learners.csv');
      if (fileInput) {
        fireEvent.change(fileInput, {target: {files: [file]}});
        fireEvent.drop(fileInput, {dataTransfer: {files: [file]}});
      }
      const cancel = view.container.querySelector('[data-name="reset-content-icon"]');
      if (fixture === uploadLoading) {
        t.truthy(cancel);
        fireEvent.click(cancel);
      }
      t.deepEqual(calls, []);
    });
    cleanup();
  });
});

test.serial('no matches keeps controls with disabled Select all and never emits', t => {
  const calls = [];
  const view = mount(
    picker(populationProps({search: {value: 'not a name'}, onChange: value => calls.push(value)}))
  );
  t.truthy(view.getByRole('textbox'));
  const bulk = view.getByRole('button', {name: 'Select all'});
  t.true(bulk.disabled);
  fireEvent.click(bulk);
  t.deepEqual(calls, []);
});

test.serial('population schema validates optional fields and required option fields', t => {
  const original = console.error;
  let warnings = [];
  const check = props => {
    warnings = [];
    PropTypes.resetWarningCache();
    PropTypes.checkPropTypes(AssignmentAudience.propTypes, props, 'prop', 'AssignmentAudience');
  };
  try {
    console.error = message => warnings.push(message);
    [undefined, {}, {placeholder: '', value: '', onChange: () => {}}].forEach(search => {
      check(
        picker(
          populationProps({
            search,
            emptyMessages: {},
            options: [
              {name: 'Team', value: 'team', selected: false, count: 0, locked: true, all: false}
            ]
          })
        )
      );
      t.deepEqual(warnings, []);
    });
    ['options', 'onChange'].forEach(field => {
      const populations = populationProps();
      delete populations[field];
      check(picker(populations));
      t.is(warnings.length, 1);
      t.true(warnings[0].includes(`populations.${field}`));
    });
    ['name', 'value', 'selected'].forEach(field => {
      const option = {...options[0]};
      delete option[field];
      check(picker(populationProps({options: [option]})));
      t.is(warnings.length, 1);
      t.true(warnings[0].includes(`options[0].${field}`));
    });
    [
      ['count', {}],
      ['all', 'true'],
      ['locked', 1]
    ].forEach(([field, value]) => {
      check(picker(populationProps({options: [{...options[0], [field]: value}]})));
      t.is(warnings.length, 1);
      t.true(warnings[0].includes(field));
    });
    [
      ['upload', combined.props.upload, ['status', 'onUpload']],
      ['individuals', combined.props.individuals, ['onSearch', 'onAdd', 'onRemove']],
      ['total', combined.props.total, ['label']]
    ].forEach(([name, value, fields]) => {
      fields.forEach(field => {
        const incomplete = {...value};
        delete incomplete[field];
        check({title: 'Audience', [name]: incomplete});
        t.is(warnings.length, 1);
        t.true(warnings[0].includes(`${name}.${field}`));
      });
    });
    t.false('everyone' in AssignmentAudience.propTypes);
    t.false('team' in AssignmentAudience.propTypes);
  } finally {
    console.error = original;
    PropTypes.resetWarningCache();
  }
});

test.serial('individual and bulk unselection preserve hidden locked and ordinary picks', t => {
  const calls = [];
  const hiddenLocked = Object.freeze({
    name: 'Support',
    value: 'support',
    selected: false,
    locked: true,
    count: '8 users'
  });
  const hiddenSelected = Object.freeze({name: 'Sales', value: 'sales', selected: true});
  const visible = Object.freeze({name: 'Managers', value: 'managers', selected: true});
  const list = Object.freeze([hiddenLocked, hiddenSelected, visible]);
  const populations = populationProps({
    options: list,
    search: {value: 'managers'},
    onChange: value => calls.push(value)
  });
  const view = mount(picker(populations));
  t.is(view.queryByText('Support'), null);
  t.is(view.queryByText('Sales'), null);
  fireEvent.click(chip(view, 'Managers'));
  t.deepEqual(calls, [[{...hiddenLocked, selected: true}, hiddenSelected]]);
  fireEvent.click(view.getByRole('button', {name: 'Unselect all'}));
  t.deepEqual(calls[1], [{...hiddenLocked, selected: true}, hiddenSelected]);
  t.false(hiddenLocked.selected);
  t.true(visible.selected);
  view.rerender(<AssignmentAudience {...picker({...populations, search: {value: ''}})} />);
  t.true(chip(view, 'Support 8 users').classList.contains(chipsStyle.selected));
  t.is(calls.length, 2);
});

test.serial('bulk unselection remains enabled when every listed option is locked', t => {
  const calls = [];
  const locked = {name: 'Sales FR', value: 'fr', selected: false, locked: true};
  const populations = populationProps({
    options: [locked, {name: 'Support', value: 'support', selected: false}],
    search: {value: 'sales'},
    onChange: value => calls.push(value)
  });
  const view = mount(picker(populations));
  const bulk = view.getByRole('button', {name: 'Unselect all'});
  t.false(bulk.disabled);
  t.true(chip(view, 'Sales FR').classList.contains(chipsStyle.selected));
  fireEvent.click(bulk);
  t.deepEqual(calls, [[{...locked, selected: true}]]);
  t.true(chip(view, 'Sales FR').classList.contains(chipsStyle.selected));
});

test.serial(
  'bulk selection follows changed queries and options without keeping local selection',
  t => {
    const calls = [];
    const fr = {name: 'Managers FR', value: 'fr', selected: false, count: '5 users'};
    const de = {name: 'Managers DE', value: 'de', selected: false, count: '7 users'};
    const sales = {name: 'Sales', value: 'sales', selected: true};
    const populations = populationProps({
      options: [fr, de, sales],
      search: {value: 'FR'},
      onChange: value => calls.push(['first', value])
    });
    const view = mount(picker(populations));
    fireEvent.click(view.getByRole('button', {name: 'Select all'}));
    t.deepEqual(calls, [['first', [{...fr, selected: true}, sales]]]);
    t.false(chip(view, 'Managers FR 5 users').classList.contains(chipsStyle.selected));
    t.truthy(view.getByRole('button', {name: 'Select all'}));

    const next = {
      ...populations,
      options: [sales, de, {...fr, selected: true}],
      search: {value: 'DE'},
      onChange: value => calls.push(['next', value])
    };
    view.rerender(<AssignmentAudience {...picker(next)} />);
    t.is(calls.length, 1);
    t.is(view.queryByText('Managers FR'), null);
    fireEvent.click(view.getByRole('button', {name: 'Select all'}));
    t.deepEqual(calls[1], ['next', [sales, {...de, selected: true}, {...fr, selected: true}]]);
    view.rerender(
      <AssignmentAudience {...picker({...next, options: [sales, {...de, selected: true}, fr]})} />
    );
    fireEvent.click(view.getByRole('button', {name: 'Unselect all'}));
    t.deepEqual(calls[2], ['next', [sales]]);
  }
);

test.serial(
  'every ordinary population can be selected without locking sources or showing explanation',
  t => {
    const selections = [];
    const uploads = [];
    const queries = [];
    const populations = populationProps({
      onChange: value => selections.push(value)
    });
    const props = {
      ...idle.props,
      populations,
      disabledExplanation: 'All learners are included.',
      upload: {...idle.props.upload, onUpload: file => uploads.push(file)},
      individuals: {...idle.props.individuals, onSearch: query => queries.push(query)}
    };
    const view = mount(props);
    fireEvent.click(view.getByRole('button', {name: 'Select all'}));
    t.deepEqual(selections, [[options[0], {...options[1], selected: true}, options[2]]]);
    view.rerender(
      <AssignmentAudience {...props} populations={{...populations, options: selections[0]}} />
    );
    const sources = block(view, 'audience-sources');
    t.false(sources.disabled);
    t.is(sources.getAttribute('aria-describedby'), null);
    t.is(view.queryByText(props.disabledExplanation), null);
    const file = new window.File(['login'], 'learners.csv');
    fireEvent.change(sources.querySelector('input[type="file"]'), {target: {files: [file]}});
    fireEvent.input(view.getByTestId('autocomplete-input'), {target: {value: 'Camille'}});
    t.deepEqual(uploads, [file]);
    t.deepEqual(queries, ['Camille']);
  }
);

test.serial(
  'search can omit its callback and clearing follows disabled and callback changes',
  t => {
    const calls = [];
    const populations = populationProps({search: {value: 'Managers'}});
    const view = mount(picker(populations));
    t.is(view.getByRole('textbox').placeholder, '');
    fireEvent.input(view.getByRole('textbox'), {target: {value: 'Sales'}});
    fireEvent.click(view.container.querySelector(`.${searchStyle.clearIcon}`));
    t.truthy(view.getByText('Managers FR'));
    t.is(view.queryByText('Sales'), null);
    const next = {...populations, search: {value: 'Sales', onChange: value => calls.push(value)}};
    view.rerender(<AssignmentAudience {...picker(next)} disabled />);
    t.true(view.getByRole('textbox').disabled);
    fireEvent.input(view.getByRole('textbox'), {target: {value: 'ignored'}});
    fireEvent.click(view.container.querySelector(`.${searchStyle.clearIcon}`));
    t.deepEqual(calls, []);
    view.rerender(<AssignmentAudience {...picker(next)} />);
    fireEvent.input(view.getByRole('textbox'), {target: {value: 'Managers'}});
    fireEvent.click(view.container.querySelector(`.${searchStyle.clearIcon}`));
    t.deepEqual(calls, ['Managers', '']);
    t.truthy(view.getByText('Sales'));
    t.is(view.queryByText('Managers FR'), null);
    view.rerender(<AssignmentAudience {...picker({...next, search: undefined})} />);
    t.is(view.queryByRole('textbox'), null);
    t.truthy(view.getByText('Managers FR'));
    t.truthy(view.getByRole('button', {name: 'Select all'}));
    t.deepEqual(calls, ['Managers', '']);
  }
);

test.serial('multiple audiences keep distinct explanation references when sources change', t => {
  const props = {...allUsers.props, disabledExplanation: 'All learners are included.'};
  const view = render(
    <div>
      <AssignmentAudience {...props} />
      <AssignmentAudience {...props} />
    </div>,
    {wrapper: wrappingComponent}
  );
  const explanations = view.getAllByText(props.disabledExplanation);
  t.not(explanations[0].id, explanations[1].id);
  const sources = view.container.querySelectorAll('[data-name="audience-sources"]');
  t.is(sources.length, 2);
  t.is(sources[0].getAttribute('aria-describedby'), explanations[0].id);
  t.is(sources[1].getAttribute('aria-describedby'), explanations[1].id);
  view.rerender(
    <div>
      <AssignmentAudience {...props} upload={undefined} individuals={undefined} />
      <AssignmentAudience {...props} disabledExplanation="" />
    </div>
  );
  const remaining = view.container.querySelectorAll('[data-name="audience-sources"]');
  t.is(remaining.length, 1);
  t.is(remaining[0].getAttribute('aria-describedby'), null);
  t.is(view.getAllByText(props.disabledExplanation).length, 1);
  t.is(view.getByText(props.disabledExplanation).id, explanations[0].id);
});

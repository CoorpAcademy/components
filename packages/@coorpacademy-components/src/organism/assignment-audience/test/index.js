import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
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
  t.truthy(
    view.getByRole('button', {
      name: `${populations.removeLabel} Managers FR`
    })
  );
  t.truthy(
    view.getByRole('button', {
      name: `${individuals.removeLabel} Camille Durand`
    })
  );
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
    populations: {
      ...everyoneOnWithSources.props.populations,
      onChange: () => calls.push('pop')
    },
    individuals: {
      ...everyoneOnWithSources.props.individuals,
      onRemove: () => calls.push('learner')
    }
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
    everyone: {
      ...combined.props.everyone,
      onChange: value => calls.push(value)
    }
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
    populations: {
      ...combined.props.populations,
      onChange: value => calls.push(value)
    }
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
    populations: {
      ...combined.props.populations,
      onChange: value => calls.push(value)
    }
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

test.serial('no upload while everyone is on or a file is being checked', t => {
  const files = [];
  const onUpload = file => files.push(file);
  const file = new window.File(['login'], 'a.xlsx');
  [
    {...everyoneOn.props, upload: {...everyoneOn.props.upload, onUpload}},
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

test.serial('the template link points at the template, and is disabled while everyone is on', t => {
  const enabled = mount(idle.props);
  const link = enabled.getByRole('link', {
    name: idle.props.upload.templateLink.label
  });
  t.is(link.getAttribute('href'), idle.props.upload.templateLink.href);
  cleanup();
  const off = mount(everyoneOn.props);
  t.true(
    off.getByRole('button', {
      name: everyoneOn.props.upload.templateLink.label
    }).disabled
  );
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

test.serial('populations alone render without required-prop warnings or omitted blocks', t => {
  const props = {
    title: 'Audience',
    populations: combined.props.populations
  };
  const warnings = [];
  const originalError = console.error;
  try {
    console.error = message => warnings.push(message);
    PropTypes.resetWarningCache();
    PropTypes.checkPropTypes(AssignmentAudience.propTypes, props, 'prop', 'AssignmentAudience');
  } finally {
    console.error = originalError;
  }
  t.deepEqual(warnings, []);
  const view = mount(props);
  t.truthy(block(view, 'populations').querySelector('[data-name="select-languages"]'));
  ['everyone', 'upload', 'individuals', 'estimated-audience'].forEach(name =>
    t.is(block(view, name), null, name)
  );
});

test.serial('each optional block renders independently', t => {
  const names = ['everyone', 'populations', 'upload', 'individuals', 'total'];
  [undefined, ...names].forEach(name => {
    const props = {
      title: 'Audience',
      ...(name ? {[name]: combined.props[name]} : {})
    };
    const view = mount(props);
    names.forEach(candidate => {
      const element = block(view, candidate === 'total' ? 'estimated-audience' : candidate);
      t.is(Boolean(element), candidate === name, candidate);
    });
    cleanup();
  });
});

test.serial('team renders its label and population name without controls', t => {
  const view = mount({
    title: 'Audience',
    team: {label: 'All My Team', name: 'Sales FR'}
  });
  const team = block(view, 'team');
  t.truthy(view.getByText('All My Team'));
  t.truthy(view.getByText('Sales FR'));
  t.truthy(within(team).getByRole('group', {name: 'All My Team'}));
  t.is(view.container.querySelector('input, button, a, [role="button"], [tabindex]'), null);
  t.is(block(view, 'everyone'), null);
  t.is(block(view, 'populations'), null);
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

test.serial('invalid Everyone stays removable while sources are locked', t => {
  const calls = [];
  const view = mount({
    ...everyoneOnWithSources.props,
    everyone: {
      ...everyoneOnWithSources.props.everyone,
      onChange: value => calls.push(value)
    },
    invalidTargets: [{ref: 'ALL', label: 'Everyone', onRemove: () => calls.push('ALL')}]
  });
  const remove = within(block(view, 'invalid-targets')).getByRole('button', {
    name: 'Remove'
  });
  t.false(remove.disabled);
  t.false(remove.closest('fieldset').disabled);
  fireEvent.click(remove);
  fireEvent.click(block(view, 'everyone').querySelector('input'));
  t.deepEqual(calls, ['ALL', false]);
  t.false(block(view, 'everyone').querySelector('input').disabled);
  t.true(block(view, 'audience-sources').disabled);
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

test.serial('disabled locks every rendered input switch button and chip', t => {
  const calls = [];
  const props = {
    ...combined.props,
    everyone: {
      ...combined.props.everyone,
      onChange: () => calls.push('everyone')
    },
    populations: {
      ...combined.props.populations,
      onChange: () => calls.push('population')
    },
    individuals: {
      ...individualsWithChips.props.individuals,
      onSearch: () => calls.push('search'),
      onAdd: () => calls.push('add'),
      onRemove: () => calls.push('learner')
    },
    invalidTargets: [
      {
        ref: 'former',
        label: 'Former population',
        onRemove: () => calls.push('flag')
      }
    ]
  };
  const view = mount(props);
  fireEvent.focus(view.getByTestId('autocomplete-input'));
  t.true(view.queryAllByRole('option').length > 0);
  fireEvent.click(block(view, 'populations').querySelector('[data-name="select-languages"]'));
  t.is(block(view, 'populations').querySelectorAll('input[type="checkbox"]').length, 3);
  view.rerender(<AssignmentAudience {...props} disabled />);
  assertControlsDisabled(t, view);
  t.is(block(view, 'audience-sources').getAttribute('aria-describedby'), null);
  t.is(view.queryByText(props.disabledExplanation), null);
  t.is(view.queryAllByRole('option').length, 0);
  t.is(view.queryByRole('link', {name: props.upload.templateLink.label}), null);
  t.is(block(view, 'population-chips').querySelector('[role="button"]'), null);
  t.is(block(view, 'individuals').querySelector('[role="button"]'), null);
  fireEvent.click(block(view, 'everyone').querySelector('input'));
  fireEvent.click(block(view, 'populations').querySelectorAll('input[type="checkbox"]')[2]);
  fireEvent.click(block(view, 'populations').querySelector('[data-name="select-languages"]'));
  fireEvent.input(view.getByTestId('autocomplete-input'), {
    target: {value: 'locked'}
  });
  fireEvent.click(within(block(view, 'population-chips')).getByText('Managers FR'));
  fireEvent.click(view.getByText('Camille Durand'));
  fireEvent.click(
    within(block(view, 'invalid-targets')).getByRole('button', {
      name: 'Remove'
    })
  );
  t.deepEqual(calls, []);
  view.rerender(<AssignmentAudience {...props} />);
  t.false(block(view, 'audience-sources').disabled);
  t.false(block(view, 'invalid-targets').disabled);
  fireEvent.click(block(view, 'everyone').querySelector('input'));
  fireEvent.click(view.getByRole('button', {name: 'Remove Managers FR'}));
  fireEvent.input(view.getByTestId('autocomplete-input'), {
    target: {value: 'unlocked'}
  });
  fireEvent.focus(view.getByTestId('autocomplete-input'));
  fireEvent.click(view.getAllByRole('option')[0]);
  fireEvent.click(view.getByRole('button', {name: 'Remove Camille Durand'}));
  fireEvent.click(
    within(block(view, 'invalid-targets')).getByRole('button', {
      name: 'Remove'
    })
  );
  t.deepEqual(calls, ['everyone', 'population', 'search', 'add', 'learner', 'flag']);
});

test.serial('disabled blocks upload browse drop and loader cancellation', t => {
  const calls = [];
  [idle, uploadLoading].forEach(fixture => {
    const props = {
      ...fixture.props,
      disabled: true,
      upload: {
        ...fixture.props.upload,
        onUpload: () => calls.push('upload'),
        onRemove: () => calls.push('cancel')
      }
    };
    const view = mount(props);
    assertControlsDisabled(t, view);
    const input = view.container.querySelector('input[type="file"]');
    if (input) {
      const file = new window.File(['login'], 'learners.xlsx');
      fireEvent.change(input, {target: {files: [file]}});
      fireEvent.drop(input, {dataTransfer: {files: [file]}});
      fireEvent.change(input, {target: {files: [file]}});
    }
    const cancel = view.container.querySelector('[data-name="reset-content-icon"]');
    if (fixture === uploadLoading) {
      t.truthy(cancel);
      fireEvent.click(cancel);
    }
    t.deepEqual(calls, []);
    cleanup();
  });
});

test.serial('disabled blocks uploaded file removal and report download', t => {
  [{disabled: true}, {everyone: {...combined.props.everyone, value: true}}].forEach(lock => {
    const calls = [];
    const upload = {
      ...uploadDone.props.upload,
      onRemove: () => calls.push('remove'),
      report: {
        ...uploadDone.props.upload.report,
        onDownload: () => calls.push('download')
      }
    };
    const view = mount({...combined.props, ...lock, upload});
    const result = block(view, 'upload-result');
    [...result.querySelectorAll('button')].forEach(button => {
      t.true(button.disabled || Boolean(button.closest('fieldset[disabled]')));
      fireEvent.click(button);
    });
    t.is(result.querySelectorAll('button').length, 2);
    t.deepEqual(calls, []);
    cleanup();
  });
});

test.serial('team does not disable supplied sources', t => {
  const calls = [];
  const props = {
    title: 'Audience',
    team: {label: 'All My Team', name: 'Sales FR'},
    upload: {...idle.props.upload, onUpload: () => calls.push('upload')},
    individuals: {
      ...individualsWithChips.props.individuals,
      onSearch: () => calls.push('search')
    }
  };
  const view = mount(props);
  t.false(block(view, 'audience-sources').disabled);
  const input = view.container.querySelector('input[type="file"]');
  t.false(input.disabled);
  fireEvent.change(input, {
    target: {files: [new window.File(['login'], 'learners.csv')]}
  });
  fireEvent.input(view.getByTestId('autocomplete-input'), {
    target: {value: 'marc'}
  });
  t.deepEqual(calls, ['upload', 'search']);
});

test.serial('optional props preserve required inner fields and reject invalid scalar types', t => {
  const shapes = [
    ['everyone', combined.props.everyone, ['label', 'value', 'onChange']],
    ['populations', combined.props.populations, ['options', 'onChange']],
    ['upload', combined.props.upload, ['status', 'onUpload']],
    ['individuals', combined.props.individuals, ['onSearch', 'onAdd', 'onRemove']],
    ['total', combined.props.total, ['label']],
    ['team', {label: 'All My Team', name: 'Sales FR'}, ['label', 'name']],
    [
      'invalidTargets',
      {ref: 'former', label: 'Former population', onRemove: () => {}},
      ['ref', 'label', 'onRemove']
    ]
  ];
  const originalError = console.error;
  let warnings = [];
  const check = props => {
    warnings = [];
    PropTypes.resetWarningCache();
    PropTypes.checkPropTypes(AssignmentAudience.propTypes, props, 'prop', 'AssignmentAudience');
  };
  try {
    console.error = message => warnings.push(message);
    shapes.forEach(([name, value, fields]) => {
      const propsFor = data => ({
        title: 'Audience',
        [name]: name === 'invalidTargets' ? [data] : data
      });
      check(propsFor(value));
      t.deepEqual(warnings, [], name);
      fields.forEach(field => {
        const incomplete = {...value};
        delete incomplete[field];
        check(propsFor(incomplete));
        t.is(warnings.length, 1, `${name}.${field}`);
        const path = name === 'invalidTargets' ? `${name}[0].${field}` : `${name}.${field}`;
        t.true(warnings[0].includes(path), path);
      });
    });
    [
      ['disabled', 'true'],
      ['error', true],
      ['invalidLabel', false]
    ].forEach(([name, value]) => {
      check({title: 'Audience', [name]: value});
      t.is(warnings.length, 1, name);
      t.true(warnings[0].includes(name), name);
    });
  } finally {
    console.error = originalError;
    PropTypes.resetWarningCache();
  }
});

test.serial(
  'changing scoped modes adds and removes optional blocks without selecting an audience',
  t => {
    const calls = [];
    const minimal = {title: 'Audience'};
    const populations = {
      ...combined.props.populations,
      options: [{name: 'Sales FR', value: 'sales-fr', selected: false}],
      onChange: value => calls.push(value)
    };
    const view = mount(minimal);
    view.rerender(<AssignmentAudience {...minimal} populations={populations} />);
    t.truthy(block(view, 'populations'));
    t.is(block(view, 'population-chips'), null);
    t.is(block(view, 'everyone'), null);
    t.is(block(view, 'team'), null);

    view.rerender(
      <AssignmentAudience {...minimal} team={{label: 'All My Team', name: 'Sales FR'}} />
    );
    t.truthy(within(block(view, 'team')).getByText('Sales FR'));
    t.is(block(view, 'populations'), null);
    t.is(block(view, 'everyone'), null);

    view.rerender(
      <AssignmentAudience
        {...minimal}
        populations={populations}
        everyone={{...combined.props.everyone, onChange: value => calls.push(value)}}
      />
    );
    t.truthy(block(view, 'populations'));
    t.false(block(view, 'everyone').querySelector('input').checked);
    t.is(block(view, 'team'), null);

    view.rerender(<AssignmentAudience {...minimal} />);
    ['team', 'everyone', 'populations', 'upload', 'individuals', 'estimated-audience'].forEach(
      name => t.is(block(view, name), null, name)
    );
    t.is(view.container.querySelector('input, button, a, [role="button"]'), null);
    t.deepEqual(calls, []);
  }
);

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

test.serial(
  'overlapping section and Everyone locks release independently and restore upload links',
  t => {
    const calls = [];
    const props = {
      title: 'Audience',
      disabledExplanation: 'Everyone includes all platform learners.',
      everyone: {
        ...combined.props.everyone,
        value: true,
        onChange: value => calls.push(['everyone', value])
      },
      upload: {...idle.props.upload, onUpload: file => calls.push(['upload', file])},
      invalidTargets: [{ref: 'ALL', label: 'Everyone', onRemove: () => calls.push('flag')}]
    };
    const file = new window.File(['login'], 'learners.csv');
    const view = mount({...props, disabled: true});
    const attemptUpload = () =>
      fireEvent.change(view.container.querySelector('input[type="file"]'), {
        target: {files: [file]}
      });
    const remove = () =>
      within(block(view, 'invalid-targets')).getByRole('button', {name: 'Remove'});
    t.true(block(view, 'audience-sources').disabled);
    t.true(block(view, 'invalid-targets').disabled);
    fireEvent.click(remove());
    attemptUpload();
    t.deepEqual(calls, []);

    view.rerender(<AssignmentAudience {...props} disabled={false} />);
    t.true(block(view, 'audience-sources').disabled);
    t.false(block(view, 'invalid-targets').disabled);
    t.false(block(view, 'everyone').querySelector('input').disabled);
    t.is(
      block(view, 'audience-sources').getAttribute('aria-describedby'),
      view.getByText(props.disabledExplanation).id
    );
    t.is(view.queryByRole('link', {name: props.upload.templateLink.label}), null);
    fireEvent.click(remove());
    fireEvent.click(block(view, 'everyone').querySelector('input'));
    attemptUpload();
    t.deepEqual(calls, ['flag', ['everyone', false]]);

    const everyoneOff = {...props.everyone, value: false};
    view.rerender(<AssignmentAudience {...props} everyone={everyoneOff} disabled />);
    t.true(block(view, 'audience-sources').disabled);
    t.true(block(view, 'invalid-targets').disabled);
    t.is(block(view, 'audience-sources').getAttribute('aria-describedby'), null);
    t.is(view.queryByText(props.disabledExplanation), null);
    fireEvent.click(remove());
    fireEvent.click(block(view, 'everyone').querySelector('input'));
    attemptUpload();
    t.deepEqual(calls, ['flag', ['everyone', false]]);

    view.rerender(<AssignmentAudience {...props} everyone={everyoneOff} disabled={false} />);
    t.false(block(view, 'audience-sources').disabled);
    t.false(block(view, 'invalid-targets').disabled);
    const link = view.getByRole('link', {name: props.upload.templateLink.label});
    t.is(link.getAttribute('href'), props.upload.templateLink.href);
    attemptUpload();
    t.deepEqual(calls, ['flag', ['everyone', false], ['upload', file]]);
  }
);

test.serial(
  'empty sources tolerate omitted learner arrays and preserve zero and formatted counts',
  t => {
    const searches = [];
    const added = [];
    const populations = {...combined.props.populations, options: []};
    const individuals = {
      placeholder: 'Search learners',
      onSearch: query => searches.push(query),
      onAdd: learner => added.push(learner),
      onRemove: () => {}
    };
    const props = {title: 'Audience', populations, individuals};
    const view = mount(props);
    t.is(block(view, 'population-chips'), null);
    t.is(block(view, 'estimated-audience'), null);
    t.is(view.getByTestId('autocomplete-input').value, '');
    fireEvent.focus(view.getByTestId('autocomplete-input'));
    t.is(view.queryAllByRole('option').length, 0);
    fireEvent.input(view.getByTestId('autocomplete-input'), {target: {value: 'nobody'}});
    t.deepEqual(searches, ['nobody']);

    const learner = {id: 'new-learner', label: 'Marie Leroy', login: 'm.leroy'};
    view.rerender(
      <AssignmentAudience
        {...props}
        populations={{
          ...populations,
          options: [
            {name: 'Empty population', value: 'empty', selected: true, count: 0},
            {name: 'Large population', value: 'large', selected: true, count: '1,234 learners'},
            {name: 'Count not supplied', value: 'unknown', selected: true}
          ]
        }}
        individuals={{...individuals, value: 'mar', suggestions: [learner]}}
        total={{label: 'Estimated audience: 0 learners', detail: 'Consumer estimate pending.'}}
      />
    );
    const chips = within(block(view, 'population-chips'));
    t.truthy(chips.getByText('0'));
    t.truthy(chips.getByText('1,234 learners'));
    t.truthy(chips.getByText('Count not supplied'));
    t.false(block(view, 'population-chips').textContent.includes('undefined'));
    t.truthy(within(block(view, 'estimated-audience')).getByText('Estimated audience: 0 learners'));
    t.truthy(within(block(view, 'estimated-audience')).getByText('Consumer estimate pending.'));
    fireEvent.focus(view.getByTestId('autocomplete-input'));
    fireEvent.click(view.getByRole('option'));
    t.deepEqual(added, [learner]);
  }
);

test.serial(
  'section and upload errors clear independently without locking corrective actions',
  t => {
    const calls = [];
    const props = {
      title: 'Audience',
      error: 'Choose an audience to publish.',
      invalidLabel: 'Remove this population to publish.',
      invalidTargets: [
        {ref: 'former', label: 'Former population', onRemove: () => calls.push('flag')}
      ],
      upload: {...uploadError.props.upload, onUpload: file => calls.push(file)}
    };
    const view = mount(props);
    const alert = view.getByRole('alert');
    t.truthy(within(alert).getByText(props.error));
    t.is(within(alert).queryByText(props.upload.error), null);
    t.is(within(alert).queryByText(/Former population/), null);
    t.truthy(within(block(view, 'upload-dropzone')).getByText(props.upload.error));
    t.truthy(
      within(block(view, 'invalid-targets')).getByText(`Former population: ${props.invalidLabel}`)
    );
    t.false(block(view, 'audience-sources').disabled);
    t.false(block(view, 'invalid-targets').disabled);
    fireEvent.click(within(block(view, 'invalid-targets')).getByRole('button', {name: 'Remove'}));
    const file = new window.File(['login'], 'corrected.csv');
    fireEvent.change(view.container.querySelector('input[type="file"]'), {target: {files: [file]}});
    t.deepEqual(calls, ['flag', file]);

    view.rerender(<AssignmentAudience {...props} error="" />);
    t.is(view.queryByRole('alert'), null);
    t.truthy(within(block(view, 'upload-dropzone')).getByText(props.upload.error));
    t.truthy(
      within(block(view, 'invalid-targets')).getByText(`Former population: ${props.invalidLabel}`)
    );

    view.rerender(
      <AssignmentAudience
        {...props}
        error="Audience still needs review."
        upload={{...props.upload, status: 'idle'}}
        invalidLabel=""
        disabled
      />
    );
    t.truthy(within(view.getByRole('alert')).getByText('Audience still needs review.'));
    t.is(view.queryByText(props.error), null);
    t.is(view.queryByText(props.upload.error), null);
    t.truthy(within(block(view, 'invalid-targets')).getByText('Former population'));
    t.is(view.queryByText(`Former population: ${props.invalidLabel}`), null);
    assertControlsDisabled(t, view);
    fireEvent.click(within(block(view, 'invalid-targets')).getByRole('button', {name: 'Remove'}));
    t.deepEqual(calls, ['flag', file]);
  }
);

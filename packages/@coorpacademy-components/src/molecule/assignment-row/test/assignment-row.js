import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import AssignmentRow from '..';
import ButtonLink from '../../../atom/button-link';
import AssignmentStatusTag from '../../assignment-status-tag';

browserEnv();
test.afterEach(cleanup);

const props = {
  title: 'Security essentials',
  status: 'active',
  statusLabel: 'In progress',
  audienceSummary: '3 populations · 12 learners',
  dateRange: '01 Oct 2026 09:00 GMT – 31 Oct 2026 18:00 GMT',
  completion: 42,
  sync: {state: 'done', label: 'Up to date', message: '12 learners synchronized'}
};

const assertCompletion = (t, view, expected, expectedWidth = `${expected}%`) => {
  const progress = view.getByRole('progressbar', {name: props.title});
  t.is(progress.getAttribute('aria-valuemin'), '0');
  t.is(progress.getAttribute('aria-valuemax'), '100');
  t.is(progress.getAttribute('aria-valuenow'), `${expected}`);
  t.truthy(view.getByText(`${expected}%`));
  t.is(
    progress.querySelector('[data-name="progress-bar-wrapper"] > div').style.width,
    expectedWidth
  );
};

test.serial('renders all supplied row fields', t => {
  const view = render(<AssignmentRow {...props} data-name="custom-row" />);
  ['title', 'statusLabel', 'audienceSummary', 'dateRange'].forEach(field => {
    t.truthy(view.getByText(props[field]));
  });
  t.truthy(view.getByText(props.sync.label));
  t.truthy(view.getByText(props.sync.message));
  t.truthy(view.container.querySelector('[data-name="custom-row"]'));
  t.is(view.container.querySelector('li'), null);
  const tag = render(<AssignmentStatusTag status="active" label={props.statusLabel} />);
  t.is(
    within(view.container).getByText(props.statusLabel).closest('span').className,
    tag.container.firstChild.className
  );
  assertCompletion(t, view, 42);
});

['running', 'done', 'error'].forEach(state => {
  test.serial(`renders ${state} sync label and detail`, t => {
    const sync = {state, label: `Label for ${state}`, message: `Detail for ${state}`};
    const view = render(<AssignmentRow {...props} sync={sync} />);
    t.truthy(view.getByText(sync.label));
    t.truthy(view.getByText(sync.message));
    t.is(
      view.container.querySelector('[data-name="assignment-sync"]').getAttribute('data-sync-state'),
      state
    );
  });
});

test.serial('keeps phase independent of sync', t => {
  ['running', 'error'].forEach(state => {
    const view = render(
      <AssignmentRow
        {...props}
        status="disabled"
        statusLabel="Paused"
        sync={{state, label: state}}
      />
    );
    t.truthy(view.getByText('Paused'));
    t.truthy(view.getByText(state));
    view.unmount();
  });
});

test.serial('renders sync without optional detail', t => {
  const view = render(<AssignmentRow {...props} sync={{state: 'done', label: 'Current'}} />);
  t.is(view.container.querySelector('[data-name="assignment-sync"]').textContent, 'Current');
});

test.serial('uses supplied labels verbatim', t => {
  const label = '<b>État & state</b>';
  const view = render(
    <AssignmentRow
      {...props}
      title={label}
      statusLabel={label}
      audienceSummary={label}
      dateRange={label}
      sync={{state: 'error', label, message: label}}
      actions={[{label, onClick: () => {}}]}
    />
  );
  t.is(view.getAllByText(label).length, 7);
  t.is(view.container.querySelector('b'), null);
});

test.serial('renders 0 and 100 percent', t => {
  [0, 100].forEach(completion => {
    const view = render(<AssignmentRow {...props} completion={completion} />);
    assertCompletion(t, view, completion);
    view.unmount();
  });
});

test.serial('rejects out-of-range, nonfinite and missing completion through propTypes', t => {
  [
    -1,
    120,
    Number.NaN,
    Infinity,
    -Infinity,
    -Number.EPSILON,
    100.001,
    Number.MAX_SAFE_INTEGER,
    undefined,
    null,
    '42'
  ].forEach(completion => {
    PropTypes.resetWarningCache();
    t.throws(() =>
      PropTypes.checkPropTypes(
        AssignmentRow.propTypes,
        {...props, completion},
        'prop',
        'AssignmentRow'
      )
    );
  });
});

test.serial('calls only the selected enabled action once', t => {
  const calls = [0, 0];
  const actions = ['Edit', 'Duplicate'].map((label, index) => ({
    label,
    onClick: () => calls[index]++
  }));
  const view = render(<AssignmentRow {...props} actions={actions} />);
  fireEvent.click(view.getByRole('button', {name: 'Duplicate'}));
  t.deepEqual(calls, [0, 1]);
});

test.serial('does not call a disabled delete action', t => {
  let calls = 0;
  const view = render(
    <AssignmentRow
      {...props}
      actions={[{label: 'Delete', onClick: () => calls++, disabled: true, danger: true}]}
    />
  );
  const button = view.getByRole('button', {name: 'Delete'});
  t.is(button.tagName, 'BUTTON');
  t.true(button.disabled);
  fireEvent.click(button);
  t.is(calls, 0);
});

test.serial('renders dangerous actions with dangerous styling', t => {
  const view = render(
    <AssignmentRow {...props} actions={[{label: 'Delete', onClick: () => {}, danger: true}]} />
  );
  const expected = render(<ButtonLink label="Danger reference" type="dangerous" />);
  t.is(
    view.getByRole('button', {name: 'Delete'}).className,
    within(expected.container).getByRole('button').className
  );
});

test.serial('renders no buttons when actions are absent', t => {
  const view = render(<AssignmentRow {...props} />);
  t.is(view.queryAllByRole('button').length, 0);
  t.is(view.container.querySelector('[data-name="assignment-actions"]'), null);
});

test.serial('renders supplied fractional completion without rounding', t => {
  [
    [-0, '0%'],
    [0.999, '0.9990000000000001%'],
    [37.9, '37.9%'],
    [99.999, '99.999%']
  ].forEach(([completion, expectedWidth]) => {
    const view = render(<AssignmentRow {...props} completion={completion} />);
    assertCompletion(t, view, completion, expectedWidth);
    view.unmount();
  });
  t.notThrows(() =>
    PropTypes.checkPropTypes(
      AssignmentRow.propTypes,
      {...props, completion: Number.MIN_VALUE},
      'prop',
      'AssignmentRow'
    )
  );
});

test.serial('refreshes row content and accessible progress when props change', t => {
  const view = render(<AssignmentRow {...props} />);
  view.rerender(
    <AssignmentRow
      {...props}
      title="Updated assignment"
      status="unrecognized"
      statusLabel="Custom status"
      audienceSummary="No learners"
      dateRange="2030-01-01 00:00 GMT"
      completion={99.999}
      sync={{state: 'error', label: 'Retry required'}}
    />
  );
  ['Updated assignment', 'Custom status', 'No learners', '2030-01-01 00:00 GMT'].forEach(label =>
    t.truthy(view.getByText(label))
  );
  [
    props.title,
    props.statusLabel,
    props.audienceSummary,
    props.dateRange,
    props.sync.message
  ].forEach(label => t.is(view.queryByText(label), null));
  const sync = view.container.querySelector('[data-name="assignment-sync"]');
  t.is(sync.getAttribute('data-sync-state'), 'error');
  t.is(sync.textContent, 'Retry required');
  const progress = view.getByRole('progressbar', {name: 'Updated assignment'});
  t.is(progress.getAttribute('aria-valuenow'), '99.999');
  t.is(progress.querySelector('[data-name="progress-bar-wrapper"] > div').style.width, '99.999%');
  t.truthy(view.getByText('99.999%'));
  const expected = render(<AssignmentStatusTag status="unrecognized" label="Custom status" />);
  t.is(
    view.container.querySelector('[data-name="assignment-status"]').innerHTML,
    expected.container.innerHTML
  );
});

test.serial('removes sync detail when it becomes empty', t => {
  const view = render(<AssignmentRow {...props} />);
  view.rerender(
    <AssignmentRow {...props} sync={{state: 'running', label: 'Working', message: ''}} />
  );
  const sync = view.container.querySelector('[data-name="assignment-sync"]');
  t.is(sync.textContent, 'Working');
  t.is(sync.getAttribute('data-sync-state'), 'running');
  t.is(view.queryByText(props.sync.message), null);
});

test.serial('invokes actions without submitting an enclosing form', t => {
  let actions = 0;
  let submissions = 0;
  const view = render(
    <form
      onSubmit={event => {
        event.preventDefault();
        submissions++;
      }}
    >
      <AssignmentRow {...props} actions={[{label: 'Edit', onClick: () => actions++}]} />
    </form>
  );
  const button = view.getByRole('button', {name: 'Edit'});
  t.is(button.type, 'button');
  fireEvent.click(button);
  t.is(actions, 1);
  t.is(submissions, 0);
});

test.serial('updates duplicate-label actions without retaining obsolete callbacks', t => {
  const calls = [0, 0, 0];
  const view = render(
    <AssignmentRow
      {...props}
      actions={[
        {label: 'Manage', onClick: () => calls[0]++, disabled: true},
        {label: 'Manage', onClick: () => calls[1]++}
      ]}
    />
  );
  const initial = view.getAllByRole('button', {name: 'Manage'});
  t.true(initial[0].disabled);
  t.false(initial[1].disabled);
  fireEvent.click(initial[0]);
  fireEvent.click(initial[1]);
  t.deepEqual(calls, [0, 1, 0]);
  view.rerender(
    <AssignmentRow
      {...props}
      actions={[
        {label: 'Manage', onClick: () => calls[2]++, disabled: false},
        {label: 'Manage', onClick: () => calls[1]++, disabled: true}
      ]}
    />
  );
  const updated = view.getAllByRole('button', {name: 'Manage'});
  t.false(updated[0].disabled);
  t.true(updated[1].disabled);
  fireEvent.click(updated[0]);
  fireEvent.click(updated[1]);
  t.deepEqual(calls, [0, 1, 1]);
});

test.serial('removes action controls when the array becomes empty', t => {
  const view = render(<AssignmentRow {...props} actions={[{label: 'Edit', onClick: () => {}}]} />);
  t.is(view.getAllByRole('button').length, 1);
  view.rerender(<AssignmentRow {...props} actions={[]} />);
  t.is(view.queryAllByRole('button').length, 0);
  t.is(view.container.querySelector('[data-name="assignment-actions"]'), null);
});

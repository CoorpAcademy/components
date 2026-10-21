import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Tag from '../../../atom/tag';
import AssignmentStatusTag, {getAssignmentTagType} from '..';

browserEnv();
test.afterEach(cleanup);

const assertTag = (t, status, type) => {
  t.is(getAssignmentTagType(status), type);
  const actual = render(<AssignmentStatusTag status={status} label="Consumer label" />);
  const expected = render(<Tag type={type} label="Consumer label" />);
  t.is(actual.container.innerHTML, expected.container.innerHTML);
};

[
  // Assignment lifecycle (edit-page and tracking headers only, never on a list row: A1.4 Q3)
  ['draft', 'progress'],
  ['upcoming', 'info'],
  ['active', 'success'],
  ['ended', 'default'],
  ['disabled', 'warning'],
  // List-row information tags (A1.4: « Ongoing changes », AQ37 « N modules unavailable »)
  ['ongoingChanges', 'progress'],
  ['unavailable', 'warning'],
  // Sync, only when not up to date (S1): there is no "up to date" key
  ['processing', 'progress'],
  ['syncError', 'failure'],
  // Learner row in the tracking table
  ['assigned', 'default'],
  ['inProgress', 'info'],
  ['completed', 'success'],
  ['removed', 'default'],
  // Computed learner flags, never statuses
  ['dueSoon', 'warning'],
  ['overdue', 'failure'],
  ['late', 'warning']
].forEach(([status, type]) => {
  test(`maps ${status} to ${type}`, t => {
    assertTag(t, status, type);
  });
});

test('falls back for unknown and prototype-property names', t => {
  [
    'unknown',
    'completedLate',
    'upToDate',
    'toString',
    'constructor',
    '__proto__',
    'hasOwnProperty'
  ].forEach(status => {
    assertTag(t, status, 'default');
  });
});

test('falls back for absent or empty status', t => {
  assertTag(t, undefined, 'default');
  assertTag(t, '', 'default');
});

test('preserves the consumer label', t => {
  const label = '<b>État & status</b>';
  const {container, getByText} = render(<AssignmentStatusTag status="active" label={label} />);
  t.truthy(getByText(label));
  t.is(container.querySelector('b'), null);
});

test('does not trim, fold case or alias unknown status strings', t => {
  ['Active', 'ACTIVE', ' active', 'active ', 'due-soon', 'duesoon', ' ', 'null'].forEach(status =>
    assertTag(t, status, 'default')
  );
  assertTag(t, null, 'default');
});

test('updates its styling and label when the consumer changes status', t => {
  const view = render(<AssignmentStatusTag status="active" label="Initial label" />);
  [
    {status: 'overdue', label: 'Late', type: 'failure'},
    {status: 'unrecognized', label: '', type: 'default'},
    {status: 'processing', label: 'Synchronisation', type: 'progress'}
  ].forEach(({status, label, type}) => {
    view.rerender(<AssignmentStatusTag status={status} label={label} />);
    const expected = render(<Tag type={type} label={label} />);
    t.is(view.container.innerHTML, expected.container.innerHTML);
    t.false(view.container.textContent.includes('Initial label'));
    expected.unmount();
  });
});

import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Tag from '../../../atom/tag';
import AssignmentStatusTag, {ASSIGNMENT_TAG_KEYS, getAssignmentTagType} from '..';

browserEnv();
test.afterEach(cleanup);

const assertTag = (t, status, type) => {
  t.is(getAssignmentTagType(status), type);
  const actual = render(<AssignmentStatusTag status={status} label="Consumer label" />);
  const expected = render(<Tag type={type} label="Consumer label" />);
  t.is(actual.container.innerHTML, expected.container.innerHTML);
};

const MAPPING = [
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
];

MAPPING.forEach(([status, type]) => {
  test(`maps ${status} to ${type}`, t => {
    assertTag(t, status, type);
  });
});

test('exports every mapped key', t => {
  t.deepEqual([...ASSIGNMENT_TAG_KEYS].sort(), MAPPING.map(([status]) => status).sort());
});

test('an unknown or absent status falls back to default', t => {
  // "Completed late" is a computed flag, never a status
  ['unknown', 'completedLate', 'toString', undefined].forEach(status =>
    assertTag(t, status, 'default')
  );
});

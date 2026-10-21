import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/fp/has';
import keys from 'lodash/fp/keys';
import Tag from '../../atom/tag';

// One status vocabulary for every assignment surface. Labels come from the consumer.
const TAG_TYPES = {
  // Assignment lifecycle: edit-page and tracking headers only, never on a list row (A1.4 Q3)
  draft: 'progress',
  upcoming: 'info',
  active: 'success',
  ended: 'default',
  disabled: 'warning',
  // List-row information tags (A1.4): « Ongoing changes », « N modules unavailable » (AQ37)
  ongoingChanges: 'progress',
  unavailable: 'warning',
  // Sync, only when not up to date (S1): there is no "up to date" key
  processing: 'progress',
  syncError: 'failure',
  // Learner row in the tracking table; "completed late" is a computed flag, not a status
  assigned: 'default',
  inProgress: 'info',
  completed: 'success',
  removed: 'default',
  // Computed learner flags
  dueSoon: 'warning',
  overdue: 'failure',
  late: 'warning'
};

export const ASSIGNMENT_TAG_KEYS = keys(TAG_TYPES);

export const getAssignmentTagType = status =>
  has(status, TAG_TYPES) ? TAG_TYPES[status] : 'default';

const AssignmentStatusTag = ({status, label}) => (
  <Tag type={getAssignmentTagType(status)} label={label} />
);

AssignmentStatusTag.propTypes = {
  status: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default AssignmentStatusTag;

import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atom/tag';

const TAG_TYPES = {
  upcoming: 'info',
  active: 'success',
  ended: 'default',
  disabled: 'warning',
  processing: 'progress',
  dueSoon: 'warning',
  overdue: 'failure',
  completed: 'success'
};

export const getAssignmentTagType = status =>
  Object.prototype.hasOwnProperty.call(TAG_TYPES, status) ? TAG_TYPES[status] : 'default';

const AssignmentStatusTag = ({status, label}) => (
  <Tag type={getAssignmentTagType(status)} label={label} />
);

AssignmentStatusTag.propTypes = {
  status: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default AssignmentStatusTag;

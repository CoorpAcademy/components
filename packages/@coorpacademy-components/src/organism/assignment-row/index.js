import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/fp/find';
import ListItem from '../list-item';
import {getAssignmentTagType} from '../../molecule/assignment-status-tag';

// Row tags appear only when they add information (A1.4 Q3), in this order. There is no lifecycle
// tag (the list tab says it, INFO) and no "up to date" sync tag (S1).
const ROW_TAG_KEYS = ['ongoingChanges', 'unavailable', 'processing', 'syncError'];

const toTitleTags = (tags = []) =>
  ROW_TAG_KEYS.map(key => find({key}, tags))
    .filter(Boolean)
    .map(({key, label}) => ({label, type: getAssignmentTagType(key)}));

// A click on one of the row's own controls (the Tracking button or link, the "…" menu and its
// items) is not a row click.
const ignoringControls = onClick =>
  onClick ? event => (event.target.closest('button, a') ? undefined : onClick(event)) : undefined;

const toListItemProps = ({
  infoTags,
  onClick,
  leftIcon = {iconName: 'calendar-check'},
  ...props
}) => ({
  ...props,
  leftIcon,
  titleTags: toTitleTags(infoTags),
  onClick: ignoringControls(onClick)
});

// The Coorpmanager assignment list row ("row C"): the Skills list row (organism/list-item) with
// the information tags beside the title, a contents line and a thin progress bar.
const AssignmentRow = props => <ListItem {...toListItemProps(props)} />;

AssignmentRow.propTypes = {
  title: ListItem.propTypes.title,
  // The audience summary and the date range, e.g. "Managers FR · 02 Nov 2026 – 15 Dec 2026 (GMT)"
  subtitle: ListItem.propTypes.subtitle,
  // The contents line, e.g. "6 modules · 2 external · 2 chapters"
  details: ListItem.propTypes.details,
  // Completion (0 to 100) and its label; absent on a draft
  progress: ListItem.propTypes.progress,
  infoTags: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(ROW_TAG_KEYS).isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  leftIcon: ListItem.propTypes.leftIcon,
  // The « Tracking » button (or « Edit » on a draft)
  buttonLink: ListItem.propTypes.buttonLink,
  bulletPointMenuButton: ListItem.propTypes.bulletPointMenuButton,
  // A click on the row opens the tracking page
  onClick: PropTypes.func,
  id: PropTypes.string,
  'data-name': PropTypes.string
};

export default AssignmentRow;

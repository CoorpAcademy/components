import React from 'react';
import find from 'lodash/fp/find';
import ListItem from '../list-item';
import {getAssignmentTagType} from '../../molecule/assignment-status-tag';
import propTypes, {AssignmentRowProps, InfoTag, ROW_TAG_KEYS} from './types';

const toTitleTags = (tags: InfoTag[] = []) =>
  ROW_TAG_KEYS.map(key => find({key}, tags))
    .filter((tag): tag is InfoTag => Boolean(tag))
    .map(({key, label}) => ({label, type: getAssignmentTagType(key)}));

// A click on one of the row's own controls (the Tracking button or link, the "…" menu and its
// items) is not a row click.
const ignoringControls = (onClick?: AssignmentRowProps['onClick']) =>
  onClick
    ? (event: React.MouseEvent<HTMLElement>) =>
        (event.target as Element).closest('button, a') ? undefined : onClick(event)
    : undefined;

const toListItemProps = ({
  infoTags,
  onClick,
  leftIcon = {iconName: 'calendar-check'},
  ...props
}: AssignmentRowProps) => ({
  ...props,
  leftIcon,
  titleTags: toTitleTags(infoTags),
  onClick: ignoringControls(onClick)
});

// The Coorpmanager assignment list row: the Skills list row (organism/list-item) with
// the information tags beside the title, a contents line and a thin progress bar.
const AssignmentRow = (props: AssignmentRowProps) => <ListItem {...toListItemProps(props)} />;

AssignmentRow.propTypes = propTypes;

export default AssignmentRow;

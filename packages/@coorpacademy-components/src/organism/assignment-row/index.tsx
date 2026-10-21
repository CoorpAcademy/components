import React from 'react';
import find from 'lodash/fp/find';
import ListItem from '../list-item';
import {getAssignmentTagType} from '../../molecule/assignment-status-tag';
import {ButtonProps} from '../../atom/button-menu/types';
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

// The menu items are left-aligned, as in the Skills list rows, so their fixed-width icons line
// up in one column whatever the label lengths. Delete keeps its danger colour.
const LEFT_ALIGNED: Record<string, ButtonProps['type']> = {
  default: 'defaultLeft',
  dangerous: 'dangerousLeft'
};

const leftAligned = (menu: AssignmentRowProps['bulletPointMenuButton']) =>
  menu && {
    ...menu,
    buttons: menu.buttons.map(({type = 'default', ...button}) => ({
      ...button,
      type: LEFT_ALIGNED[type] ?? type
    }))
  };

const toListItemProps = ({
  infoTags,
  onClick,
  bulletPointMenuButton,
  leftIcon = {iconName: 'calendar-check'},
  ...props
}: AssignmentRowProps) => ({
  ...props,
  leftIcon,
  titleTags: toTitleTags(infoTags),
  bulletPointMenuButton: leftAligned(bulletPointMenuButton),
  onClick: ignoringControls(onClick)
});

// The Coorpmanager assignment list row: the Skills list row (organism/list-item) with
// the information tags beside the title, a contents line and a thin progress bar.
const AssignmentRow = (props: AssignmentRowProps) => <ListItem {...toListItemProps(props)} />;

AssignmentRow.propTypes = propTypes;

export default AssignmentRow;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {COLORS} from '../../variables/colors';
import FaIcon from '../../atom/icon';
import Card, {cardPropTypes} from '../card';
import style from './style.css';

// The status pill is the card's own opaque pill (never atom/tag, never Card's notification slot):
// it sits on the card image, where a translucent tag is unreadable. No "completed late" state (L0).
const DUE_STATES = {
  todo: {iconName: 'circle', color: COLORS.cm_grey_500, className: style.todo},
  dueSoon: {iconName: 'clock', color: COLORS.cm_yellow_400, className: style.dueSoon},
  overdue: {
    iconName: 'triangle-exclamation',
    color: COLORS.cm_negative_200,
    className: style.overdue
  },
  done: {iconName: 'circle-check', color: COLORS.cm_positive_200, className: style.done}
};

// A module the learner was asked to complete: the catalogue card of its type (module, chapter,
// scorm, article, video, podcast), one status pill in the same slot on every format, and the due
// date (or, once finished, the completion date) in a tooltip on hover (N2). Never an assignment.
const AssignmentCard = props => {
  const {dueState, dueStateLabel, dueDateLabel, onClick, ...cardProps} = props;
  const {iconName, color, className} = DUE_STATES[dueState];
  return (
    <div data-name="assignment-card" className={style.wrapper}>
      <Card {...cardProps} onClick={onClick} />
      <div className={style.slot}>
        <div
          data-name="due-state"
          data-type={dueState}
          className={classnames(style.duePill, className)}
          onClick={onClick}
        >
          <FaIcon iconName={iconName} iconColor={color} size={{faSize: 12, wrapperSize: 12}} />
          <span>{dueStateLabel}</span>
        </div>
        <div data-name="due-date" className={style.tooltip}>
          {dueDateLabel}
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  ...cardPropTypes,
  dueState: PropTypes.oneOf(['todo', 'dueSoon', 'overdue', 'done']).isRequired,
  // The pill label: « To do », « Due soon », « Overdue », « Completed »
  dueStateLabel: PropTypes.string.isRequired,
  // Shown on hover, as given: "Due Sat 24 Oct", or "Completed Thu 22 Oct" once finished
  dueDateLabel: PropTypes.string.isRequired
};

export default AssignmentCard;

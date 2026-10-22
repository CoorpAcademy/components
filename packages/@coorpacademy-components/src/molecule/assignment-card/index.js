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
// The pill is described by the due date, so it is read without hover. React 17 has no useId: the
// id derives from the card's dataName (its rank in a list) and its title, never with whitespace.
const dueDateId = (dataName, title) =>
  ['due-date', dataName, title].filter(Boolean).join('-').replace(/\s+/g, '-');

const AssignmentCard = props => {
  const {dueState, dueStateLabel, dueDateLabel, onClick, ...cardProps} = props;
  const {iconName, color, className} = DUE_STATES[dueState];
  const dateId = dueDateId(cardProps.dataName, cardProps.title);
  return (
    <div data-name="assignment-card" className={style.wrapper}>
      <Card {...cardProps} onClick={onClick} />
      <div className={style.slot}>
        <div
          data-name="due-state"
          data-type={dueState}
          className={classnames(style.duePill, className)}
          aria-describedby={dateId}
        >
          <FaIcon iconName={iconName} iconColor={color} size={{faSize: 12, wrapperSize: 12}} />
          <span>{dueStateLabel}</span>
        </div>
        <div id={dateId} data-name="due-date" className={style.tooltip}>
          {dueDateLabel}
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  ...cardPropTypes,
  // The type chip's label. A module (type 'course') passes « Module »: never « Course » (AQ19).
  typeLabel: cardPropTypes.typeLabel,
  dueState: PropTypes.oneOf(['todo', 'dueSoon', 'overdue', 'done']).isRequired,
  // The pill label: « To do », « Due soon », « Overdue », « Completed »
  dueStateLabel: PropTypes.string.isRequired,
  // Shown on hover, as given: "Due Sat 24 Oct", or "Completed Thu 22 Oct" once finished
  dueDateLabel: PropTypes.string.isRequired
};

export default AssignmentCard;

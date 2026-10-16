import React from 'react';
import PropTypes from 'prop-types';
import Card, {cardPropTypes} from '../card';
import style from './style.css';

const AssignmentCard = props => {
  const {onClick = () => {}, dueState, notification, endDateLabel, assignments = []} = props;
  let assignmentNotification =
    notification && ['addFavorite', 'removeFavorite'].includes(notification.icon)
      ? notification
      : undefined;
  if (['todo', 'dueSoon', 'overdue', 'done'].includes(dueState) && notification) {
    assignmentNotification = {...notification, icon: dueState};
  }
  return (
    <div className={style.wrapper}>
      <Card {...props} notification={assignmentNotification} onClick={onClick} />
      {endDateLabel ? <div className={style.endDate}>{endDateLabel}</div> : null}
      {assignments.length > 0 ? (
        <ul className={style.assignments}>
          {assignments.map(({title}, index) => (
            <li key={`${title}-${index}`}>{title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

AssignmentCard.propTypes = {
  ...cardPropTypes,
  dueState: PropTypes.string,
  endDateLabel: PropTypes.string,
  assignments: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string}))
};

export default AssignmentCard;

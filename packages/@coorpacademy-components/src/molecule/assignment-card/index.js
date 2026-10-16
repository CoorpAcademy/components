import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, has, keys} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import FaIcon from '../../atom/icon';
import Card, {cardPropTypes} from '../card';
import CertificationCard from '../certification-card';
import style from './style.css';

// Opaque pills: the card image sits behind them, so a translucent back-office tag is unreadable.
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

const FAVORITE_ICONS = ['addFavorite', 'removeFavorite'];

const DuePill = ({dueState, message, onClick}) => {
  const {iconName, color, className} = DUE_STATES[dueState];
  return (
    <div
      data-name="due-state"
      data-type={dueState}
      className={classnames(style.duePill, className)}
      onClick={onClick}
    >
      <FaIcon iconName={iconName} color={color} size={{faSize: 12, wrapperSize: 12}} />
      <span>{message}</span>
    </div>
  );
};

DuePill.propTypes = {
  dueState: PropTypes.oneOf(keys(DUE_STATES)),
  message: PropTypes.string,
  onClick: PropTypes.func
};

const AssignmentCard = props => {
  const {
    onClick = () => {},
    dueState,
    notification,
    endDateLabel,
    assignments = [],
    certificationCard,
    type
  } = props;
  const favoriteNotification = FAVORITE_ICONS.includes(get('icon', notification))
    ? notification
    : undefined;
  const hasDuePill = has(dueState, DUE_STATES) && !!get('message', notification);
  const isCertification = type === 'certification' && !!certificationCard;
  return (
    <div
      data-name="assignment-card"
      className={classnames(style.wrapper, isCertification ? style.certification : null)}
    >
      <div className={style.cardFrame}>
        {isCertification ? (
          <CertificationCard {...certificationCard} type="certification" onClick={onClick} />
        ) : (
          <Card
            {...props}
            notification={hasDuePill ? undefined : favoriteNotification}
            onClick={onClick}
          />
        )}
        {hasDuePill ? (
          <DuePill dueState={dueState} message={notification.message} onClick={onClick} />
        ) : null}
      </div>
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
  notification: PropTypes.shape({
    message: PropTypes.string,
    icon: PropTypes.oneOf([...FAVORITE_ICONS, ...keys(DUE_STATES)])
  }),
  dueState: PropTypes.string,
  endDateLabel: PropTypes.string,
  assignments: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string})),
  certificationCard: PropTypes.shape(CertificationCard.propTypes)
};

export default AssignmentCard;

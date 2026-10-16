import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, keys} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import FaIcon from '../../atom/icon';
import Tag from '../../atom/tag';
import style from './notification.css';

const DUE_STATE_TAG = {
  todo: {type: 'default', iconName: 'circle'},
  dueSoon: {type: 'warning', iconName: 'clock'},
  overdue: {type: 'failure', iconName: 'triangle-exclamation'},
  done: {type: 'success', iconName: 'circle-check'}
};

const NOTIFICATION_ICON = {
  ...DUE_STATE_TAG,
  addFavorite: {iconName: 'check', color: COLORS.cm_blue_700, backgroundColor: COLORS.primary_100},
  removeFavorite: {
    iconName: 'xmark',
    color: COLORS.neutral_500,
    backgroundColor: COLORS.cm_grey_100
  }
};

const handleOverlayClick = e => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

const Notification = props => {
  const {message, icon} = props;
  const dueTag = get(icon, DUE_STATE_TAG);
  if (dueTag) {
    return (
      <div data-name="notification" data-type={icon} className={style.dueNotification}>
        <Tag label={message} type={dueTag.type} icon={{iconName: dueTag.iconName}} />
      </div>
    );
  }
  const {iconName, color, backgroundColor} = get(icon, NOTIFICATION_ICON);
  return (
    <div
      data-name="notification"
      data-type={icon}
      onClick={handleOverlayClick}
      className={classnames(style.showOverlay, style.notificationWrapper)}
    >
      <div className={style.notification}>
        <div className={style.iconWrapper} style={{backgroundColor}}>
          <FaIcon
            iconName={iconName}
            color={color}
            size={{faSize: 20, wrapperSize: 20}}
            aria-label={icon}
          />
        </div>
        <div className={style.message}>
          <span role="status">{message}</span>
        </div>
      </div>
    </div>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(keys(NOTIFICATION_ICON)).isRequired
};

export default Notification;

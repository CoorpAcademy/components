import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, keys} from 'lodash/fp';
import {
  NovaCompositionNavigationMore as MoreIcon,
  NovaSolidLoginLocked as LockIcon,
  NovaSolidLocksLockUnlock1 as UnlockIcon,
  NovaCompositionCoorpacademyCheck as CheckIcon
} from '@coorpacademy/nova-icons';
import style from './notification.css';

const NOTIFICATION_ICON = {
  addFavorite: CheckIcon,
  removeFavorite: MoreIcon,
  lock: LockIcon,
  unlock: UnlockIcon
};

const handleOverlayClick = e => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

const Notification = props => {
  const {message, icon} = props;

  const IconType = get(icon, NOTIFICATION_ICON);
  return (
    <div
      data-name="notification"
      data-type={icon}
      onClick={handleOverlayClick}
      className={classnames(style.showOverlay, style.notificationWrapper)}
    >
      <div className={style.notification}>
        <IconType className={style.icon} color={null} stroke={null} />
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

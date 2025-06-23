import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, keys} from 'lodash/fp';
import {
  NovaSolidLoginLocked as LockIcon,
  NovaSolidLocksLockUnlock1 as UnlockIcon,
  NovaCompositionCoorpacademyCheck as CheckIcon,
  NovaSolidStatusClose as CloseIcon
} from '@coorpacademy/nova-icons';
import {COLORS} from '../../variables/colors';
import style from './notification.css';

const NOTIFICATION_ICON = {
  addFavorite: CheckIcon,
  removeFavorite: CloseIcon,
  lock: LockIcon,
  unlock: UnlockIcon
};

const NOTIFICATIONS_COLORS = {
  addFavorite: {color: COLORS.cm_blue_700, backgroundColor: COLORS.primary_100},
  removeFavorite: {color: COLORS.neutral_500, backgroundColor: COLORS.cm_grey_100}
};

const handleOverlayClick = e => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

const Notification = props => {
  const {message, icon} = props;
  const IconType = get(icon, NOTIFICATION_ICON);
  const {color, backgroundColor} = get(icon, NOTIFICATIONS_COLORS);
  return (
    <div
      data-name="notification"
      data-type={icon}
      onClick={handleOverlayClick}
      className={classnames(style.showOverlay, style.notificationWrapper)}
    >
      <div className={style.notification}>
        <div className={style.iconWrapper} style={{backgroundColor}}>
          <IconType className={style.icon} style={{color}} stroke={null} />
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

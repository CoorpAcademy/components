import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import keys from 'lodash/fp/keys';
import AddBookmarkIcon from '@coorpacademy/nova-icons/solid/bookmarks-and-tags/bookmark-5';
import RemoveBookmarkIcon from '@coorpacademy/nova-icons/line/bookmarks-and-tags/bookmark-5';
import LockIcon from '@coorpacademy/nova-icons/solid/locks/lock-1';
import UnlockIcon from '@coorpacademy/nova-icons/solid/locks/lock-unlock-1';
import style from './notification.css';

const NOTIFICATION_ICON = {
  addFavorite: AddBookmarkIcon,
  removeFavorite: RemoveBookmarkIcon,
  lock: LockIcon,
  unlock: UnlockIcon
};

const Notification = props => {
  const {message, icon} = props;

  const handleOverlayClick = e => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

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
          <span>{message}</span>
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

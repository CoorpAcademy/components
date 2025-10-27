import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, keys} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import FaIcon from '../../atom/icon';
import style from './notification.css';

const NOTIFICATION_ICON = {
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

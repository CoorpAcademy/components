import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import style from './style.css';

const notificationStyle = {
  warning: style.warning,
  error: style.error,
  success: style.success
};

const NotificationComponent = props => {
  const {
    type,
    message
  } = props;

  const className = type ? notificationStyle[type] : style.message;

  return (
    <div className={className}>
      <span>!</span>{message}
    </div>
  );
};

NotificationComponent.propTypes = {
  type: PropTypes.oneOf(keys(notificationStyle)).isRequired,
  message: PropTypes.string.isRequired
};
export default NotificationComponent;

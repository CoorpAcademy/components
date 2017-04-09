import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const NotificationComponent = props => {
  const {
    type,
    message
  } = props;

  const className = type ? style[type] : style.message;

  return (
    <div className={className}>
      <span>!</span>{message}
    </div>
  );
};

NotificationComponent.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
export default NotificationComponent;

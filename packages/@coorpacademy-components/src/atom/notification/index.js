import React, {PropTypes} from 'react';
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
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func
};
export default NotificationComponent;

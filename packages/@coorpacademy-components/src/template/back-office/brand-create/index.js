import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import BrandCreateForm from '../../../molecule/brand-create-form';
import Notification from '../../../atom/notification';
import Layout from '../layout';
import style from './style.css';

const BrandCreate = Layout(props => {
  const {
    notifications = []
  } = props;

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div
        key={index}
        className={style.notification}
      >
        <Notification {...notification} />
      </div>
    );
  });

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={notifications.length > 0 ? style.notifications : style.empty}>
          {notificationsList}
        </div>
        <BrandCreateForm {...props} />
      </div>
    </div>
  );
});

BrandCreate.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func
  })),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  field: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitValue: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
  isModified: PropTypes.bool
};

export default BrandCreate;

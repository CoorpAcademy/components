import React from 'react';
import PropTypes from 'prop-types';
import {NovaSolidInterfaceFeedbackInterfaceAlertTriangle as AlertIcon} from '@coorpacademy/nova-icons';
import styles from './style.css';

const LoginAlert = ({body}) => (
  <div className={styles.container}>
    <div
      className={styles.content}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: body}}
    />
    <div className={styles.iconContainer}>
      <AlertIcon className={styles.icon} />
    </div>
  </div>
);

LoginAlert.propTypes = {
  body: PropTypes.string.isRequired
};

export default LoginAlert;

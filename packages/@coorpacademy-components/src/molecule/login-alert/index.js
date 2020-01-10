import React from 'react';
import PropTypes from 'prop-types';
import {NovaSolidInterfaceFeedbackInterfaceAlertTriangle as AlertIcon} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import {container, iconContainer, content, icon} from './style.css';

const LoginAlert = ({body}, context) => (
  <div className={container}>
    <div
      className={content}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: body}}
    />
    <div className={iconContainer}>
      <AlertIcon height={16} className={icon} />
    </div>
  </div>
);

LoginAlert.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

LoginAlert.propTypes = {
  body: PropTypes.text
};

export default LoginAlert;

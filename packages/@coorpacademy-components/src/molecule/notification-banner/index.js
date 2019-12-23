import React from 'react';
import PropTypes from 'prop-types';
import {get, isUndefined} from 'lodash/fp';
import Button from '../../atom/button';
import Link from '../../atom/link';
import Provider from '../../atom/provider';
import style from './style.css';

const NotificationBanner = (props, context) => {
  const {skin} = context;
  const primary = get('common.primary', skin);
  const {type, message, href, buttonLabel} = props;

  return (
    <div className={style.banner}>
      <p>
        <span data-name="notification-banner-message">{message}</span>
      </p>
      <Button
        type="link"
        data-name="notification-banner-close-cta"
        className={style.button}
        submitValue={buttonLabel}
        href={href}
        style={{
          backgroundColor: primary
        }}
      />
      {!isUndefined(href) && (
        <Button
          type="link"
          data-name="notification-banner-cta"
          className={style.button}
          submitValue={buttonLabel}
          href={href}
          style={{
            backgroundColor: primary
          }}
        />
      )}
    </div>
  );
};

NotificationBanner.contextTypes = {
  skin: Provider.childContextTypes.skin
};

NotificationBanner.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  okButton: {
    href: PropTypes.string,
    buttonLabel: PropTypes.string
  },
  closeButton: {
    href: PropTypes.string,
    buttonLabel: PropTypes.string
  }
};

export default NotificationBanner;

import React from 'react';
import PropTypes from 'prop-types';
import {get, getOr, isUndefined, keys} from 'lodash/fp';
import {
  NovaLineToolsWrenchScrewdriver as MaintenanceIcon,
  NovaLineLeisureLeisurePartyPopper as FeatureIcon,
  NovaCompositionCoorpacademyListBullets3 as SurveyIcon
} from '@coorpacademy/nova-icons';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import style from './style.css';

const ICONS = {
  feature: {
    icon: FeatureIcon,
    title: 'New Feature',
    color: '#3ec483'
  },
  maintenance: {
    icon: MaintenanceIcon,
    title: 'Maintenance',
    color: '#f73f52'
  },
  survey: {
    icon: SurveyIcon,
    title: 'Survey',
    color: '#01579b'
  }
};

const NotificationBanner = (props, context) => {
  const {skin} = context;
  const primaryColor = getOr('#00B0FF', 'common.primary', skin);
  const whiteColor = get('common.white', skin);

  const {type, message, acceptOnClick, acceptLabel, closeLabel, closeOnClick} = props;
  const {icon: Icon, title, color} = get([type], ICONS);
  const handleOnClickAcceptButton = acceptOnClick;
  const handleOnClickCloseButton = closeOnClick;

  return (
    <div className={style.banner}>
      <div
        style={{
          background: color
        }}
        className={style.circle}
      >
        <Icon className={style.icon} />
      </div>
      <div className={style.text}>
        <div className={style.title}>{title}</div>
        <div data-name="notification-banner-message" className={style.message}>
          {message}
        </div>
      </div>
      <div className={style.buttons}>
        <Button
          type="link"
          data-name="notification-banner-close-cta"
          className={style.close}
          submitValue={closeLabel}
          onClick={handleOnClickCloseButton}
          style={{
            backgroundColor: whiteColor,
            color: '#546e7a'
          }}
        />
        {isUndefined(handleOnClickAcceptButton) ? null : (
          <Button
            type="link"
            data-name="notification-banner-cta"
            className={style.button}
            submitValue={acceptLabel}
            onClick={handleOnClickAcceptButton}
            target="_blank"
            style={{
              backgroundColor: primaryColor
            }}
          />
        )}
      </div>
    </div>
  );
};

NotificationBanner.contextTypes = {
  skin: Provider.childContextTypes.skin
};

NotificationBanner.propTypes = {
  type: PropTypes.oneOf(keys(ICONS)).isRequired,
  message: PropTypes.string.isRequired,
  acceptOnClick: PropTypes.func,
  acceptLabel: PropTypes.string,
  closeLabel: PropTypes.string,
  closeOnClick: PropTypes.func
};

export default NotificationBanner;

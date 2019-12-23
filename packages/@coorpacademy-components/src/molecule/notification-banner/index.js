import React from 'react';
import PropTypes from 'prop-types';
import {get, isUndefined} from 'lodash/fp';
import Button from '../../atom/button';
import { NovaLineToolsWrenchScrewdriver as MaintenanceIcon, NovaLineLeisureLeisurePartyPopper as FeatureIcon, NovaCompositionCoorpacademyListBullets3 as SurveyIcon } from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import style from './style.css';

const ICONS = {
  feature: {
    icon: FeatureIcon
  },
  maintenance: {
    icon: MaintenanceIcon
  },
  survey: {
    icon: SurveyIcon
  }
};

const NotificationBanner = (props, context) => {
  const {skin} = context;
  const primary = get('common.primary', skin);
  const {type, message, okButton, closeButton} = props;
  const IconType = get([type, 'icon'], ICONS);

  const handleOnClickCloseButton = closeButton.onClick;

  return (
    <div className={style.banner}>
      <IconType height={30}/>
      <p>
        <span data-name="notification-banner-message">{message}</span>
      </p>
      <Button
        type="link"
        data-name="notification-banner-close-cta"
        className={style.button}
        submitValue={closeButton.label}
        onClick={handleOnClickCloseButton}
        style={{
          backgroundColor: primary
        }}
      />
      {!isUndefined(get('href', okButton)) && (
        <Button
          type="link"
          data-name="notification-banner-cta"
          className={style.button}
          submitValue={okButton.label}
          href={okButton.href}
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
    label: PropTypes.string,
    onClick: PropTypes.func
  },
  closeButton: {
    href: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
  }
};

export default NotificationBanner;

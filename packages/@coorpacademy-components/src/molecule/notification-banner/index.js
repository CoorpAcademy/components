import React from 'react';
import PropTypes from 'prop-types';
import {get, isUndefined, keys} from 'lodash/fp';
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
  const {type, message, acceptHref, acceptLabel, closeLabel, closeOnClick} = props;
  const IconType = get([type, 'icon'], ICONS);
  const handleOnClickCloseButton = closeOnClick;

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
        submitValue={closeLabel}
        onClick={handleOnClickCloseButton}
        style={{
          backgroundColor: primary
        }}
      />
      {!isUndefined(acceptHref) && (
        <Button
          type="link"
          data-name="notification-banner-cta"
          className={style.button}
          submitValue={acceptLabel}
          href={acceptHref}
          target="_blank"
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
  type: PropTypes.oneOf(keys(ICONS)).isRequired,
  message: PropTypes.string.isRequired,
  acceptHref: PropTypes.string,
  acceptLabel: PropTypes.string,
  closeLabel: PropTypes.string,
  closeOnClick: PropTypes.func
};

export default NotificationBanner;

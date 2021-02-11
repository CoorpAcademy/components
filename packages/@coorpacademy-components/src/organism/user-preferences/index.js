import React from 'react';
import PropTypes from 'prop-types';
import {map, isEmpty} from 'lodash/fp';
import {NovaCompositionCoorpacademyInformationIcon as InfoIcon} from '@coorpacademy/nova-icons';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const Settings = props => {
  const {label, description, ...settings} = props;
  return (
    <div className={style.settings}>
      <InputSwitch {...settings} />
      <span className={style.label}>{label}</span>
      {isEmpty(description) ? null : (
        <div className={style.infoIconWrapper}>
          <InfoIcon height={16} className={style.infoIcon} />
          <span className={style.triangle}> </span>
          <div className={style.showToolTip}>
            <span className={style.descriptionLabel}>{description}</span>
          </div>
        </div>
      )}
    </div>
  );
};

Settings.propTypes = {
  ...InputSwitch.propTypes,
  label: PropTypes.string.isRequired,
  description: PropTypes.string
};

const UserPreferences = props => {
  const {preferences = []} = props;

  return (
    <div className={style.preferences}>
      {map(
        settings => (
          <Settings {...settings} key={settings.label} />
        ),
        preferences
      )}
    </div>
  );
};

UserPreferences.propTypes = {
  preferences: PropTypes.arrayOf(PropTypes.shape(Settings.propTypes))
};

export default UserPreferences;

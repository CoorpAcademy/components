import React from 'react';
import PropTypes from 'prop-types';
import {map, isEmpty} from 'lodash/fp';
import {NovaCompositionCoorpacademyInformationIcon as InfoIcon} from '@coorpacademy/nova-icons';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const Settings = props => {
  const {label, description, moreInfoAriaLabel, ...settings} = props;
  return (
    <div className={style.settings}>
      <InputSwitch {...settings} />
      <span className={style.label}>{label}</span>
      {isEmpty(description) ? null : (
        <div className={style.infoIconWrapper}>
          <InfoIcon
            height={16}
            width={16}
            className={style.infoIcon}
            aria-label={moreInfoAriaLabel}
          />
          <div className={style.showToolTip}>
            <div className={style.descriptionLabel}>{description}</div>
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
  const {preferences = [], moreInfoAriaLabel, groupAriaLabel} = props;

  return (
    <form>
      <div className={style.preferences} role="group" aria-label={groupAriaLabel}>
        {map(
          settings => (
            <Settings {...settings} key={settings.label} moreInfoAriaLabel={moreInfoAriaLabel} />
          ),
          preferences
        )}
      </div>
    </form>
  );
};

UserPreferences.propTypes = {
  preferences: PropTypes.arrayOf(PropTypes.shape(Settings.propTypes)),
  moreInfoAriaLabel: PropTypes.string,
  groupAriaLabel: PropTypes.string
};

export default UserPreferences;

import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const Settings = props => {
  const {label, ...settings} = props;
  return (
    <div className={style.settings}>
      <InputSwitch {...settings} />
      <span className={style.label}>{label}</span>
    </div>
  );
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
  preferences: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.bool,
      label: PropTypes.string,
      onChange: PropTypes.func
    })
  )
};

export default UserPreferences;

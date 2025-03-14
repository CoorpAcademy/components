import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import FaIcon from '../icon';
import style from './style.css';

const DEFAULT_ICON_STYLE = {padding: '0', width: '20px', height: '20px'};

const CheckboxWithTitle = props => {
  const {
    title,
    name,
    checked,
    onChange = noop,
    'data-name': dataName,
    'aria-label': ariaLabel,
    icon = {iconName: 'check', iconColor: 'white', preset: 's'},
    customStyle = {}
  } = props;
  const {iconName, iconColor, preset} = icon;
  const idCheckbox = useMemo(() => uniqueId('input-checkbox-'), []);
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);

  return (
    <div className={style.container} style={{...customStyle}}>
      <label htmlFor={idCheckbox}>
        <input
          type="checkbox"
          id={idCheckbox}
          name={name}
          onChange={handleChange}
          checked={checked}
          className={style.checkbox}
          data-name={dataName}
          aria-label={ariaLabel}
        />
        <div className={style.label}>
          {checked ? (
            <FaIcon
              className={style.icon}
              iconName={iconName}
              iconColor={iconColor}
              preset={preset}
              customStyle={DEFAULT_ICON_STYLE}
            />
          ) : (
            <FaIcon
              className={style.icon}
              iconName={'square'}
              iconColor={'transparent'}
              preset="s"
              customStyle={DEFAULT_ICON_STYLE}
            />
          )}
        </div>
      </label>
      {title ? (
        <span
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
      ) : null}
    </div>
  );
};

CheckboxWithTitle.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  icon: PropTypes.shape({
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    preset: PropTypes.string
  }),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
export default CheckboxWithTitle;

import React, {useMemo} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {noop, uniqueId} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import propTypes, {CmCheckboxWithTextProps} from './prop-types';

const CmCheckboxWithText = (props: CmCheckboxWithTextProps) => {
  const {
    title,
    name,
    checked,
    onChange = noop,
    'data-name': dataName,
    'aria-label': ariaLabel
  } = props;

  const idCheckbox = uniqueId('input-checkbox-');
  const handleChange = useMemo(
    () => (e: {target: {checked: boolean}}) => onChange(e.target.checked),
    [onChange]
  );
  const customIcon = checked ? 'check' : 'square';
  const customColor = checked ? COLORS.cm_primary_blue : COLORS.white;
  return (
    <div className={style.container}>
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
          <FontAwesomeIcon icon={customIcon} className={style.icon} color={customColor} />
        </div>
      </label>
      <span className={style.title}>{title}</span>
    </div>
  );
};

CmCheckboxWithText.propTypes = propTypes;

export default CmCheckboxWithText;

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import FaIcon from '../icon';
import style from './style.css';

const TriStateCheckbox = props => {
  const {checked, indeterminate, onChange = noop} = props;

  const idCheckbox = uniqueId('input-checkbox-');
  const handleChange = useCallback(e => onChange(e.target.checked), [onChange]);

  const renderIcon = () => {
    if (checked) {
      return <FaIcon iconName={'check'} iconColor={'white'} />;
    }
    if (indeterminate) {
      return <FaIcon iconName={'minus'} iconColor={'white'} />;
    }
    return null;
  };

  return (
    <label
      className={style.checkboxContainer}
      htmlFor={idCheckbox}
      data-name="checkbox-input-label"
    >
      <input
        type="checkbox"
        className={style.checkbox}
        id={idCheckbox}
        checked={checked === true || indeterminate === true}
        onChange={handleChange}
        data-name="checkbox-input"
      />
      <div data-name="checkbox-label" className={style.label}>
        {renderIcon()}
      </div>
    </label>
  );
};

TriStateCheckbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func
};

export default TriStateCheckbox;

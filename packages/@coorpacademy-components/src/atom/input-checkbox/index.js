import React, {useMemo} from 'react';
import {NovaSolidStatusValidate as CheckIcon} from '@coorpacademy/nova-icons';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const titleStylesClassNames = {
  primary: style.primary,
  secondary: style.secondary,
  tertiary: style.tertiary
};

const InputCheckbox = props => {
  const {
    checked,
    onChange = noop,
    error,
    disabled,
    required,
    titleStyle = 'primary',
    modified = false,
    theme = 'default',
    title: propsTitle
  } = props;

  const titleStyleClassName = titleStylesClassNames[titleStyle];
  const idCheckbox = uniqueId('input-checkbox-');
  const title = `${propsTitle}${required ? '*' : ''}`;
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);
  const className = getClassState(
    theme === 'coorpmanager' ? style.coorpManager : style.default,
    style.modified,
    style.error,
    modified,
    error
  );

  return (
    <div className={className}>
      <input
        type="checkbox"
        className={style.checkbox}
        name={title}
        id={idCheckbox}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label htmlFor={idCheckbox}>
        <CheckIcon className={style.icon} />
      </label>
      <span className={titleStyleClassName}>{title}</span>
    </div>
  );
};

InputCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  modified: PropTypes.bool,
  theme: PropTypes.oneOf(['coorpmanager', 'default']),
  titleStyle: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};

export default InputCheckbox;

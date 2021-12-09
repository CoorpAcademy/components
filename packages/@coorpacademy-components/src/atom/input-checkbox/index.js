import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaSolidStatusValidate as CheckIcon} from '@coorpacademy/nova-icons';
import {keys, noop, uniqueId} from 'lodash/fp';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const titleStylesClassNames = {
  inherit: style.inherit,
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
    title: propsTitle,
    noLabelMargins = false
  } = props;

  const titleStyleClassName = titleStylesClassNames[titleStyle];
  const idCheckbox = uniqueId('input-checkbox-');
  const title = `${propsTitle}${required ? '*' : ''}`;
  const handleChange = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      onChange(!checked);
    },
    [checked, onChange]
  );

  const modifiedClassName =
    theme === 'coorpmanager' ? style.coorpManagerModified : style.defaultModified;
  const errorClassName = theme === 'coorpmanager' ? style.coorpManagerError : style.defaultError;
  const defaultContainerClassName = theme === 'coorpmanager' ? style.coorpManager : style.default;

  const className = getClassState(
    defaultContainerClassName,
    modifiedClassName,
    errorClassName,
    modified,
    error
  );

  return (
    <div className={className} onClick={handleChange}>
      <input
        type="checkbox"
        className={style.checkbox}
        name={title}
        id={idCheckbox}
        checked={checked}
        disabled={disabled}
      />
      <div className={classnames(style.label, noLabelMargins ? style.noLabelMargins : undefined)}>
        <CheckIcon className={style.icon} />
      </div>
      <span className={titleStyleClassName} title={title}>
        {title}
      </span>
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
  noLabelMargins: PropTypes.bool,
  theme: PropTypes.oneOf(['coorpmanager', 'default']),
  titleStyle: PropTypes.oneOf(keys(titleStylesClassNames))
};

export default InputCheckbox;

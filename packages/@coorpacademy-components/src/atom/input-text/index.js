import React from 'react';
import PropTypes from 'prop-types';
import {noop, isNil, keys} from 'lodash/fp';
import classnames from 'classnames';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  setup: style.setup,
  cockpit: style.cockpit,
  default: style.default
};
const InputText = props => {
  const {
    autoFocus = false,
    placeholder = '',
    value,
    defaultValue,
    onChange = noop,
    error,
    theme = 'default',
    description,
    disabled,
    required,
    modified = false
  } = props;

  const title = `${props.title}${required ? '*' : ''}`;
  const handleChange = e => onChange(e.target.value);
  const mainClass = themeStyle[theme];
  const className = getClassState(style.default, style.modified, style.error, modified, error);
  const descriptionView = description ? (
    <div className={style.description}>{description}</div>
  ) : null;
  return (
    <div className={classnames(mainClass, className, isNil(props.title) && style.isNoTitle)}>
      <label>
        <span className={style.title}>{title}</span>
        <input
          autoFocus={autoFocus}
          type="text"
          name={title}
          className={style.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onInput={handleChange}
          disabled={disabled}
          onChange={noop}
        />
      </label>
      {descriptionView}
    </div>
  );
};

InputText.propTypes = {
  autoFocus: PropTypes.bool,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  theme: PropTypes.oneOf(keys(themeStyle)),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};
export default InputText;

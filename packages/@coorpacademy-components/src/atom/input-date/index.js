import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {isNil, keys, noop} from 'lodash/fp';
import classnames from 'classnames';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  default: style.defaultStyle,
  setup: style.setup,
  cockpit: style.cockpit,
  coorpmanager: style.coorpmanager
};

const InputDate = props => {
  const {
    title,
    name,
    value = '',
    min,
    max,
    onChange = noop,
    error,
    hint,
    disabled = false,
    required = false,
    modified = false,
    suffix,
    theme = 'default'
  } = props;

  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  const stateClass = getClassState(
    style.defaultStyle,
    style.modified,
    style.error,
    modified,
    error
  );
  const help = error || hint;

  return (
    <div
      className={classnames(
        themeStyle[theme],
        stateClass,
        style.container,
        disabled && style.disabled,
        isNil(title) && style.isNoTitle
      )}
    >
      <div className={style.fieldRow}>
        <label>
          <span className={style.title}>{title}</span>
          <input
            type="date"
            className={style.input}
            name={name}
            value={value}
            min={min}
            max={max}
            disabled={disabled}
            required={required}
            onInput={handleChange}
            onChange={noop}
          />
        </label>
        {suffix ? <span className={style.suffix}>{suffix}</span> : null}
      </div>
      {help ? <div className={classnames(style.hint, style.help)}>{help}</div> : null}
    </div>
  );
};

InputDate.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  modified: PropTypes.bool,
  suffix: PropTypes.string,
  theme: PropTypes.oneOf(keys(themeStyle))
};

export default InputDate;

import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, keys} from 'lodash/fp';
import classnames from 'classnames';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  setup: style.setup,
  cockpit: style.cockpit,
  default: style.default
};
const InputTextarea = props => {
  const {
    title: propsTitle,
    name,
    placeholder,
    value,
    theme = 'default',
    onChange = noop,
    error,
    required,
    description,
    disabled,
    modified = false
  } = props;

  const title = `${propsTitle}${required ? '* ' : ' '}`;
  const mainClass = themeStyle[theme];
  const className = getClassState(style.default, style.modified, style.error, modified, error);
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);

  return (
    <div className={classnames(mainClass, className)}>
      <label>
        <span className={style.title}>{title}</span>
        <textarea
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          onInput={handleChange}
          disabled={disabled}
          style={{
            resize: 'none'
          }}
        />
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

InputTextarea.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  theme: PropTypes.oneOf(keys(themeStyle)),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};
export default InputTextarea;

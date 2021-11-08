import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, isNil, isEmpty} from 'lodash/fp';
import {
  NovaCompositionCoorpacademySearch as SearchIcon,
  NovaSolidStatusClose as CloseIcon,
} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import style from './style.css';

const InputSearch = props => {
  const {
    autoFocus = false,
    placeholder = '',
    value,
    defaultValue,
    onChange = noop,
    disabled,
    title
  } = props;

  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);

  return (
    <div
      className={classnames(
        style.default,
        disabled && style.disabled,
        isNil(title) && style.isNoTitle
      )}
    >
      <label>
        <SearchIcon className={style.leftIcon} />
        <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
          {title}
        </span>

        <input
          autoFocus={autoFocus}
          type="text"
          name={title}
          className={style.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete={'off'}
          value={value}
          onInput={handleChange}
          disabled={disabled}
          onChange={noop}
        />
        {value ? <CloseIcon className={style.rightIcon} /> : null}
      </label>
    </div>
  );
};

InputSearch.propTypes = {
  autoFocus: PropTypes.bool,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputSearch;

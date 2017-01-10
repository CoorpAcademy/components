import React, {PropTypes} from 'react';
import noop from 'lodash/fp/noop';
import style from './style.css';

const InputText = props => {
  const {
    placeholder = '',
    value,
    defaultValue,
    onChange = noop,
    error,
    description,
    disabled,
    required
  } = props;

  const className = error ? style.error : style.default;
  const title = `${props.title}${required ? '*' : ''} :`;
  const handleChange = e => onChange(e.target.value);

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{title}</span>
        <input
          type='text'
          name={title}
          placeholder={placeholder}
          defaultValue={value || defaultValue}
          onInput={handleChange}
          disabled={disabled}
        />
      </label>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
};
export default InputText;

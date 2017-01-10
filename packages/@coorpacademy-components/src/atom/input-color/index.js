import React, {PropTypes} from 'react';
import noop from 'lodash/fp/noop';
import style from './style.css';

const InputText = props => {
  const {
    title,
    placeholder,
    value,
    defaultValue,
    onChange = noop,
    error,
    description
  } = props;

  const className = error ? style.error : style.default;
  const inlineStyle = {
    backgroundColor: value
  };
  const handleChange = e => onChange(e.target.value);

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <input
          type='text'
          name={title}
          placeholder={placeholder}
          defaultValue={value || defaultValue}
          onInput={handleChange}
        />
        <span
          className={style.preview}
          style={inlineStyle}
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
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
};

export default InputText;

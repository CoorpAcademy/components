import React, {PropTypes} from 'react';
import noop from 'lodash/fp/noop';
import style from './style.css';

const InputTextarea = props => {
  const {
    title,
    placeholder,
    value,
    onChange = noop,
    error,
    description
  } = props;

  const className = error ? style.error : style.default;

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <textarea
          resize='none'
          name={title}
          defaultValue={value}
          placeholder={placeholder}
          onInput={e => onChange(e.target.value)}
        >
        </textarea>
      </label>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputTextarea.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
};
export default InputTextarea;

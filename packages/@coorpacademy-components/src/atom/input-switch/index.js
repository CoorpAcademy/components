import React, {PropTypes} from 'react';
import noop from 'lodash/fp/noop';
import style from './style.css';

const InputSwitch = props => {
  const {
    title,
    value,
    disabled,
    onChange = noop,
    description
  } = props;

  const isDisabled = disabled ? 'disabled' : '';
  const isUnset = value === undefined;

  return (
    <div className={isUnset ? style.unset : style.default}>
      <span className={style.title}>{`${title} `}</span>
      <input
        type='checkbox'
        id={title}
        name={title}
        onChange={e => onChange(e.target.checked)}
        checked={value}
        disabled={isDisabled}
        className={style.checkbox}
      />
      <label htmlFor={title}></label>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputSwitch.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  description: PropTypes.string
};
export default InputSwitch;

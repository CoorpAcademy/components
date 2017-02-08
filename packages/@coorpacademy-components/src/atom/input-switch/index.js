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
  const handleChange = e => onChange(e.target.checked);

  const titleView = title ? (
    <span className={style.title}>{`${title} `}</span>
  ) : null;

  const descriptionView = description ? (
    <div className={style.description}>
      {description}
    </div>
  ) : null;

  return (
    <div className={isUnset ? style.unset : style.default}>
      {titleView}
      <input
        type='checkbox'
        id={title}
        name={title}
        onChange={handleChange}
        checked={value}
        disabled={isDisabled}
        className={style.checkbox}
      />
      <label htmlFor={title} />
      {descriptionView}
    </div>
  );
};

InputSwitch.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  description: PropTypes.string
};
export default InputSwitch;

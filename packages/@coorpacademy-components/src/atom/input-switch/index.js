import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import uniqueId from 'lodash/fp/uniqueId';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputSwitch = props => {
  const {title, value, disabled, onChange = noop, description, modified = false} = props;

  const idSwitch = uniqueId('input-switch-');
  const isDisabled = disabled ? 'disabled' : '';
  const handleChange = e => onChange(e.target.checked);

  const titleView = title ? <span className={style.title}>{`${title} `}</span> : null;

  const descriptionView = description
    ? <div className={style.description}>
        {description}
      </div>
    : null;
  const className = getClassState(style.default, style.modified, null, modified);

  return (
    <div className={className}>
      {titleView}
      <input
        type="checkbox"
        id={idSwitch}
        name={title}
        onChange={handleChange}
        checked={value}
        disabled={isDisabled}
        className={style.checkbox}
      />
      <label htmlFor={idSwitch} />
      {descriptionView}
    </div>
  );
};

InputSwitch.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};
export default InputSwitch;

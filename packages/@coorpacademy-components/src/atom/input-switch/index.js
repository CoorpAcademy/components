import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputSwitch = props => {
  const {title, name, id, value, disabled, onChange = noop, description, modified = false} = props;

  const idSwitch = id || uniqueId('input-switch-');
  const isDisabled = disabled ? 'disabled' : '';
  const handleChange = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      onChange(!value);
    },
    [onChange, value]
  );

  const titleView = title ? <span className={style.title}>{`${title} `}</span> : null;

  const descriptionView = description ? (
    <div className={style.description}>{description}</div>
  ) : null;
  const className = getClassState(style.default, style.modified, null, modified);

  return (
    <div className={className} onClick={handleChange}>
      {titleView}
      <input
        type="checkbox"
        id={idSwitch}
        name={name}
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
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};
export default InputSwitch;

import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash/fp';

const Checkbox = props => {
  const {checked, onChange = noop, type = 'checkbox', ...rest} = props;
  const [_checked, setChecked] = useState(checked);

  const handleChange = useCallback(
    e => {
      onChange(e.target.checked);
      setChecked(!_checked);
    },
    [_checked, onChange]
  );

  return <input {...rest} checked={_checked} type={type} onChange={handleChange} />;
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  'data-name': PropTypes.string,
  'aria-label': PropTypes.string
};

export default Checkbox;

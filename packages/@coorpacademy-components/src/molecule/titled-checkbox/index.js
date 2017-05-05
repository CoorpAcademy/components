import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import * as CustomPropTypes from '../../util/proptypes';
import Checkbox from '../../atom/checkbox';
import style from './style.css';

const TitledCheckbox = (props, context) => {
  const {skin} = context;
  const {state, background, onToggle} = props;

  const iconSuccess = String.fromCharCode(getOr('v', 'icons.success', skin));
  const label = state.label;
  const icon = state.checked ? iconSuccess : '';
  const handleChange = () => onToggle(state);

  return (
    <div className={style.default}>
      <label
        className={style.box}
        style={{
          background: background || '#3d3d3d'
        }}
      >
        <span
          className={style.icon}
          style={{
            color: 'white'
          }}
        >
          {icon}
        </span>
        <Checkbox className={style.input} checked={state.checked} onChange={handleChange} />
      </label>
      <span title={label}>
        {label}
      </span>
    </div>
  );
};

TitledCheckbox.contextTypes = {
  skin: PropTypes.object
};

TitledCheckbox.propTypes = {
  state: PropTypes.shape({
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired
  }).isRequired,
  background: CustomPropTypes.color,
  onToggle: PropTypes.func.isRequired
};

export default TitledCheckbox;

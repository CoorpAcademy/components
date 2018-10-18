import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import {ColorPropType} from '../../util/proptypes';
import Provider from '../../atom/provider';
import Checkbox from '../../atom/checkbox';
import style from './style.css';

const TitledCheckbox = (props, context) => {
  const {skin} = context;
  const {choice, background, onToggle} = props;

  const iconSuccess = String.fromCharCode(getOr('v', 'icons.success', skin));
  const label = choice.name;
  const icon = choice.selected ? iconSuccess : '';
  const handleChange = () => onToggle(choice);

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
        <Checkbox className={style.input} checked={choice.selected} onChange={handleChange} />
      </label>
      <span title={label}>{label}</span>
    </div>
  );
};

TitledCheckbox.contextTypes = {
  skin: Provider.childContextTypes.skin
};

TitledCheckbox.propTypes = {
  choice: PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }).isRequired,
  background: ColorPropType,
  onToggle: PropTypes.func.isRequired
};

export default TitledCheckbox;

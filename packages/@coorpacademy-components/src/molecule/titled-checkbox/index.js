import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import identity from 'lodash/fp/identity';
import * as CustomPropTypes from '../../util/proptypes';
import Checkbox from '../../atom/checkbox';
import style from './style.css';

const TitledCheckbox = (props, context) => {
  const {
    translate = identity,
    skin
  } = context;
  const {state, background, onToggle} = props;

  const iconSuccess = String.fromCharCode(getOr('v', 'icons.success', skin));
  const label = translate(state.label);
  const icon = state.checked ? iconSuccess : '';

  return (
    <div className={style.default}>
      <label className={style.box}
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
        <Checkbox
              className={style.input}
              checked={state.checked}
              onChange={unary(partial(onToggle, [state]))}
        />
      </label>
      <span>{label}</span>
    </div>
  );
};

TitledCheckbox.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
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

import React from 'react';
import getOr from 'lodash/fp/getOr';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    state: checker.shape({
      checked: checker.bool.optional,
      label: checker.string
    }).strict,
    background: checker.color.optional,
    onToggle: checker.func
  }).strict,
  children: checker.none
});

class TitledCheckbox extends React.Component {
  render() {
    const {translate, skin} = this.context;
    const {state, background, onToggle} = this.props;
    
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
          <input type="checkbox"
                className={style.input}
                checked={state.checked}
                onChange={unary(partial(onToggle, [state]))}
          />
        </label>
        <span>{label}</span>
      </div>
    );
  }
};

TitledCheckbox.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.function
};

TitledCheckbox.validate = createValidate(conditions);
export default TitledCheckbox;

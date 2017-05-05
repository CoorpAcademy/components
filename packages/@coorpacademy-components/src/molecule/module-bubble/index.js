import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import stopPropagation from '../../util/bubbling';
import style from './style.css';

const ModuleBubble = (props, context) => {
  const {skin} = context;

  const {onClick, module: _module, hideLabel = false} = props;

  const code = getOr('', `icons[${_module.status}]`, skin);
  const icon = String.fromCharCode(code);

  const filtered = _module.filtered;
  const disabled = _module.disabled;

  const click = !disabled && pipe(stopPropagation, unary(partial(onClick, [_module])));
  const label = _module.label;

  const iconColor = getOr('#00B0FF', ['common', 'primary'], skin);

  const labelView =
    !hideLabel &&
    <div className={style.label}>
      {label}
    </div>;

  return (
    <div className={filtered ? style.filtered : style.modulewrapper} data-name="module-bubble">
      <div className={style.bubble} onClick={click}>
        <span className={style.bubbleBG} />
        <span
          className={disabled ? style.iconDisabled : style.icon}
          style={{
            color: iconColor
          }}
        >
          {icon}
        </span>
      </div>
      {labelView}
    </div>
  );
};

ModuleBubble.contextTypes = {
  skin: PropTypes.object
};

ModuleBubble.propTypes = {
  module: PropTypes.shape({
    disabled: PropTypes.bool,
    filtered: PropTypes.bool,
    label: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
export default ModuleBubble;

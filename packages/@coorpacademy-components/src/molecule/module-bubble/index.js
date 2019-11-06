import React from 'react';
import PropTypes from 'prop-types';
import {getOr, pipe, partial, unary} from 'lodash/fp';
import Provider from '../../atom/provider';
import stopPropagation from '../../util/bubbling';
import style from './style.css';

const ModuleBubble = (props, context) => {
  const {skin} = context;

  // eslint-disable-next-line no-shadow
  const {onClick, status, filtered, disabled} = props;

  const code = getOr('', ['icons', status], skin);
  const icon = String.fromCharCode(code);

  const click =
    !disabled &&
    pipe(
      stopPropagation,
      unary(partial(onClick, [props]))
    );

  const iconColor = getOr('#00B0FF', ['common', 'primary'], skin);

  return (
    <div className={filtered ? style.filtered : style.modulewrapper} data-name="moduleBubble">
      <div className={style.bubble} onClick={click}>
        <span className={style.bubbleBG} />
        <span
          data-name="icon"
          className={disabled ? style.iconDisabled : style.icon}
          style={{
            color: iconColor
          }}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};

ModuleBubble.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ModuleBubble.propTypes = {
  disabled: PropTypes.bool,
  filtered: PropTypes.bool,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default ModuleBubble;

import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import style from './style.css';

const Button = props => {
  const {'data-name': dataName, disabled, label, onClick, type = 'default'} = props;
  const styleButton = classnames(
    style.button,
    type === 'default' && style.default,
    type === 'dangerous' && style.dangerous,
    disabled && style.disabled
  );

  const handleOnClick = useCallback(() => onClick(), [onClick]);
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      data-name={dataName}
      className={styleButton}
      onClick={handleOnClick}
    >
      <div className={style.buttonContent}>
        <span className={style.label}>{label}</span>
      </div>
    </button>
  );
};

Button.propTypes = {
  'data-name': PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'dangerous'])
};

const ButtonMenu = props => {
  const {buttons, 'data-name': dataName} = props;
  const buildButton = useCallback((button, index) => {
    return <Button {...button} key={button.label + index} />;
  }, []);

  const buttonList = useMemo(
    () => map.convert({cap: false})(buildButton, buttons),
    [buttons, buildButton]
  );

  return <div data-name={dataName}>{buttonList}</div>;
};

ButtonMenu.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)).isRequired,
  'data-name': PropTypes.string
};

export default ButtonMenu;

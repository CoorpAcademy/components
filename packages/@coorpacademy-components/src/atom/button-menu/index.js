import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import style from './style.css';

const Button = props => {
  const {'data-name': dataName, disabled, label, onClick, type = 'secondary'} = props;
  const styleButton = classnames(
    style.button,
    type === 'secondary' && style.secondary,
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
  type: PropTypes.oneOf(['secondary', 'dangerous'])
};

const ButtonMenu = props => {
  const {buttons, 'data-name': dataName} = props;
  const buildButton = (button, index) => {
    return <Button {...button} key={button.label + index} />;
  };
  const buttonList = useCallback(map.convert({cap: false})(buildButton, buttons), [
    buttons,
    buildButton
  ]);
  return <div data-name={dataName}>{buttonList}</div>;
};

ButtonMenu.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      'data-name': PropTypes.string,
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      type: PropTypes.oneOf(['secondary', 'dangerous'])
    })
  ).isRequired,
  'data-name': PropTypes.string
};

export default ButtonMenu;

import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import style from './style.css';

const Button = props => {
  const {
    type = 'secondary',
    label,
    disabled,
    'data-name': dataName,
    onClick,
    isFirst,
    isLast
  } = props;
  const styleButton = classnames(
    style.button,
    type === 'secondary' && style.secondary,
    type === 'dangerous' && style.dangerous,
    isFirst && style.firstButton,
    isLast && style.lastButton,
    disabled && style.disabled
  );


  const handleOnClick = useMemo(() => () => onClick(), [onClick]);
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
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['secondary', 'dangerous']).isRequired
};

const ButtonMenu = props => {
  const {'data-name': dataName, key, buttons} = props;
  const buildButton = (button, index) => {
    const isFirst = index === 0;
    const isLast = index === buttons.length - 1;
    console.log({isFirst, isLast, index, length: buttons.length});
    const buttonProps = {...button, isFirst, isLast};
    return <Button {...buttonProps} key={buttonProps.label + index} />;
  };
  const buttonList = map.convert({cap: false})(buildButton, buttons);
  return (
    <div key={key} data-name={dataName} >
      {buttonList}
    </div>
  );
};

ButtonMenu.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      'data-name': PropTypes.string,
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      type: PropTypes.oneOf(['secondary', 'dangerous']).isRequired
    })
  ).isRequired,
  'data-name': PropTypes.string,
  key: PropTypes.string.isRequired
};

export default ButtonMenu;

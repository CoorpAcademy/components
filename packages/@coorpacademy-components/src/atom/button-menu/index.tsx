import React, {useMemo, useCallback} from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import style from './style.css';
import propTypes, {ButtonMenuProps, ButtonProps, buttonPropTypes} from './types';

const Button = (props: ButtonProps) => {
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

Button.propTypes = buttonPropTypes;

const ButtonMenu = (props: ButtonMenuProps) => {
  const {buttons, 'data-name': dataName} = props;
  const buildButton = useCallback((button, index) => {
    return <Button {...button} key={button.label + index} />;
  }, []);

  const buttonList = useMemo(
    // @ts-expect-error (to avoid using map as any)
    () => map.convert({cap: false})(buildButton, buttons),
    [buttons, buildButton]
  );

  return <div data-name={dataName}>{buttonList}</div>;
};

ButtonMenu.propTypes = propTypes;

export default ButtonMenu;

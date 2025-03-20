import React, {useMemo, useCallback} from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import ButtonLink from '../button-link';
import style from './style.css';
import propTypes, {ButtonMenuProps, ButtonProps, buttonPropTypes} from './types';

const Button = (props: ButtonProps) => {
  const {
    'data-name': dataName,
    disabled,
    label,
    onClick,
    type = 'default',
    buttonLinkType,
    icon,
    customStyle = {}
  } = props;
  const styleButton = classnames(
    style.button,
    type === 'default' && style.defaultStyle,
    type === 'defaultLeft' && style.defaultLeft,
    type === 'dangerous' && style.dangerous,
    type === 'dangerousLeft' && style.dangerousLeft,
    disabled && style.disabled
  );
  const handleOnClick = useCallback(() => onClick(), [onClick]);

  return icon ? (
    <ButtonLink
      label={label}
      type={buttonLinkType}
      disabled={disabled}
      onClick={handleOnClick}
      data-name={dataName}
      className={styleButton}
      customStyle={{...customStyle}}
      icon={icon}
    />
  ) : (
    <button
      type="button"
      aria-label={label}
      title={label}
      data-name={dataName}
      className={styleButton}
      onClick={handleOnClick}
      disabled={disabled}
      style={customStyle}
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
  const buildButton = useCallback((button: ButtonProps, index) => {
    return <Button {...button} key={button.label + index} />;
  }, []);

  const buttonList = useMemo(
    // @ts-expect-error (to avoid using map as any)
    () => map.convert({cap: false})(buildButton, buttons),
    [buttons, buildButton]
  );

  return (
    <div data-name={dataName} className={style.buttonMenuContainer}>
      {buttonList}
    </div>
  );
};

ButtonMenu.propTypes = propTypes;

export default ButtonMenu;

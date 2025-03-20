import React, {useMemo, useCallback} from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import ButtonLink from '../button-link';
import style from './style.css';
import propTypes, {ButtonMenuProps, ButtonProps, buttonPropTypes, Theme} from './types';
import {DEFAULT_ICON_STYLE, THEMES} from './utils';

const buildCustomIconByTheme = (theme: Theme) => {
  const custom = THEMES[theme];
  return custom
    ? {
        icon: {
          ...DEFAULT_ICON_STYLE,
          faIcon: {...DEFAULT_ICON_STYLE.faIcon, ...custom}
        }
      }
    : null;
};

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

  const buttonLinkProps = {
    'aria-label': label,
    disabled,
    label,
    type: buttonLinkType,
    onClick: handleOnClick,
    'data-name': dataName,
    className: styleButton,
    customStyle: {...customStyle}
  };

  const buildButtonLinkIconProps = () => {
    if (!icon) return;

    const {theme, ...rest} = icon;
    return {
      ...rest,
      ...(theme && buildCustomIconByTheme(theme))
    };
  };

  return <ButtonLink {...buttonLinkProps} icon={buildButtonLinkIconProps()} />;
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

import React, {useMemo, useCallback} from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import {noop} from 'lodash/fp';
import ButtonLink from '../button-link';
import Select from '../select';
import InputSwitch from '../input-switch';
import style from './style.css';
import propTypes, {ButtonMenuProps, ButtonProps, buttonPropTypes} from './types';
import {DEFAULT_ICON_STYLE, THEMES} from './utils';

const buildCustomIconByTheme = (icon: ButtonProps['icon']) => {
  if (!icon) return;

  const {theme, ...iconProps} = icon;
  const custom = theme && THEMES[theme];
  if (!custom) return iconProps;

  const customProps = custom
    ? {
        ...DEFAULT_ICON_STYLE,
        faIcon: {...DEFAULT_ICON_STYLE.faIcon, ...custom}
      }
    : null;

  return {
    ...iconProps,
    ...customProps
  };
};

const Button = (props: ButtonProps) => {
  const {
    'data-name': dataName,
    disabled,
    label,
    onClick = noop,
    type = 'default',
    buttonLinkType,
    icon,
    customStyle = {},
    selectProps,
    switchProps,
    ...rest
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

  if (type === 'select' && selectProps) {
    return (
      <div className={style.setting}>
        <span className={style.label}>{selectProps.title}</span>
        <Select {...selectProps} aria-label={label} />
      </div>
    );
  }

  if (type === 'switch' && switchProps) {
    return (
      <div className={style.setting} aria-label={label}>
        <InputSwitch
          {...switchProps}
          aria-labelledby={`title-id-${dataName}`}
          titlePosition="right"
          theme="coorpmanager"
        />
        <span id={`title-id-${dataName}`} className={style.label}>
          {label}
        </span>
      </div>
    );
  }

  const buttonLinkProps = {
    ...rest,
    'aria-label': label,
    disabled,
    label,
    type: buttonLinkType,
    onClick: handleOnClick,
    'data-name': dataName,
    className: styleButton,
    customStyle: {...customStyle}
  };

  const iconProps = buildCustomIconByTheme(icon);

  return <ButtonLink {...buttonLinkProps} icon={iconProps} />;
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

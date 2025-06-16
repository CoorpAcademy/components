import React, {useMemo, useCallback} from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import {noop} from 'lodash/fp';
import ButtonLink from '../button-link';
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
    customLabelClassName,
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

  const buttonLinkProps = {
    ...rest,
    'aria-label': label,
    disabled,
    label,
    type: buttonLinkType,
    onClick: handleOnClick,
    'data-name': dataName,
    className: styleButton,
    customStyle: {...customStyle},
    customLabelClassName
  };

  const iconProps = buildCustomIconByTheme(icon);

  return <ButtonLink {...buttonLinkProps} icon={iconProps} />;
};

Button.propTypes = buttonPropTypes;

const ButtonMenu = (props: ButtonMenuProps) => {
  const {buttons, 'data-name': dataName, enableScroll = false} = props;
  const buildButton = useCallback((button: ButtonProps, index) => {
    return <Button {...button} key={button.label + index} />;
  }, []);

  const buttonList = useMemo(
    // @ts-expect-error (to avoid using map as any)
    () => map.convert({cap: false})(buildButton, buttons),
    [buttons, buildButton]
  );

  const shouldBeScrollable = enableScroll && buttons && buttons.length > 6;

  const containerStyle = classnames(style.buttonMenuContainer, {
    [style.scrollable]: shouldBeScrollable
  });

  return (
    <div data-name={dataName} className={containerStyle}>
      {buttonList}
    </div>
  );
};

ButtonMenu.propTypes = propTypes;

export default ButtonMenu;

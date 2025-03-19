import React, {useMemo, useCallback} from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import ButtonLink from '../button-link';
import style from './style.css';
import propTypes, {ButtonMenuProps, ButtonProps, buttonPropTypes} from './types';

const buildIconByTheme = (type: NonNullable<ButtonProps['icon']>['theme']) => {
  const defaultIconStyle = {
    position: 'left' as const,
    faIcon: {
      size: 14,
      color: '#515161',
      customStyle: {padding: 0}
    }
  };

  const themes = {
    publish: {name: 'cloud-arrow-up'},
    archive: {name: 'folder-open'},
    delete: {name: 'trash', color: '#B81400'}
  };

  return themes[type]
    ? {
        icon: {
          ...defaultIconStyle,
          faIcon: {...defaultIconStyle.faIcon, ...themes[type]}
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

  const buttonLinkProps = useMemo(() => {
    const defaultProps = {
      icon,
      'aria-label': label,
      disabled,
      label,
      type: buttonLinkType,
      onClick: handleOnClick,
      'data-name': dataName,
      className: styleButton,
      customStyle: {...customStyle}
    };

    return {
      ...defaultProps,
      ...(icon?.theme && buildIconByTheme(icon.theme))
    };
  }, [label, buttonLinkType, handleOnClick, dataName, styleButton, customStyle, icon, disabled]);

  return <ButtonLink {...buttonLinkProps} />;
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

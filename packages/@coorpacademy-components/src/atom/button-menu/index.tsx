import React, {useMemo, useCallback} from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import ButtonLink from '../button-link';
import {IconType} from '../button-link/types';
import style from './style.css';
import propTypes, {ButtonMenuProps, ButtonProps, buttonPropTypes} from './types';

const getIconProps = (icon?: IconType) => {
  if (!icon) return undefined;
  const {position, type, faIcon} = icon;
  return faIcon
    ? {
        faIcon: {
          name: faIcon.name,
          size: faIcon.size,
          color: faIcon.color
        },
        position
      }
    : {
        type,
        position
      };
};

const Button = (props: ButtonProps) => {
  const {
    'data-name': dataName,
    disabled,
    label,
    onClick,
    type = 'default',
    linkType,
    icon,
    customStyle,
    isCustomSkillMenu
  } = props;
  const styleButton = classnames(
    style.button,
    type === 'default' && style.defaultStyle,
    type === 'defaultLeft' && style.defaultLeft,
    type === 'dangerous' && style.dangerous,
    type === 'dangerousLeft' && style.dangerousLeft,
    disabled && style.disabled,
    isCustomSkillMenu && style.customSkillButton
  );

  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const iconProps = useMemo(() => getIconProps(icon), [icon]);

  return icon ? (
    <ButtonLink
      label={label}
      type={linkType}
      disabled={disabled}
      onClick={handleOnClick}
      data-name={dataName}
      className={styleButton}
      customStyle={{color: customStyle?.color}}
      hoverBackgroundColor={customStyle?.hoverBackgroundColor}
      hoverColor={customStyle?.color}
      icon={iconProps}
      isCustomSkillMenu={isCustomSkillMenu}
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
    >
      <div className={style.buttonContent}>
        <span className={style.label}>{label}</span>
      </div>
    </button>
  );
};

Button.propTypes = buttonPropTypes;

const ButtonMenu = (props: ButtonMenuProps) => {
  const {buttons, 'data-name': dataName, isCustomSkillMenu} = props;
  const buildButton = useCallback((button: ButtonProps, index) => {
    return <Button {...button} key={button.label + index} />;
  }, []);

  const buttonList = useMemo(
    // @ts-expect-error (to avoid using map as any)
    () => map.convert({cap: false})(buildButton, buttons),
    [buttons, buildButton]
  );

  return (
    <div
      data-name={dataName}
      className={classnames({
        [style.buttonMenuContainer]: isCustomSkillMenu
      })}
    >
      {buttonList}
    </div>
  );
};

ButtonMenu.propTypes = propTypes;

export default ButtonMenu;

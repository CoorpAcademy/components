import React, {useCallback, useState} from 'react';
import {convert} from 'css-color-function';
import {get, noop} from 'lodash/fp';
import classnames from 'classnames';
import {NovaCompositionCoorpacademyLogout as LogoutIcon} from '@coorpacademy/nova-icons';
import Link from '../link';
import type {WebContextValues} from '../provider/web-context';
import Provider from '../provider';
import style from './style.css';
import propTypes from './prop-types';
import type {CTAProps} from './prop-types';

const CTA = (props: CTAProps, legacyContext: WebContextValues) => {
  const {skin} = legacyContext;
  const {
    'aria-label': ariaLabel,
    submitValue = 'submit',
    name: ctaName,
    href,
    target,
    disabled = false,
    light = false,
    small = false,
    secondary = false,
    onClick,
    className,
    logout = false,
    rectangular = false,
    fullWidth = false,
    certificationButton = false,
    useButtonTag = false
  } = props;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const getStyle = useCallback(() => {
    const color = get('common.primary', skin);
    const grey = get('common.grey', skin);

    if (logout) return;

    if (disabled) {
      return {
        backgroundColor: grey,
        borderColor: grey,
        opacity: '0.3'
      };
    }

    if (hovered) {
      const darkenColor = convert(`color(${color} blackness(+10%))`);
      return {
        backgroundColor: darkenColor,
        borderColor: darkenColor
      };
    }

    if (secondary)
      return {
        color,
        borderColor: color
      };

    if (light)
      return {
        color
      };

    return {
      borderColor: color,
      backgroundColor: color
    };
  }, [disabled, hovered, light, logout, secondary, skin]);

  return (
    <Link
      href={href}
      onClick={disabled ? noop : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target={target}
      className={classnames(
        style.button,
        disabled ? style.disabled : null,
        small ? style.smallButton : null,
        light ? style.lightButton : null,
        secondary ? style.secondaryButton : null,
        logout ? style.logoutButton : null,
        rectangular ? style.rectangularButton : null,
        fullWidth ? style.fullWidth : null,
        certificationButton ? style.certificationButton : null,
        className
      )}
      data-name={ctaName || 'cta'}
      style={getStyle()}
      aria-label={ariaLabel}
      useButtonTag={useButtonTag}
    >
      {logout ? (
        <div className={style.logoutWrapper} data-name="cta-logout-label">
          <LogoutIcon height={15} width={15} className={style.logoutIcon} />
          {submitValue}
        </div>
      ) : (
        submitValue
      )}
    </Link>
  );
};

CTA.propTypes = propTypes;

CTA.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default CTA;

import React from 'react';
import PropTypes, {number} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import toLower from 'lodash/fp/toLower';
import merge from 'lodash/fp/merge';
import getOr from 'lodash/fp/getOr';
import {convert} from 'css-color-function';
import style from './style.css';

library.add(fas);

const DEFAULT_PRESET = 'm';
const ICON_LUMINOSITY = 32;
const DEFAULT_WRAPPER_SIZE = 40;
const ICON_PADDING = 8;
export const DEFAULT_ICON_COLOR = 'hsl(0, 0%, 32%)';

const SIZE_CONFIGS = {
  s: {
    faSize: 12,
    wrapperSize: 32
  },
  m: {
    faSize: 16,
    wrapperSize: DEFAULT_WRAPPER_SIZE
  },
  xl: {
    faSize: 20,
    wrapperSize: 48
  }
};

export const createGradientBackground = baseColor => {
  const startColor = convert(`color(${baseColor} lightness(91%))`);
  const endColor = convert(`color(${baseColor} lightness(81%))`);
  return `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`;
};

export const getForegroundColor = backgroundColor =>
  convert(`color(${backgroundColor} lightness(${ICON_LUMINOSITY}%))`);
// set lightness to 32%

const Icon = React.memo(function Icon({
  iconName,
  iconColor,
  backgroundColor,
  gradientBackground,
  borderRadius,
  preset = DEFAULT_PRESET,
  size,
  customStyle
}) {
  const effectiveIconColor =
    iconColor || (backgroundColor ? getForegroundColor(backgroundColor) : DEFAULT_ICON_COLOR);

  const effectiveSize = size
    ? merge(SIZE_CONFIGS[DEFAULT_PRESET], size)
    : getOr(SIZE_CONFIGS[DEFAULT_PRESET], toLower(preset), SIZE_CONFIGS);

  const wrapperSize = effectiveSize.wrapperSize - ICON_PADDING * 2;

  const iconWrapperStyle = {
    background: gradientBackground ? createGradientBackground(effectiveIconColor) : backgroundColor,
    borderRadius,
    width: wrapperSize,
    height: wrapperSize,
    padding: ICON_PADDING
  };

  return (
    <div className={style.iconWrapper} style={{...iconWrapperStyle, ...customStyle}}>
      <FontAwesomeIcon
        icon={`fa-${iconName}`}
        color={effectiveIconColor}
        fontSize={effectiveSize.faSize}
      />
    </div>
  );
});

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  gradientBackground: PropTypes.bool,
  borderRadius: PropTypes.string,
  preset: PropTypes.oneOf(['s', 'm', 'xl']),
  size: PropTypes.shape({
    faSize: number,
    wrapperSize: PropTypes.number
  }),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Icon;

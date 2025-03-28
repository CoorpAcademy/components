import React from 'react';
import PropTypes, {number} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {IconName, library} from '@fortawesome/fontawesome-svg-core';
import toLower from 'lodash/fp/toLower';
import merge from 'lodash/fp/merge';
import getOr from 'lodash/fp/getOr';
import {convert} from 'css-color-function';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import style from './style.css';

library.add(fas);

const DEFAULT_PRESET = 'm';
const ICON_LUMINOSITY = 32;
const DEFAULT_WRAPPER_SIZE = 40;
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

export const getForegroundColor = (backgroundColor: string): string =>
  convert(`color(${backgroundColor} lightness(${ICON_LUMINOSITY}%))`);
// set lightness to 32%
export interface IconProps {
  iconName: string;
  iconColor?: string;
  backgroundColor?: string;
  gradientBackground?: boolean;
  borderRadius?: string;
  preset?: string;
  size?: {
    faSize: number;
    wrapperSize: number;
  };
  customStyle?: React.CSSProperties;
}
const Icon: React.FC<IconProps> = React.memo(function Icon({
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

  const wrapperSize = effectiveSize.wrapperSize;

  const iconWrapperStyle = {
    background: gradientBackground
      ? createGradientBackground(effectiveIconColor, '81%', '91%')
      : backgroundColor,
    borderRadius,
    width: wrapperSize,
    height: wrapperSize
  };

  return (
    <div className={style.iconWrapper} style={{...iconWrapperStyle, ...customStyle}}>
      <FontAwesomeIcon
        icon={`fa-${iconName}` as IconName}
        color={effectiveIconColor}
        fontSize={effectiveSize.faSize}
      />
    </div>
  );
});

export const iconPropTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  gradientBackground: PropTypes.bool,
  borderRadius: PropTypes.string,
  preset: PropTypes.oneOf(['s', 'm', 'xl']),
  size: PropTypes.shape({
    faSize: number.isRequired,
    wrapperSize: PropTypes.number.isRequired
  }),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

Icon.propTypes = iconPropTypes;

export default Icon;

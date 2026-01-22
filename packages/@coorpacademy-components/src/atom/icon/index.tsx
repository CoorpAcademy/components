import React, {CSSProperties} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {IconName, library, IconPack} from '@fortawesome/fontawesome-svg-core';
import toLower from 'lodash/fp/toLower';
import merge from 'lodash/fp/merge';
import getOr from 'lodash/fp/getOr';
import {convert} from 'css-color-function';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import style from './style.css';

library.add(fas as IconPack);

export const DEFAULT_PRESET = 'm';
export const ICON_LUMINOSITY = 32;
export const DEFAULT_WRAPPER_SIZE = 40;
export const ICON_PADDING = 8;
export const DEFAULT_ICON_COLOR = 'hsl(0, 0%, 32%)';

export interface IconSize {
  faSize: number;
  wrapperSize: number;
}

export interface IconProps {
  iconName: string;
  iconColor?: string;
  backgroundColor?: string;
  gradientBackground?: boolean;
  borderRadius?: string;
  preset?: string;
  size?: IconSize;
  customStyle?: CSSProperties;
}

export function getForegroundColor(backgroundColor: string): string {
  return convert(`color(${backgroundColor} lightness(${ICON_LUMINOSITY}%))`);
}

const SIZE_CONFIGS: Record<'s' | 'm' | 'xl', IconSize> = {
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

const Icon: React.FC<IconProps> = ({
  iconName,
  iconColor,
  backgroundColor,
  gradientBackground,
  borderRadius,
  preset = DEFAULT_PRESET,
  size,
  customStyle
}) => {
  const effectiveIconColor =
    iconColor || (backgroundColor ? getForegroundColor(backgroundColor) : DEFAULT_ICON_COLOR);

  const effectiveSize = size
    ? merge(SIZE_CONFIGS[DEFAULT_PRESET], size)
    : getOr(SIZE_CONFIGS[DEFAULT_PRESET], toLower(preset), SIZE_CONFIGS);

  const hasBackground = backgroundColor || gradientBackground;
  if (!hasBackground) {
    return (
      <FontAwesomeIcon
        icon={`fa-${iconName}` as IconName}
        color={effectiveIconColor}
        fontSize={effectiveSize.faSize}
        style={customStyle}
      />
    );
  }

  const wrapperSize = effectiveSize.wrapperSize - ICON_PADDING * 2;
  const iconWrapperStyle: CSSProperties = {
    background: gradientBackground
      ? createGradientBackground(effectiveIconColor, '81%', '91%')
      : backgroundColor,
    borderRadius,
    width: wrapperSize,
    height: wrapperSize,
    padding: ICON_PADDING
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
};

export const propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  gradientBackground: PropTypes.bool,
  borderRadius: PropTypes.string,
  preset: PropTypes.oneOf(['s', 'm', 'xl']),
  size: PropTypes.shape({
    faSize: PropTypes.number.isRequired,
    wrapperSize: PropTypes.number.isRequired
  }),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

// const MemoizedIcon = React.memo(Icon) as React.MemoExoticComponent<React.FC<IconProps>> & {
//   propTypes?: React.WeakValidationMap<IconProps>;
//   defaultProps?: Partial<IconProps>;
// };

Icon.propTypes = propTypes as React.WeakValidationMap<IconProps>;
// MemoizedIcon.propTypes = Icon.propTypes;

export default Icon;

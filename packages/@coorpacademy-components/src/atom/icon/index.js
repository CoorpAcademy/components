import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import toLower from 'lodash/fp/toLower';
import merge from 'lodash/fp/merge';
import getOr from 'lodash/fp/getOr';

import Color from 'color';
import style from './style.css';

// FontAwesome documentation for where to find icon names: https://docs.fontawesome.com/web/add-icons/svg-icon-names
// Search for FontAwesome icons: https://fontawesome.com/search

library.add(fas);

const DEFAULT_PRESET = 'm';
const DEFAULT_WRAPPER_SIZE = 40;
const DEFAULT_COLOR = 'hsl(0, 0%, 32%)';

const SIZE_CONFIGS = {
  s: {
    faSize: 'sm',
    wrapperSize: 32
  },
  m: {
    faSize: 'lg',
    wrapperSize: DEFAULT_WRAPPER_SIZE
  },
  xl: {
    faSize: 'xl',
    wrapperSize: 48
  }
};
const hslObjectToHslString = ({h, s, l}) => `hsl(${h}, ${s}%, ${l}%)`;

const getIconColor = (backgroundColor, defaultColor = DEFAULT_COLOR) => {
  if (!backgroundColor) return defaultColor;

  try {
    const color = Color(backgroundColor);
    const adjustedColor = color.lightness(32);
    return hslObjectToHslString(adjustedColor.hsl());
  } catch (error) {
    return defaultColor;
  }
};

const Icon = ({iconName, iconColor, backgroundColor, preset = DEFAULT_PRESET, size}) => {
  const effectiveIconColor = iconColor || getIconColor(backgroundColor);

  const effectiveSize = size
    ? merge(SIZE_CONFIGS[DEFAULT_PRESET], size)
    : getOr(SIZE_CONFIGS[DEFAULT_PRESET], toLower(preset), SIZE_CONFIGS);

  const iconWrapperStyle = {
    backgroundColor,
    width: effectiveSize.wrapperSize,
    height: effectiveSize.wrapperSize
  };

  return (
    <div className={style.iconWrapper} style={iconWrapperStyle}>
      <FontAwesomeIcon
        icon={`fa-${iconName}`}
        color={effectiveIconColor}
        size={effectiveSize.faSize}
      />
    </div>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  preset: PropTypes.oneOf(['s', 'm', 'xl']),
  size: PropTypes.shape({
    faSize: PropTypes.oneOf([
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x'
    ]),
    wrapperSize: PropTypes.number
  })
};

export default Icon;

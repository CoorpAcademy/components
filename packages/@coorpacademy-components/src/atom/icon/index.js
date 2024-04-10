import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import toLower from 'lodash/fp/toLower';
import merge from 'lodash/fp/merge';
import getOr from 'lodash/fp/getOr';
import Color from 'colorjs.io';
import style from './style.css';

library.add(fas);

const DEFAULT_PRESET = 'm';
const ICON_LUMINOSITY = 32;
const DEFAULT_WRAPPER_SIZE = 24;
const ICON_PADDING = 16;
export const DEFAULT_ICON_COLOR = 'hsl(0, 0%, 32%)';

const SIZE_CONFIGS = {
  s: {
    faSize: 'sm',
    wrapperSize: 16
  },
  m: {
    faSize: 'lg',
    wrapperSize: DEFAULT_WRAPPER_SIZE
  },
  xl: {
    faSize: 'xl',
    wrapperSize: 32
  }
};

export const getForegroundColor = backgroundColor =>
  new Color(backgroundColor).to('hsl').set({l: ICON_LUMINOSITY}).toString();

const Icon = React.memo(function Icon({
  iconName,
  iconColor,
  backgroundColor,
  preset = DEFAULT_PRESET,
  size
}) {
  const effectiveIconColor =
    iconColor || backgroundColor ? getForegroundColor(backgroundColor) : DEFAULT_ICON_COLOR;

  const effectiveSize = size
    ? merge(SIZE_CONFIGS[DEFAULT_PRESET], size)
    : getOr(SIZE_CONFIGS[DEFAULT_PRESET], toLower(preset), SIZE_CONFIGS);

  const wrapperSize = effectiveSize.wrapperSize - ICON_PADDING;

  const iconWrapperStyle = {
    backgroundColor,
    width: wrapperSize,
    height: wrapperSize,
    padding: ICON_PADDING
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
});

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

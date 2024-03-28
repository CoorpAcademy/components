import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import toLower from 'lodash/fp/toLower';
import merge from 'lodash/fp/merge';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';

import style from './style.css';

library.add(fas);

const DEFAULT_SIZE = 'm';
const DEFAULT_FA_SIZE = 'lg';
const DEFAULT_WRAPPER_SIZE = 40;

const COLOR_MAPPING = {
  '#FFDCD1': '#A32700',
  '#FFF9D1': '#A38300',
  '#FAD6DE': '#93102F',
  '#D9F4F7': '#1B7B88',
  '#DDD1FF': '#2B00A3'
};

const SIZE_MAPPING = {
  s: {
    faSize: 'xs',
    wrapperSize: 32
  },
  m: {
    faSize: DEFAULT_FA_SIZE,
    wrapperSize: DEFAULT_WRAPPER_SIZE
  },
  xl: {
    faSize: 'xl',
    wrapperSize: 48
  }
};

const FontAwesomeAdaptiveIcon = ({
  iconName,
  iconColor,
  size = DEFAULT_SIZE,
  backgroundColor,
  customSize
}) => {
  const effectiveIconColor = iconColor || get(backgroundColor, COLOR_MAPPING);

  const effectiveSize = customSize
    ? merge(SIZE_MAPPING[DEFAULT_SIZE], customSize)
    : getOr(SIZE_MAPPING[DEFAULT_SIZE], toLower(size), SIZE_MAPPING);

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

FontAwesomeAdaptiveIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'xl']),
  customSize: PropTypes.shape({
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

export default FontAwesomeAdaptiveIcon;

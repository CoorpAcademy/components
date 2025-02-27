import React, {useMemo, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import get from 'lodash/fp/get';
import {convert} from 'css-color-function';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Provider from '../provider';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const LUMINOSITY_DELTA = 0.08;
const {cm_primary_blue: DEFAULT_BACKGROUND_COLOR} = COLORS;
const ICON_SIZE = '12px';

export const calculateHoveredSelectedBgColor = (
  selectedBgColor,
  luminosityDelta = LUMINOSITY_DELTA
) => convert(`hsl(from ${selectedBgColor} h s calc(l*(1 - ${luminosityDelta})))`);
// note: luminosity decrease is relative to the selected color

const Chip = (props, context) => {
  const {
    text,
    subText,
    selected = false,
    customIcon,
    onClick,
    leftIcon,
    backgroundColor = DEFAULT_BACKGROUND_COLOR
  } = props;
  const {skin} = context;
  const skinColor = get('common.primary', skin);
  const selectedBgColor = backgroundColor === 'skin' && skinColor ? skinColor : backgroundColor;
  const hoveredSelectedBgColor = calculateHoveredSelectedBgColor(selectedBgColor);

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useMemo(() => onClick, [onClick]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const hoverStyle = isHovered ? {backgroundColor: hoveredSelectedBgColor} : {};

  const defaultIcon = selected ? 'fa-check' : 'fa-plus';
  const color = selected ? COLORS.white : COLORS.cm_grey_400;

  return (
    <div
      className={classnames(style.container, !selected && style.unselected)}
      style={{
        ...(selected && selectedBgColor ? {backgroundColor: selectedBgColor} : {}),
        ...(selected && hoverStyle)
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={text}
      data-name={text}
    >
      <div className={style.left}>
        {leftIcon ? <FontAwesomeIcon style={{color}} icon={leftIcon} fontSize={ICON_SIZE} /> : null}
        <div title={text}>
          <span className={style.text} style={{color}}>
            {text}
          </span>
          {subText ? (
            <span className={style.subText} style={{color}}>
              {subText}
            </span>
          ) : null}
        </div>
      </div>
      <FontAwesomeIcon
        style={{color}}
        icon={customIcon ? `fa-${customIcon}` : defaultIcon}
        fontSize={ICON_SIZE}
      />
    </div>
  );
};

Chip.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Chip.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string,
  selected: PropTypes.bool,
  customIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  leftIcon: PropTypes.string
};

export default Chip;

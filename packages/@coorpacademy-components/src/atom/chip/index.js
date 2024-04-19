import React, {useMemo, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import get from 'lodash/fp/get';
import Color from 'colorjs.io';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Provider from '../provider';
import style from './style.css';

const DELTA_LUMINOSITY = 0.08;
const DEFAULT_BACKGROUND_COLOR = '#0061FF';
const ICON_SIZE = '12px';

const Chip = (props, context) => {
  const {text, selected = false, onClick, backgroundColor = DEFAULT_BACKGROUND_COLOR} = props;
  const {skin} = context;
  const skinColor = get('common.primary', skin);
  const selectedBgColor = backgroundColor === 'skin' && skinColor ? skinColor : backgroundColor;
  const hoveredSelectedBgColor = new Color(selectedBgColor)
    .to('hsl')
    .set({l: l => l * (1 - DELTA_LUMINOSITY)})
    .toString();

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useMemo(() => onClick, [onClick]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const hoverStyle = isHovered ? {backgroundColor: hoveredSelectedBgColor} : {};

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
      <div className={style.textZone} title={text}>
        <span className={style.text} style={selected ? {color: 'white'} : {}}>
          {text}
        </span>
      </div>
      <FontAwesomeIcon
        className={selected ? style.selectedIconWrapper : style.unselectedIconWrapper}
        icon={selected ? 'fa-check' : 'fa-plus'}
        font-size={ICON_SIZE}
      />
    </div>
  );
};

Chip.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Chip.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Chip;

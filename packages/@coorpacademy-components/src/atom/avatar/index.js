import React from 'react';
import classnames from 'classnames';
import style from './style.css';

export const SIZE_BIG = 0;
export const SIZE_SMALL = 1;
export const SHAPE_ROUND = 0;
export const SHAPE_OVAL = 1;

const Avatar = props => {
  const {color, image, size, shape, disabled} = props;
  const inline = {backgroundImage: `url(${image})`, borderColor: color};
  const className = classnames(
    style.avatar,
    size === SIZE_SMALL && style.small,
    size === SIZE_BIG && style.big,
    shape === SHAPE_ROUND && style.round,
    shape === SHAPE_OVAL && style.oval,
    disabled && style.disabled
  );

  return <div className={className} style={!disabled && inline || {}} />;
};

export default Avatar;

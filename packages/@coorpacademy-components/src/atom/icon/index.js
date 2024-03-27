import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {all} from '@awesome.me/kit-ed95a6224e/icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import style from './style.css';

library.add(...all);
const Icon = ({iconName, iconColor, iconSize, backgroundColor, backgroundSize}) => {
  const iconWrapperStyle = {backgroundColor, ...backgroundSize};
  return (
    <div className={style.iconWrapper} style={iconWrapperStyle}>
      <FontAwesomeIcon icon={iconName} color={iconColor} size={iconSize} />
    </div>
  );
};

Icon.propTypes = {
  iconName: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconColor: PropTypes.string,
  iconSize: PropTypes.oneOf(['sm', 'lg', 'xl']),
  backgroundColor: PropTypes.string,
  backgroundSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export default Icon;

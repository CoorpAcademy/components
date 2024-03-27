import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {byPrefixAndName} from '@awesome.me/kit-ed95a6224e/icons';
import style from './style.css';

const Icon = ({iconPrefix, iconName, iconColor, iconSize, backgroundColor, backgroundSize}) => {
  const iconWrapperStyle = {backgroundColor, ...backgroundSize};
  return (
    <div className={style.iconWrapper} style={iconWrapperStyle}>
      <FontAwesomeIcon
        icon={byPrefixAndName[iconPrefix][iconName]}
        color={iconColor}
        size={iconSize}
      />
    </div>
  );
};

Icon.propTypes = {
  iconPrefix: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconSize: PropTypes.oneOf(['sm', 'lg', 'xl']),
  backgroundColor: PropTypes.string,
  backgroundSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export default Icon;

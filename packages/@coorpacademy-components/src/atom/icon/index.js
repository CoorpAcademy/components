import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import toLower from 'lodash/fp/toLower';

import style from './style.css';

library.add(fas);

const getIconSize = size => {
  let iconSize;
  switch (toLower(size)) {
    case 's':
      iconSize = 'xs';
      break;
    case 'xl':
      iconSize = 'xl';
      break;
    default:
      iconSize = 'lg';
  }
  return iconSize;
};

const Icon = ({iconName, iconColor, size, backgroundColor}) => {
  const iconWrapperStyle = {backgroundColor};

  return (
    <div
      className={classNames({
        [style.iconWrapper]: true,
        [style.iconWrapperSmall]: size === 's',
        [style.iconWrapperMedium]: size === 'm' || size === undefined,
        [style.iconWrapperXLarge]: size === 'xl'
      })}
      style={iconWrapperStyle}
    >
      <FontAwesomeIcon icon={`fa-${iconName}`} color={iconColor} size={getIconSize(size)} />
    </div>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'xl'])
};

export default Icon;

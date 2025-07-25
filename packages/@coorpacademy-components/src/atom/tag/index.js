import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys} from 'lodash/fp';
import Icon from '../icon';
import style from './style.css';

const TAG_STYLES = {
  default: style.defaultStyle,
  success: style.success,
  failure: style.failure,
  warning: style.warning,
  progress: style.progress,
  info: style.info
};

const TAG_SIZE = {
  S: style.small,
  M: style.medium,
  L: style.large
};

const defaultIconProps = {
  position: 'left',
  preset: 's'
};

const renderIcon = iconProps => <Icon {...iconProps} />;

const Tag = ({label = '', type = 'default', size = 'M', customStyle = {}, icon = {}}) => {
  const {iconName} = icon;
  const {position, ...iconProps} = iconName
    ? {
        ...defaultIconProps,
        ...icon
      }
    : {};

  return (
    <span
      className={classnames(TAG_STYLES[type], TAG_SIZE[size])}
      data-name={`content-tag-${label}`}
      style={customStyle}
    >
      <div className={style.content}>
        {position === 'left' && iconName && renderIcon(iconProps)}
        <div>{label}</div>
        {position === 'right' && iconName && renderIcon(iconProps)}
      </div>
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(keys(TAG_STYLES)),
  size: PropTypes.oneOf(['S', 'M', 'L']),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  icon: PropTypes.shape({...Icon.propTypes, position: PropTypes.oneOf(['left', 'right'])})
};

export default Tag;

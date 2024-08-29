import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys} from 'lodash/fp';
import style from './style.css';

const TAG_STYLES = {
  default: style.default,
  success: style.success,
  failure: style.failure,
  warning: style.warning,
  progress: style.progress
};

const TAG_SIZE = {
  S: style.small,
  M: style.medium,
  L: style.large
};

const Tag = ({label, type = 'default', size = 'M', customStyle = {}}) => (
  <span
    className={classnames(TAG_STYLES[type], TAG_SIZE[size])}
    data-name={`content-tag-${label}`}
    style={customStyle}
  >
    {label}
  </span>
);

Tag.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(keys(TAG_STYLES)),
  size: PropTypes.oneOf(['S', 'M', 'L']),
  customStyle: PropTypes.objectOf(PropTypes.string)
};

export default Tag;

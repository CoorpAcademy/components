import React from 'react';
import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import style from './style.css';

const TAG_STYLES = {
  default: style.default,
  success: style.success,
  failure: style.failure,
  warning: style.warning,
  progress: style.progress
};

const Tag = props => {
  const {label, type = 'default'} = props;

  return (
    <span className={TAG_STYLES[type]} data-name={`content-tag-${label}`}>
      {label}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(keys(TAG_STYLES))
};

export default Tag;

import React from 'react';
import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import style from './style.css';

const TAG_STYLES = {
  default: style.default,
  published: style.published,
  revision: style.revision,
  archived: style.archived,
  draft: style.draft
};

const Tag = props => {
  const {label, type = 'default'} = props;

  return <span className={TAG_STYLES[type]}>{label}</span>;
};

Tag.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(keys(TAG_STYLES))
};

export default Tag;

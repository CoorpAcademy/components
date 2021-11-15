import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const Tag = props => {
  const {label, type = 'default'} = props;

  return (
    <span
      className={classnames(
        type === 'default' && style.default,
        type === 'published' && style.published,
        type === 'revision' && style.revision,
        type === 'archived' && style.archived
      )}
    >
      {label}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['default', 'published', 'revision', 'archived'])
};

export default Tag;

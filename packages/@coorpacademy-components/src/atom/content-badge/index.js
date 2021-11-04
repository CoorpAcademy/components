import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const ContentBadge = props => {
  const {category, label} = props;
  return (
    <span
      className={classnames(
        category === 'base' && style.base,
        category === 'advanced' && style.advanced,
        category === 'coach' && style.coach,
        category === 'chapter' && style.chapter,
        category === 'scorm' && style.scorm,
        category === 'video' && style.video,
        category === 'article' && style.article,
        category === 'podcast' && style.podcast
      )}
    >
      {label}
    </span>
  );
};

ContentBadge.propTypes = {
  category: PropTypes.string,
  label: PropTypes.string
};

export default ContentBadge;

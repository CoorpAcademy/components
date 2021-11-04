import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const ContentBagde = props => {
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

ContentBagde.propTypes = {
  category: PropTypes.oneOf([
    'base',
    'advanced',
    'coach',
    'chapter',
    'scorm',
    'video',
    'article',
    'podcast'
  ]),
  label: PropTypes.string
};

export default ContentBagde;

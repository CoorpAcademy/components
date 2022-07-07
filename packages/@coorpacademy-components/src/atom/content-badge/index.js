import React from 'react';
import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import style from './style.css';

const CATEGORIES = {
  base: style.base,
  advanced: style.advanced,
  coach: style.coach,
  chapter: style.chapter,
  scorm: style.scorm,
  video: style.video,
  article: style.article,
  podcast: style.podcast,
  course: style.course,
  hidden: style.hidden
};

const ContentBadge = props => {
  const {category, label} = props;
  return <span className={CATEGORIES[category]}>{label}</span>;
};

ContentBadge.propTypes = {
  category: PropTypes.oneOf(keys(CATEGORIES)),
  label: PropTypes.string
};

export default ContentBadge;

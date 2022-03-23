import React from 'react';
import PropTypes from 'prop-types';
import CardImagePreview from '../../atom/card-image-preview';
import ContentBadge from '../../atom/content-badge';
import ListBadges from '../list-badges';
import style from './style.css';

const CourseSection = props => {
  const {
    image,
    badgeList,
    title,
    author,
    position,
    'aria-label': {
      title: ariaLabelTitle,
      author: ariaLabelAuthor,
      modules: ariaLabelModules,
      position: coursePosition
    },
    id
  } = props;

  return (
    <div className={style.container} aria-label={ariaLabelTitle} data-name={`course-section-${id}`}>
      <div className={style.wrapper}>
        <span className={style.position} aria-label={coursePosition} data-name="position">
          {position}
        </span>
        <div className={style.containerImage}>
          <CardImagePreview image={image} />
        </div>
        <div className={style.containerInfos}>
          <div className={style.title}>{title}</div>
          <span className={style.author} aria-label={ariaLabelAuthor}>
            {author}
          </span>
        </div>
      </div>
      <ListBadges aria-label={ariaLabelModules} items={badgeList} />
    </div>
  );
};

CourseSection.propTypes = {
  'aria-label': PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    modules: PropTypes.string,
    position: PropTypes.string
  }),
  image: PropTypes.string,
  badgeList: PropTypes.arrayOf(PropTypes.shape(ContentBadge.propTypes)),
  title: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.number,
  id: PropTypes.string
};

export default CourseSection;

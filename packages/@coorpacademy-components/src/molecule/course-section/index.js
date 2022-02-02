import React from 'react';
import PropTypes from 'prop-types';
import CardImagePreview from '../../atom/card-image-preview';
import ContentBadge from '../../atom/content-badge';
import style from './style.css';

const CourseSection = props => {
  const {
    image,
    contentBadge: {category, label},
    title,
    author,
    position
  } = props;
  return (
    <div
      className={style.container}
      aria-label={`course-section-${position}`}
      data-name={`course-section-${position}`}
    >
      <span className={style.position}>{position}</span>
      <div className={style.containerImage}>
        <CardImagePreview image={image} />
      </div>
      <div className={style.containerInfos}>
        <div className={style.containerMainInfos}>
          <ContentBadge className={style.contentBadge} category={category} label={label} />
          <div className={style.title}>{title}</div>
        </div>
        <div>
          <span className={style.author} aria-label={author}>
            {author}
          </span>
        </div>
      </div>
    </div>
  );
};

CourseSection.propTypes = {
  image: CardImagePreview.propTypes,
  contentBadge: ContentBadge.propTypes,
  title: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.number
};

export default CourseSection;

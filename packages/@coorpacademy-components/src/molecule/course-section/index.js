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
    position,
    'aria-label': {title: ariaLabelTitle, author: ariaLabelAuthor},
    id
  } = props;
  return (
    <div className={style.container} aria-label={ariaLabelTitle} data-name={`course-section-${id}`}>
      <span className={style.position}>{position}</span>
      <div className={style.containerImage}>
        <CardImagePreview image={image} />
      </div>
      <div className={style.containerInfos}>
        <div className={style.containerMainInfos}>
          <ContentBadge className={style.contentBadge} category={category} label={label} />
          <div className={style.title}>{title}</div>
        </div>
        <span className={style.author} aria-label={ariaLabelAuthor}>
          {author}
        </span>
      </div>
    </div>
  );
};

CourseSection.propTypes = {
  'aria-label': PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string
  }),
  image: PropTypes.string,
  contentBadge: PropTypes.shape(ContentBadge.propTypes),
  title: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.number,
  id: PropTypes.string
};

export default CourseSection;

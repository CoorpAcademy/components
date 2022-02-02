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
    <div className={style.container}>
      <span className={style.position}>{position}</span>
      <CardImagePreview image={image} />
      <div className={style.containerInfos}>
        <div className={style.containerMainInfos}>
          <ContentBadge category={category} label={label} />
          <span className={style.title}>{title}</span>
        </div>
        <div>
          <span className={style.author}>{author}</span>
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

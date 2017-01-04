import React, {PropTypes} from 'react';
import Picture from '../../atom/picture';
import style from './style.css';

const CursusHeader = props => {
  const {image, title, description} = props;

  const imageView = image && (
    <Picture
      src={image}
    />
  );

  return (
    <div>
      <div className={style.imgWrapper}>
        {imageView}
        <div className={style.title}>
          {title}
        </div>
      </div>
      <div className={style.courseWrapper}>
        <div className={style.desc}>
          {description}
        </div>
      </div>
    </div>
  );
};

CursusHeader.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
export default CursusHeader;

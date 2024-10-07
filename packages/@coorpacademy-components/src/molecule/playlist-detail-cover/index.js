import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {COURSE_TYPES} from '../../variables/courses';
import style from './style.css';

const FALLBACK_PATH =
  'https://s3.eu-west-1.amazonaws.com/static.coorpacademy.com/assets/images/cover-fallback-external-$TYPE.png';

const PlaylistDetailCover = ({images}) => {
  const [firstColumnImages, secondColumnImages] = useMemo(() => {
    const imagesClone = [...images];
    return [imagesClone.splice(0, imagesClone.length / 2), imagesClone];
  }, [images]);

  const buildImageStyle = useCallback(({type, url}) => {
    const imageUrl = url || FALLBACK_PATH.replace('$TYPE', type);

    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  });

  return (
    <div className={style.container}>
      {images.length === 1 ? (
        <img className={style.image} style={buildImageStyle(images[0])} />
      ) : (
        <>
          <div className={style.imagesWrapper}>
            {firstColumnImages.map((image, index) => (
              <img key={index} className={style.image} style={buildImageStyle(image)} />
            ))}
          </div>
          <div className={style.imagesWrapper}>
            {secondColumnImages.map((image, index) => (
              <img key={index} className={style.image} style={buildImageStyle(image)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

PlaylistDetailCover.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(COURSE_TYPES),
      url: PropTypes.string
    })
  )
};

export default PlaylistDetailCover;

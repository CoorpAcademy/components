import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const FALLBACK_IMAGES = {
  podcast:
    'https://s3.eu-west-1.amazonaws.com/static.coorpacademy.com/assets/images/cover-fallback-external-podcast.png',
  video:
    'https://s3.eu-west-1.amazonaws.com/static.coorpacademy.com/assets/images/cover-fallback-external-video.png',
  interactive:
    'https://s3.eu-west-1.amazonaws.com/static.coorpacademy.com/assets/images/cover-fallback-external-interactive.png',
  document:
    'https://s3.eu-west-1.amazonaws.com/static.coorpacademy.com/assets/images/cover-fallback-external-document.png'
};

const PlaylistDetailCover = ({images}) => {
  const [firstImageList, secondImageList] = useMemo(() => {
    const imagesClone = [...images];
    return [imagesClone.splice(0, imagesClone.length / 2), imagesClone];
  }, [images]);

  const buildImageStyle = useCallback(({type, url}) => {
    const imageUrl = url || FALLBACK_IMAGES[type];

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
            {firstImageList.map((image, index) => (
              <img key={index} className={style.image} style={buildImageStyle(image)} />
            ))}
          </div>
          <div className={style.imagesWrapper}>
            {secondImageList.map((image, index) => (
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
      type: PropTypes.oneOf(['podcast', 'video', 'interactive', 'document']),
      url: PropTypes.string
    })
  )
};

export default PlaylistDetailCover;

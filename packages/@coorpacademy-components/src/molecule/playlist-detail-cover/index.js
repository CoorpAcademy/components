import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const PlaylistDetailCover = ({images}) => {
  const imagesClone = [...images];
  const [firstImageList, secondImageList] = useMemo(
    () => [imagesClone.splice(0, imagesClone.length / 2), imagesClone],
    [imagesClone]
  );

  const buildImageStyle = useCallback(url => {
    return {
      backgroundImage: `url(${url})`,
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
  images: PropTypes.arrayOf(PropTypes.string)
};

export default PlaylistDetailCover;

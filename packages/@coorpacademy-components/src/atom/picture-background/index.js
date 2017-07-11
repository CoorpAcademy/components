import React from 'react';
import PropTypes from 'prop-types';
import isObject from 'lodash/fp/isObject';
import style from './style.css';

const PictureBackground = props => {
  const {src} = props;

  const mobile = src.mobile;
  const desktop = src.desktop;

  const pictureView = isObject(src)
    ? <div className={style.deviceView}>
        <div
          className={style.mobile}
          style={{
            backgroundImage: `url(${mobile})`
          }}
        />
        <div
          className={style.desktop}
          style={{
            backgroundImage: `url(${desktop})`
          }}
        />
      </div>
    : <div className={style.default} style={{backgroundImage: `url(${src})`}} />;

  return (
    <div
      className={style.wrapper}
      style={{
        ...props.style
      }}
    >
      {pictureView}
    </div>
  );
};

PictureBackground.propTypes = {
  src: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.string), PropTypes.string.isRequired]),
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default PictureBackground;

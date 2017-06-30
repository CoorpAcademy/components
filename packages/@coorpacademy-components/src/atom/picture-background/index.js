import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import isObject from 'lodash/fp/isObject';
import style from './style.css';

const PictureBackground = props => {
  const {src} = props;

  if (isObject(src)) {
    const deviceView = map((device, type) => {
      const {mobile} = src;
      const {tablet} = src;
      const {desktop} = src;

      return (<div className={`picture-background__${type}`} style={{backgroundImage: `url(${device})`}} />);
    }, src);

    return <div>{deviceView}</div>;
  } else {
    <div className={style.default} style={{backgroundImage: `url(${src})`}} />
  };
  
  return (
    <div className={style.wrapper}>
      {deviceView}
    </div>
  );
};

PictureBackground.propTypes = {
  src: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string
  })
};

export default PictureBackground;

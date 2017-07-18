import React from 'react';
import PropTypes from 'prop-types';
import extractor from '../../util/image';
import Provider from '../../atom/provider';
import style from './style.css';

function ThemeImage({image}, {skin}) {
  const extract = extractor(skin);
  const defaultStyle = extract(image);

  const extractWithDefault = extractor(skin, image);
  const mobileStyle = extractWithDefault(`${image}-mobile`);
  const tabletStyle = extractWithDefault(`${image}-tablet`);
  const desktopStyle = extractWithDefault(`${image}-desktop`);

  return (
    <div className={style.wrapper}>

      <div className={style.default}>
        <div className={style.background} style={defaultStyle} />
      </div>
      <div className={style.desktop}>
        <div className={style.background} style={desktopStyle} />
      </div>
      <div className={style.tablet}>
        <div className={style.background} style={tabletStyle} />
      </div>
      <div className={style.mobile}>
        <div className={style.background} style={mobileStyle} />
      </div>
    </div>
  );
}

ThemeImage.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ThemeImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default ThemeImage;

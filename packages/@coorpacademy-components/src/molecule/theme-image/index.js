import React, {PropTypes} from 'react';
import extractor from '../../util/image';
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
      <div
        className={style.default}
        style={defaultStyle}
      />

      <div
        className={style.desktop}
        style={desktopStyle}
      />

      <div
        className={style.tablet}
        style={tabletStyle}
      />

      <div
        className={style.mobile}
        style={mobileStyle}
      />
    </div>
  );
}

ThemeImage.contextTypes = {
  skin: React.PropTypes.object
};

ThemeImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default ThemeImage;

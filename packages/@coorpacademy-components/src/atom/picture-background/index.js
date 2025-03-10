import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {isObject, keys} from 'lodash/fp';
import cssStyle from './style.css';

const viewStyle = {
  cover: cssStyle.cover,
  contain: cssStyle.contain
};

const PictureBackground = props => {
  const {src, view, style, alt = ''} = props;
  const mobile = src.mobile;
  const desktop = src.desktop;
  const bgStyle = viewStyle[view];

  const pictureView = isObject(src) ? (
    <div className={cssStyle.deviceView}>
      <div className={cssStyle.mobileContainer}>
        <img className={classnames(cssStyle.picture, bgStyle)} src={mobile} alt={alt} />
      </div>
      <div className={cssStyle.desktopContainer}>
        <img className={classnames(cssStyle.picture, bgStyle)} src={desktop} alt={alt} />
      </div>
    </div>
  ) : (
    <img className={classnames(cssStyle.defaultStyle, bgStyle)} src={src} alt={alt} />
  );

  return (
    <div className={cssStyle.wrapper} style={style}>
      {pictureView}
    </div>
  );
};

PictureBackground.propTypes = {
  view: PropTypes.oneOf(keys(viewStyle)),
  src: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.string), PropTypes.string.isRequired]),
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  alt: PropTypes.string
};

export default PictureBackground;

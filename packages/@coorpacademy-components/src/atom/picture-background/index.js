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
  const {src, view, style} = props;
  const mobile = src.mobile;
  const desktop = src.desktop;
  const bgStyle = viewStyle[view];

  const pictureView = isObject(src) ? (
    <div className={cssStyle.deviceView}>
      <div className={cssStyle.mobileContainer}>
        <div
          className={classnames(cssStyle.picture, bgStyle)}
          style={{
            backgroundImage: `url(${mobile})`
          }}
        />
      </div>
      <div className={cssStyle.desktopContainer}>
        <div
          className={classnames(cssStyle.picture, bgStyle)}
          style={{
            backgroundImage: `url(${desktop})`
          }}
        />
      </div>
    </div>
  ) : (
    <div
      className={classnames(cssStyle.default, bgStyle)}
      style={{backgroundImage: `url(${src})`}}
    />
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
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default PictureBackground;

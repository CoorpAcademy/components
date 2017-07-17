import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isObject from 'lodash/fp/isObject';
import keys from 'lodash/fp/keys';
import style from './style.css';

const viewStyle = {
  cover: style.cover,
  contain: style.contain
};

const PictureBackground = props => {
  const {src, view} = props;

  const mobile = src.mobile;
  const desktop = src.desktop;
  const bgStyle = viewStyle[view];

  const pictureView = isObject(src)
    ? <div className={style.deviceView}>
        <div className={style.mobile}>
          <div
            className={classnames(style.picture, bgStyle)}
            style={{
              backgroundImage: `url(${mobile})`
            }}
          />
        </div>
        <div className={style.desktop}>
          <div
            className={classnames(style.picture, bgStyle)}
            style={{
              backgroundImage: `url(${desktop})`
            }}
          />
        </div>
      </div>
    : <div
        className={classnames(style.default, bgStyle)}
        style={{backgroundImage: `url(${src})`}}
      />;

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
  view: PropTypes.oneOf(keys(viewStyle)),
  src: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.string), PropTypes.string.isRequired]),
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default PictureBackground;
